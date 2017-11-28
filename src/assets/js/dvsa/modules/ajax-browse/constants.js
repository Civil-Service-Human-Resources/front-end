export const AJAX_BROWSE_CONSTANTS = {
  classNames: {
    ajaxBrowse: {
      base: 'ajax-browse',
      loading: 'ajax-browse--loading',
      sizes: {
        1: 'ajax-browse--one-block',
        2: 'ajax-browse--two-blocks',
        3: 'ajax-browse--three-blocks',
        4: 'ajax-browse--four-blocks',
      },
    },
    block: {
      base: 'ajax-browse__block',
      active: 'ajax-browse__block--active',
      inactive: 'ajax-browse__block--inactive',
      hidden: 'ajax-browse__block--hidden',
      inner: 'ajax-browse__block-inner',
    },
    list: 'ajax-browse__list',
    item: {
      base: 'ajax-browse__item',
      loading: 'ajax-browse__item--loading',
      disabled: 'ajax-browse__item--disabled',
    },
    link: 'ajax-browse__link',
  },
  attributeNames: {
    block: {
      hash: 'data-block-hash',
    },
    item: {
      hash: 'data-item-hash',
    },
  },
};
