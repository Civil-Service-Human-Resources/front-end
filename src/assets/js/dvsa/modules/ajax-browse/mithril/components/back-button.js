import m from 'mithril';
import classnames from 'classnames';
import * as ACTIONS from './../../redux/actions';

export class BackButton {
  constructor(vnode) {
    this.attrs = vnode.attrs;
  }

  onBackClick = event => {
    const { store } = this.attrs;
    store.dispatch(ACTIONS.enableLoading());
    console.log('test');
  };

  view() {
    const classes = classnames({
      'ajax-browse__back-wrapper': true,
    });
    return (
      <div className={classes}>
        <a className="ajax-browse__back-button button" onclick={this.onBackClick}>
          <span className="ajax-browse__back-text">Back</span>
        </a>
      </div>
    );
  }
}
