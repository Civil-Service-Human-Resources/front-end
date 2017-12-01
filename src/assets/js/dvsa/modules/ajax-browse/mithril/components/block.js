import m from 'mithril';
import { Item } from './item';

export class Block {
  constructor(vnode) {
    this.attrs = vnode.attrs;
    if (vnode.dom) {
      vnode.dom.focus();
    }
  }

  getItems() {
    const { items, store, blockIndex } = this.attrs;
    if (!items || !store) return;
    return items.map((item, index) => {
      return <Item key={index} item={item} store={store} blockIndex={blockIndex} />;
    });
  }

  view() {
    const { key } = this.attrs;
    return (
      <div class="ajax-browse__block">
        <div class="ajax-browse__block-inner">
          <ul class="ajax-browse__list">{this.getItems()}</ul>
        </div>
      </div>
    );
  }
}
