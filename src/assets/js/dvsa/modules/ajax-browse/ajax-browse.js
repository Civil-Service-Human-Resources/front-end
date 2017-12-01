import md5 from 'md5';
import findIndex from 'lodash/findIndex';
import find from 'lodash/find';
import has from 'lodash/has';
import { createStore } from 'redux';

import * as ACTIONS from './redux/actions';
import reducers from './redux/reducers';
import * as SELECTORS from './redux/selectors';

import { AJAX_BROWSE_CONSTANTS } from './constants';
import { toggleClass, elHasClass, closestParentOfEl, difference } from './../../../shared';

import { Browse } from './mithril/components/browse';
import m from 'mithril';

export class AjaxBrowse {
  constructor(element = false) {
    if (!element) return;

    let endpointURL = element.getAttribute(AJAX_BROWSE_CONSTANTS.attributeNames.endpointURL);

    if (!endpointURL) {
      return console.warn('Please provide an endpoint url for ajax browse in the data attribute.');
    }

    // Create a redux store
    if (ENV_PRODUCTION) {
      this.store = createStore(reducers);
    } else {
      // Development only
      // Adds ability to use redux dev tool chrome extension
      this.store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    }

    this._previousState = this.store.getState();

    this.store.subscribe(this.storeListener);

    this.store.dispatch(ACTIONS.setupContainer(element));
    this.store.dispatch(ACTIONS.setupEndpointURL(endpointURL));
    this.store.dispatch(ACTIONS.setupStarted());
  }

  /**
   * Store change handler
   */
  storeListener = () => {
    let state = this.store.getState();
    let stateDiff = difference(state, this._previousState);
    this._previousState = state;

    let container = state.settings.container.element;

    // Check for setup
    if (has(stateDiff, 'settings.settingUp') && stateDiff.settings.settingUp) {
      // Create block tree from DOM nodes
      this.addItemsFromDOM(container);
      // Reset current DOM container element
      this.resetContainer(container);
      // Update state to mark setup as completed
      this.store.dispatch(ACTIONS.setupCompleted());
    }

    // Check for when setup is completed
    if (has(stateDiff, 'settings.setupCompleted') && state.settings.setupCompleted) {
      // Refresh DOM with items from state
      this.renderMithril(container);
    }

    if (state.settings.setupCompleted) {
      m.redraw();
    }
  };

  /**
   * Gets all the blocks from the DOM
   * and add it to the state for later use
   *
   * @param {HTMLElement} container DOM element which represent the current ajax browse
   */
  addItemsFromDOM = container => {
    // Check container exists
    if (!container) return;

    // Update state
    this.store.dispatch(ACTIONS.startAddingBlocks());

    // Get all the blocks from the DOM
    let blocksFromDOM = container.querySelectorAll('.' + AJAX_BROWSE_CONSTANTS.classNames.block.base);

    // Check if any blocks exist
    if (!blocksFromDOM) return;

    // Convert blocks to array
    blocksFromDOM = Array.from(blocksFromDOM);

    // Loop through each block
    blocksFromDOM.forEach((blockElement, blockIndex) => {
      // Create hash to lookup block
      let blockHash = md5(blockIndex + blockElement);

      //Get current items for this block from the DOM
      let itemsFromDOM = blockElement.querySelectorAll('.' + AJAX_BROWSE_CONSTANTS.classNames.item.base);

      // Check if block has any items
      if (!itemsFromDOM) return;

      // Convert it into actual array
      itemsFromDOM = Array.from(itemsFromDOM);

      // Filter the items and create a hash for each one
      let items = itemsFromDOM.map((itemElement, itemIndex) => {
        let href = itemElement.querySelector('.' + AJAX_BROWSE_CONSTANTS.classNames.link.base).href || '';
        let heading = itemElement.querySelector('.' + AJAX_BROWSE_CONSTANTS.classNames.link.heading).innerText || '';
        let description = itemElement.querySelector('.' + AJAX_BROWSE_CONSTANTS.classNames.link.description).innerText || '';
        let active = elHasClass(itemElement, AJAX_BROWSE_CONSTANTS.classNames.item.active);
        let itemId = itemElement.getAttribute(AJAX_BROWSE_CONSTANTS.attributeNames.item.id);
        let endOfTree = itemElement.getAttribute(AJAX_BROWSE_CONSTANTS.attributeNames.item.endOfTree) === 'true' ? true : false;
        return {
          href,
          heading,
          description,
          active,
          itemId,
          endOfTree,
        };
      });

      // Add block to state
      this.store.dispatch(ACTIONS.addBlock(items));
    });

    // Update state
    this.store.dispatch(ACTIONS.endAddingBlocks());
  };

  /**
   * Remove all current DOM nodes and,
   * changes the class name of the current container
   *
   * @param {HTMLElement} container DOM element which represent the current ajax browse
   */
  resetContainer = container => {
    container.innerHTML = '';
    container.setAttribute('class', 'ajax-browse__js-container');
  };

  /**
   * Recreates the DOM ajax browse element,
   * based on the blocks tree from the state
   *
   * @param {HTMLElement} container DOM element which represent the current ajax browse
   */
  renderMithril = container => {
    let state = this.store.getState();
    // m.render(container, <Browse state={state} store={this.store} />);
    m.mount(container, {
      view: () => {
        return m(Browse, { store: this.store });
      },
    });
  };
}
