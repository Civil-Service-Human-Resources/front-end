let generalData = require('./data');

// Selecta test pages
export function selectaTestRadiosGet(req, res) {
  let viewData, showNewNav, navItem, profilePrimary;

  showNewNav = req.session.showNewNav;
  navItem = '';

  profilePrimary = generalData.allNewAreasOfWork;

  viewData = {
    profilePrimary,
    showNewNav,
    navItem,
  };

  return res.render('prototypes/learner/v12/selectas/radios', viewData);
}

export function selectaTestSelectGet(req, res) {
  let viewData, showNewNav, navItem, profilePrimary;

  showNewNav = req.session.showNewNav;
  navItem = '';

  profilePrimary = generalData.allNewAreasOfWork;

  viewData = {
    profilePrimary,
    showNewNav,
    navItem,
  };

  return res.render('prototypes/learner/v12/selectas/select', viewData);
}

export function selectaTestTypeaheadGet(req, res) {
  let viewData, showNewNav, navItem, profilePrimary;

  showNewNav = req.session.showNewNav;
  navItem = '';

  profilePrimary = generalData.allNewAreasOfWork;

  viewData = {
    profilePrimary,
    showNewNav,
    navItem,
  };

  return res.render('prototypes/learner/v12/selectas/typeahead', viewData);
}
