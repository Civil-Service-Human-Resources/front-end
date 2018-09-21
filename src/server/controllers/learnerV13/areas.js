let generalData = require('./data');

// Primary areas of work radios areasGET
export function areasGet(req, res) {
  let viewData, professionSelectOptions, profession, showNewNav, navItem;

  // profession = 'Digital, Data and Technology';
  // profession = '4';
  professionSelectOptions = generalData.allProfessions;

  req.session.setWorkAreaCommercial = null;
  req.session.setWorkAreadigital = null;

  showNewNav = req.session.showNewNav;
  navItem = 'profile';

  viewData = {
    professionSelectOptions,
    profession,
    showNewNav,
    navItem,
  };

  return res.render('prototypes/learner/v13/area-of-work/index', viewData);
}

export function areasPost(req, res) {
  const { profession } = req.body;

  let primaryWorkArea;

  primaryWorkArea = profession;

  req.session.setWorkAreaCommercial = null;
  req.session.setWorkAreadigital = null;

  if (primaryWorkArea == '1') {
    req.session.setWorkAreaCommercial = true;
    req.session.setWorkAreadigital = null;
  } else {
    req.session.setWorkAreaCommercial = null;
    req.session.setWorkAreaDigital = true;
  }

  console.log('primaryWorkArea = ' + primaryWorkArea);

  // this is removed temporarily until we resolve the issues around the work area selecta-tron
  // return res.redirect('/prototypes/learner/v13/your-profile/area-of-work/levels?level1=true');

  return res.redirect('/prototypes/learner/v13/your-profile');
}

// Levels
export function areasLevelsGet(req, res) {
  let viewData, level2, level3, showLevel2, showLevel3, setWorkAreaCommercial, setWorkAreaDigital, showNewNav, navItem;

  level2 = req.param('level2');
  level3 = req.param('level3');

  setWorkAreaCommercial = req.session.setWorkAreaCommercial;
  setWorkAreaDigital = req.session.setWorkAreaDigital;

  if (level2 == 'true') {
    showLevel2 = true;
  }

  if (level3 == 'true') {
    showLevel3 = true;
  }

  showNewNav = req.session.showNewNav;
  navItem = 'profile';

  viewData = {
    showLevel2,
    showLevel3,
    setWorkAreaCommercial,
    setWorkAreaDigital,
    showNewNav,
    navItem,
  };

  return res.render('prototypes/learner/v13/area-of-work/levels', viewData);
}

export function areasLevelsPost(req, res) {
  const { regConfig } = req.body;

  let test;

  return res.redirect('prototypes/learner/v13/area-of-work/levels');
}

// Joined levels
export function areasJoinedLevelsGet(req, res) {
  let viewData, level1, level2, level3, showLevel1, showLevel2, showLevel3, showNewNav, navItem;

  level1 = req.param('level1');
  level2 = req.param('level2');
  level3 = req.param('level3');

  if (level1 == 'true') {
    showLevel1 = true;
  }

  if (level2 == 'true') {
    showLevel2 = true;
  }

  if (level3 == 'true') {
    showLevel3 = true;
  }

  showNewNav = req.session.showNewNav;
  navItem = 'profile';

  viewData = {
    showLevel1,
    showLevel2,
    showLevel3,
    showNewNav,
    navItem,
  };

  return res.render('prototypes/learner/v13/area-of-work/joined-levels', viewData);
}

// Joined levels
export function areasJoinedLevelsPMGet(req, res) {
  let viewData, level1, level2, level3, showLevel1, showLevel2, showLevel3, showNewNav, navItem;

  level1 = req.param('level1');
  level2 = req.param('level2');
  level3 = req.param('level3');

  if (level1 == 'true') {
    showLevel1 = true;
  }

  if (level2 == 'true') {
    showLevel2 = true;
  }

  if (level3 == 'true') {
    showLevel3 = true;
  }

  showNewNav = req.session.showNewNav;
  navItem = 'profile';

  viewData = {
    showLevel1,
    showLevel2,
    showLevel3,
    showNewNav,
    navItem,
  };

  return res.render('prototypes/learner/v13/area-of-work/joined-levels-pm', viewData);
}
export function areasJoinedLevelsPMPost(req, res) {
  const { regConfig } = req.body;

  let test;

  return res.redirect('prototypes/learner/v13/area-of-work/joined-levels-pm');
}

export function areasJoinedLevelsPost(req, res) {
  const { regConfig } = req.body;

  let test;

  return res.redirect('prototypes/learner/v13/area-of-work/levels');
}

// Other areas
export function otherAreasGet(req, res) {
  let viewData, professionSelectOptions, showNewNav, navItem;

  professionSelectOptions = generalData.allProfessions;

  showNewNav = req.session.showNewNav;
  navItem = 'profile';

  viewData = {
    professionSelectOptions,
    showNewNav,
    navItem,
  };

  return res.render('prototypes/learner/v13/area-of-work/others', viewData);
}

export function otherAreasPost(req, res) {
  const { regConfig } = req.body;

  let test;

  return res.redirect('/prototypes/learner/v13/your-profile');
}

// Other areas
export function interestsGet(req, res) {
  let viewData, extraInterests, showNewNav, navItem;

  showNewNav = req.session.showNewNav;
  navItem = 'profile';

  extraInterests = generalData.extraInterests;

  viewData = {
    extraInterests,
    navItem,
  };

  return res.render('prototypes/learner/v13/area-of-work/interests', viewData);
}

export function interestsPost(req, res) {
  const {} = req.body;

  req.session.hasUpdatedInterests = true;
  req.session.hasBeenUpdatedOther = true;
  req.session.hasBeenUpdatedInterests = true;
  req.session.hasAddedContractManagement = true;

  return res.redirect('/prototypes/learner/v13/your-profile');
}
