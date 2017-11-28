import { AJAX_BROWSE_CONSTANTS } from './constants';
import { AjaxBrowse } from './ajax-browse';

export const initAjaxBrowse = () => {
  let ajaxBrowseWrappers = document.querySelectorAll('.' + AJAX_BROWSE_CONSTANTS.classNames.ajaxBrowse.base);
  if (!ajaxBrowseWrappers) return;
  ajaxBrowseWrappers.forEach(element => {
    new AjaxBrowse(element);
  });
};
