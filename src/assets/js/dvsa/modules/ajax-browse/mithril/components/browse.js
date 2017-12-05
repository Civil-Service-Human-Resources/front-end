import m from 'mithril';
import { Block } from './block';
import { BackButton } from './back-button';
import * as ACTIONS from './../../redux/actions';
import classnames from 'classnames';

export class Browse {
  oncreate() {
    this.store.dispatch(ACTIONS.disableLoading());
  }

  getBlocks() {
    const { blocks } = this.store.getState();
    if (!blocks) return;
    return blocks.map((block, index) => {
      return <Block key={index} items={block.items} blockIndex={index} />;
    });
  }

  getBackButton() {
    const { blocks } = this.store.getState();
    return blocks.length > 2 ? <BackButton /> : false;
  }

  view() {
    return 'test';
    const { settings, blocks } = this.store.getState();
    const classes = classnames({
      'ajax-browse': true,
      'ajax-browse--back-button': true,
      'ajax-browse--loading': settings.loading,
      ['ajax-browse--' + blocks.length + '-blocks']: true,
    });
    return (
      <div className={classes}>
        {/* {this.getBackButton()} */}
        {/* <div className="ajax-browse__inner">{this.getBlocks()}</div> */}
      </div>
    );
  }
}
