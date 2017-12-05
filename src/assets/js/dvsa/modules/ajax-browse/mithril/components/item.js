import m from 'mithril';
import * as ACTIONS from './../../redux/actions';
import classnames from 'classnames';
import axios from 'axios';

export class Item {
  constructor(vnode) {
    this.attrs = vnode.attrs;
  }

  oninit() {
    this.itemState = {
      loading: false,
    };
  }

  itemClick = event => {
    if (this.itemState.loading) return;
    const { store, blockIndex } = this.attrs;
    const { itemId, endOfTree } = this.attrs.item;
    const currentState = store.getState();
    const { endpointURL } = currentState.settings;
    if (endOfTree || !endpointURL) return;
    event.preventDefault();
    store.dispatch(ACTIONS.enableLoading());
    this.itemState.loading = true;
    axios
      .post(endpointURL, {
        params: {
          itemId,
        },
      })
      .then(response => {
        const { items } = response.data;
        const newBlockIndex = blockIndex + 1;
        // Check if there is already another block after current block
        if (currentState.blocks && currentState.blocks[newBlockIndex]) {
          // Remove next block
          store.dispatch(ACTIONS.removeBlock(blockIndex));
        }
        // Add a new block
        store.dispatch(ACTIONS.addBlock(items));
        store.dispatch(ACTIONS.disableLoading());
        this.itemState.loading = false;
        m.redraw();
      });
  };

  view() {
    const { href, heading, description, active } = this.attrs.item;
    const { loading } = this.itemState;
    let classes = classnames({
      'ajax-browse__item': true,
      'ajax-browse__item--loading': loading,
      'ajax-browse__item--active': active,
    });
    return (
      <li className={classes}>
        <a href={href} className="ajax-browse__link" onclick={this.itemClick}>
          <span className="ajax-browse__link-heading">{heading}</span>
          <span className="ajax-browse__link-description">{description}</span>
        </a>
      </li>
    );
  }
}
