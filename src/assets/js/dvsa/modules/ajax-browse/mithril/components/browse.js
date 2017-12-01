import m from 'mithril';
import { Block } from './block';
import * as ACTIONS from './../../redux/actions';
import classnames from 'classnames';

export class Browse {
  constructor(vnode) {
    this.attrs = vnode.attrs;
  }

  oncreate() {
    this.attrs.store.dispatch(ACTIONS.disableLoading());
  }

  getBlocks() {
    const { store } = this.attrs;
    const { blocks } = this.attrs.store.getState();
    if (!blocks) return;
    return blocks.map((block, index) => {
      return <Block key={index} items={block.items} store={store} blockIndex={index} />;
    });
  }

  view() {
    const { settings, blocks } = this.attrs.store.getState();
    const classes = classnames({
      'ajax-browse': true,
      'ajax-browse--back-button': true,
      'ajax-browse--loading': settings.loading,
      ['ajax-browse--' + blocks.length + '-blocks']: true,
    });
    return (
      <div className={classes}>
        <div class="ajax-browse__back-wrapper">
          <a class="ajax-browse__back-button button">Back</a>
        </div>
        <div class="ajax-browse__inner">{this.getBlocks()}</div>
      </div>
    );
  }
}
