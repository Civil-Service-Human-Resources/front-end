// Different types pf learning resource pages
export function resourceGet(req, res) {
  let viewData, resourceType, returnPath, availableTypes, hideDetailStars;

  resourceType = req.param('resourceType');

  availableTypes = ['blog', 'video', 'classroom', 'online'];

  if (availableTypes.includes(resourceType)) {
    returnPath = 'prototypes/learner/v1/resource/' + resourceType;
  } else {
    returnPath = 'prototypes/learner/v1/resource/index';
  }

  hideDetailStars = req.session.hideDetailStars;

  viewData = {
    resourceType,
    hideDetailStars,
  };

  return res.render(returnPath, viewData);
}
