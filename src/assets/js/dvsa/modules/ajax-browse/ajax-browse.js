import md5 from 'md5';
import findIndex from 'lodash/findIndex';
import find from 'lodash/find';
import { createStore } from 'redux';

import * as ACTIONS from './redux/actions';
import reducers from './redux/reducers';

import { AJAX_BROWSE_CONSTANTS } from './constants';
import { toggleClass, elHasClass, closestParentOfEl } from './../../../shared';

export class AjaxBrowse {
  constructor(element = false) {
    if (!element) return;

    if (ENV_PRODUCTION) {
      this.store = createStore(reducers);
    } else {
      // Development only
      // Adds ability to use redux dev tool chrome extension
      this.store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    }
    this.store.subscribe(this.storeListener);
    this.store.dispatch(ACTIONS.setupContainer(element));
    this.store.dispatch(ACTIONS.setupStarted());
  }

  /**
   * Store change handler
   */
  storeListener = () => {
    let state = this.store.getState();
    // Run setup
    if (state.settings.settingUp) {
      console.log(state.settings);
      this.addItemsFromDOM(state.settings.container.element);
      this.store.dispatch(ACTIONS.setupCompleted());
    }
  };

  /**
   * Setup
   * - Add event handlers
   */
  setup = () => {
    store.dispatch(ACTIONS.enableLoading());
    // this.refreshAllBlocksFromDOM();

    // // Check if state has been setup
    // if (!this.state || !this.state.blocks || !this.state.size) {
    //   return console.warn('State was not setup correctly, aborting.');
    // }

    // this.addEventListeners();
  };

  addItemsFromDOM = container => {
    // Check container exists
    if (!container) return;
    // Get all the blocks from the DOM
    let blocksFromDOM = container.querySelectorAll('.' + AJAX_BROWSE_CONSTANTS.classNames.block.base);
    // Check if any blocks exist
    if (!blocksFromDOM) return;
    // Convert blocks to array
    blocksFromDOM = Array.from(blocksFromDOM);
    // Loop through each block
    blocksFromDOM.forEach((blockElement, blockIndex) => {
      // Add block to state
      let test = this.store.dispatch(ACTIONS.addBlock(blockElement));
      console.log(test);
      // Get current items for this block from the DOM
      // let itemsFromDOM = blockElement.querySelectorAll('.' + AJAX_BROWSE_CONSTANTS.classNames.item.base);
      // // Check if block has any items
      // if (!itemsFromDOM) return;
      // // Convert it into actual array
      // itemsFromDOM = Array.from(itemsFromDOM);
      // // Filter the items and create a hash for each one
      // let items = itemsFromDOM.map((itemElement, itemIndex) => {
      //   // Add hash to dom element attribute
      //   itemElement.setAttribute(AJAX_BROWSE_CONSTANTS.attributeNames.item.hash, itemHash);
      //   // Add it to the items array
      //   return {
      //     hash: itemHash,
      //     element: itemElement,
      //   };
      // });

      // let block = {
      //   hash: blockHash,
      //   element: blockElement,
      //   items,
      // };

      // store.dispatch(ACTIONS.addBlock(block));
    });
  };

  /**
   * Gets all the blocks from the DOM
   * and add it to the state for later use
   */
  refreshAllBlocksFromDOM = () => {
    let state = store.getState();
    let blocksFromDOM = state.settings.containerElement.querySelectorAll('.' + AJAX_BROWSE_CONSTANTS.classNames.block.base);

    // Check if any blocks exist
    if (!blocksFromDOM) {
      return console.warn('No blocks found inside ajax browse, aborting.');
    }

    // Convert HTML elements into an actual array
    blocksFromDOM = Array.from(blocksFromDOM);

    // Loop through each block in the DOM
    blocksFromDOM.forEach((blockElement, blockIndex) => {
      // Create hash based on html and index
      let blockHash = md5('' + blockIndex + blockElement.innerHTML);
      // Set block hash to its element attribute
      blockElement.setAttribute(AJAX_BROWSE_CONSTANTS.attributeNames.block.hash, blockHash);
      // Get current items from DOM
      let itemsFromDOM = blockElement.querySelectorAll('.' + AJAX_BROWSE_CONSTANTS.classNames.item.base);
      if (!itemsFromDOM) {
        return console.warn('Block found in DOM without any items, aborting.');
      }
      // Convert it into actual array
      itemsFromDOM = Array.from(itemsFromDOM);
      // Filter the items and create a hash for each one
      let items = itemsFromDOM.map((itemElement, itemIndex) => {
        // Create hash based on the html, current index, parent index and parent hash
        let itemHash = md5('' + blockIndex + itemIndex + blockHash + itemElement.innerHTML);
        // Add hash to dom element attribute
        itemElement.setAttribute(AJAX_BROWSE_CONSTANTS.attributeNames.item.hash, itemHash);
        // Add it to the items array
        return {
          hash: itemHash,
          element: itemElement,
        };
      });

      let block = {
        hash: blockHash,
        element: blockElement,
        items,
      };

      store.dispatch(ACTIONS.addBlock(block));
    });

    console.log(store.getState());

    // // Abort if size is higher than 6
    // if (this.state.size > 6) {
    //   return console.warn('Ajax browse supports maximum 6 levels deep, aborting.');
    // }
  };

  addEventListeners = () => {
    // Add click event handlers for all items
    $.delegate(this.ajaxBrowse, 'click', '.' + AJAX_BROWSE_CONSTANTS.classNames.item.base, this.itemClickHandler);
  };

  /**
   * Item click handler
   * - Fetches new list data
   * - Adds new items to the dom
   * - Updates state
   * - Refreshes DOM based on state
   */
  itemClickHandler = event => {
    // Prevent link from navigation user
    event.preventDefault();
    // Check if state is currently
    // processing another request
    if (this.state.loading) return;
    // Get the clicked item
    let item = closestParentOfEl(event.target, '.' + AJAX_BROWSE_CONSTANTS.classNames.item.base);
    // Get the clicked item parent block
    let block = closestParentOfEl(event.target, '.' + AJAX_BROWSE_CONSTANTS.classNames.block.base);
    // Check if item is in the DOM
    if (!item || !block) {
      return console.warn('No item or parent block found');
    }
    // Get the item hash from DOM
    let blockHash = block.getAttribute(AJAX_BROWSE_CONSTANTS.attributeNames.block.hash);
    let blockFromState = find(this.state.blocks, { hash: blockHash });
    if (!blockFromState || !blockFromState.items) {
      return console.warn('Block not found in the state or does not have any items');
    }
    // Add loading class to the current item
    toggleClass(item, AJAX_BROWSE_CONSTANTS.classNames.item.loading, true);
    this.toggleLoading(true);
  };

  toggleLoading = (loading = true) => {
    this.state.loading = loading;
    toggleClass(this.ajaxBrowse, AJAX_BROWSE_CONSTANTS.classNames.ajaxBrowse.loading, loading);
  };

  generateNewBlockHTML = (items = false) => {
    if (!items) return;
    let itemsHTML = [];
    items.forEach(item => {
      let itemHeading, itemDescription;
      if (item.heading) {
        itemHeading = `
        <span class="ajax-browse__link-heading">
          ${item.heading}
        </span>
        `;
      }
      if (item.description) {
        itemDescription = `
        <span class="ajax-browse__link-description">
          ${item.description}
        </span>
        `;
      }
      itemsHTML.push(`
      <li class="ajax-browse__item">
        <a href="${item.url}" class="ajax-browse__link">
         ${itemHeading}
         ${itemDescription} 
        </a>
      </li>
      `);
    });
    itemsHTML = itemsHTML.join(' ');
    let HTML = `
    <div class="ajax-browse__block">
      <div class="ajax-browse__block-inner">
        <ul class="ajax-browse__list">
          ${itemsHTML}
        </ul>
      </div>
    </div>
    `;
    return HTML;
  };

  refreshState = () => {};
}
