import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AjaxBrowse from './AjaxBrowse';
import reducers from './reducers';
import * as ACTIONS from './actions';

let store = false;

if (ENV_PRODUCTION) {
  store = createStore(reducers);
} else {
  store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

export const initAjaxBrowse = () => {
  // Check the follow:
  // - Ajax browse object exists
  // - Object has the endpoint url
  // - Object has items as array
  if (
    window.__AJAX_BROWSE__ &&
    window.__AJAX_BROWSE__.endpointURL &&
    window.__AJAX_BROWSE__.items &&
    Array.isArray(window.__AJAX_BROWSE__.items)
  ) {
    // Setup endpoint url in the initial state
    store.dispatch(ACTIONS.setupEndpointURL(window.__AJAX_BROWSE__.endpointURL));

    // Setup items in the initial state
    store.dispatch(ACTIONS.addBlock(window.__AJAX_BROWSE__.items));
  }

  // Find current ajax browse DOM node
  const ajaxBrowseElement = document.getElementById('ajax-browse');

  // Abort if it does not exist
  if (!ajaxBrowseElement) return;

  // Create new DOM node to replace the current one
  const reactAjaxBrowserElement = document.createElement('div');
  // Set the id attribute of the new node
  reactAjaxBrowserElement.setAttribute('id', 'ajax-browse');
  // Replace current DOM node with the newly created one
  ajaxBrowseElement.parentNode.replaceChild(reactAjaxBrowserElement, ajaxBrowseElement);

  // Render the main react component
  // into the new DOM node
  render(
    <Provider store={store}>
      <AjaxBrowse />
    </Provider>,
    reactAjaxBrowserElement
  );
};
