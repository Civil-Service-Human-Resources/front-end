import { isNumeric } from './validation-functions';
// Different types pf learning resource pages
export function resourceGet(req, res) {
  let viewData, resourceType, returnPath, availableTypes, hideDetailStars, resourceID, hideHomeStars, showNewNav, navItem;

  hideDetailStars = true;
  hideHomeStars = true;

  req.session.hideDetailStars = hideDetailStars;
  req.session.hideHomeStars = hideHomeStars;

  resourceType = req.param('resourceType');
  resourceID = req.param('resourceID');

  availableTypes = ['blog', 'video', 'classroom', 'online'];

  if (isNumeric(parseInt(resourceID))) {
    returnPath = 'prototypes/learner/v12/resource/' + resourceID;
  } else if (availableTypes.includes(resourceType)) {
    returnPath = 'prototypes/learner/v12/resource/' + resourceType;
  } else {
    returnPath = 'prototypes/learner/v12/resource/index';
  }

  req.session.showNewNav = true;
  // showNewNav = req.session.showNewNav;
  showNewNav = true;

  // showNewNav = req.session.showNewNav;
  navItem = '';

  viewData = {
    resourceID,
    resourceType,
    hideDetailStars,
    showNewNav,
    navItem,
  };

  return res.render(returnPath, viewData);
}

// Start: POST
export function resourcePost(req, res) {
  const { resourceID } = req.body;

  console.log('resourceID = ' + resourceID);

  if (resourceID === '15') {
    return res.redirect('/prototypes/learner/v12/scorms/basic-fire-safety');
  } else {
    return res.redirect('/prototypes/learner/v12/');
  }
}
