'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.homeGet = homeGet;
exports.plannedGet = plannedGet;
exports.profileGet = profileGet;
exports.recordGet = recordGet;
exports.suggestedGet = suggestedGet;
exports.suggestedFullGet = suggestedFullGet;
exports.suggestedAllGet = suggestedAllGet;
exports.suggestedAllHMRCGet = suggestedAllHMRCGet;
exports.suggestedAllHMRCColsGet = suggestedAllHMRCColsGet;
exports.searchGet = searchGet;
exports.searchPost = searchPost;
exports.feedbackGet = feedbackGet;
exports.feedbackPost = feedbackPost;
exports.privacyGet = privacyGet;
exports.feedbackFormalGet = feedbackFormalGet;
exports.feedbackInformalGet = feedbackInformalGet;

var _validationFunctions = require('./validation-functions');

let generalData = require('./data'); // home GET
function homeGet(req, res) {
  let viewData, hideHomeStars, action, courseId, removeCheckMessage, removeMessage, fireTrainingComplete, removedFromLearningPlanWarning, addedToLearningPlan, removedFromLearningPlan, hasBeenRemoved, willBeRemoved, hasBeenAdded, hasLeftFeedback, showNewNav, navItem, showRemoveX;

  // anotherTestVar = global.anotherTestVar;
  // console.log('anotherTestVar = ' + anotherTestVar);

  let isAdmin = req.session.isAdmin;
  // console.log('isAdmin = ' + isAdmin);

  // req.session.removeMessage = false;
  hideHomeStars = req.session.hideHomeStars;
  action = req.param('action');
  courseId = req.param('id');
  fireTrainingComplete = req.session.fireTrainingComplete;

  removedFromLearningPlanWarning = req.session.removedFromLearningPlanWarning;
  addedToLearningPlan = req.session.addedToLearningPlan;
  removedFromLearningPlan = req.session.removedFromLearningPlan;

  // console.log('removedFromLearningPlanWarning = ' + removedFromLearningPlanWarning);

  if (addedToLearningPlan) {
    hasBeenAdded = true;
    req.session.addedToLearningPlan = null;
  }

  if (removedFromLearningPlanWarning) {
    willBeRemoved = true;
    req.session.removedFromLearningPlanWarning = null;
  }

  if (removedFromLearningPlan) {
    hasBeenRemoved = true;
    req.session.removedFromLearningPlan = null;
  }

  if (parseInt(courseId) >= 1 && action === 'checkRemove') {
    removeCheckMessage = true;
  }

  if (parseInt(courseId) >= 1 && action === 'remove') {
    // removeCheckMessage = false;
    removeMessage = true;
  }

  hasLeftFeedback = req.session.hasLeftFeedback;
  if (hasLeftFeedback) {
    req.session.hasLeftFeedback = null;
  }

  req.session.showNewNav = true;
  showNewNav = true;
  navItem = 'home';

  // showRemoveX = req.session.showRemoveX;
  req.session.showRemoveX = true;
  showRemoveX = true;

  viewData = {
    hideHomeStars,
    removeMessage,
    removeCheckMessage,
    fireTrainingComplete,
    hasBeenAdded,
    willBeRemoved,
    hasBeenRemoved,
    hasLeftFeedback,
    isAdmin,
    showNewNav,
    navItem,
    showRemoveX
  };

  return res.render('prototypes/learner/v12/home/index', viewData);
}

// planned GET
function plannedGet(req, res) {
  let viewData, addedToLearningPlan, removedFromLearningPlan, removedFromLearningPlanWarning, hasBeenAdded, hasBeenRemoved, showNewNav, willBeRemoved;

  // action = req.param('action');
  // type = req.param('type');

  showNewNav = req.session.showNewNav;

  removedFromLearningPlanWarning = req.session.removedFromLearningPlanWarning;
  addedToLearningPlan = req.session.addedToLearningPlan;
  removedFromLearningPlan = req.session.removedFromLearningPlan;

  if (addedToLearningPlan) {
    hasBeenAdded = true;
    req.session.addedToLearningPlan = null;
  }

  if (removedFromLearningPlanWarning) {
    willBeRemoved = true;
    req.session.removedFromLearningPlanWarning = null;
  }

  if (removedFromLearningPlan) {
    hasBeenRemoved = true;
    req.session.removedFromLearningPlan = null;
  }

  // console.log('addedToLearningPlan = ' + addedToLearningPlan);

  viewData = {
    hasBeenAdded,
    willBeRemoved,
    hasBeenRemoved,
    showNewNav
  };

  return res.render('prototypes/learner/v12/learning-plan/index', viewData);
}

// profile GET
function profileGet(req, res) {
  let viewData, workAreaHasBeenUpdated, setWorkAreaCommercial, setWorkAreaDigital, showRolesJoined, showUpdatedPrimaryWorkArea, hasAddedContractManagement, showUpdatedOtherWorkArea, hasBeenUpdatedOther, hasBeenUpdatedInterests, showNewNav, navItem, departmentName, profileGrades, profileOthersArray, primaryChoice, primaryOpsDelChoiceArray, combinedName, email, anythingUpdated, profileInterestsArray;

  //showNewNav = req.session.showNewNav;
  req.session.showNewNav = true;
  // showNewNav = req.session.showNewNav;
  showNewNav = true;
  navItem = 'profile';

  workAreaHasBeenUpdated = req.session.workAreaHasBeenUpdated;
  showUpdatedPrimaryWorkArea = req.session.showUpdatedPrimaryWorkArea;
  req.session.workAreaHasBeenUpdated = null;

  hasAddedContractManagement = req.session.hasAddedContractManagement;

  showUpdatedOtherWorkArea = req.session.showUpdatedOtherWorkArea;
  req.session.showUpdatedOtherWorkArea = null;

  setWorkAreaCommercial = req.session.setWorkAreaCommercial;
  setWorkAreaDigital = req.session.setWorkAreaDigital;
  req.session.setWorkAreaCommercial = null;
  req.session.setWorkAreadigital = null;

  hasBeenUpdatedOther = req.session.hasBeenUpdatedOther;
  req.session.hasBeenUpdatedOther = null;

  hasBeenUpdatedInterests = req.session.hasBeenUpdatedInterests;
  req.session.hasBeenUpdatedInterests = null;

  // display all roles columns joined
  showRolesJoined = req.session.showRolesJoined;

  console.log('showUpdatedPrimaryWorkArea = ' + showUpdatedPrimaryWorkArea);

  departmentName = req.session.departmentName;
  profileInterestsArray = req.session.profileInterestsArray;
  profileGrades = req.session.profileGrades;
  profileOthersArray = req.session.profileOthers;
  primaryChoice = req.session.primaryChoice;
  primaryOpsDelChoiceArray = req.session.primaryOpsDelChoiceArray;
  combinedName = req.session.combinedName;
  email = req.session.email;
  anythingUpdated = req.session.anythingUpdated;
  req.session.anythingUpdated = null;

  viewData = {
    workAreaHasBeenUpdated,
    setWorkAreaCommercial,
    setWorkAreaDigital,
    showRolesJoined,
    showUpdatedPrimaryWorkArea,
    hasAddedContractManagement,
    hasBeenUpdatedOther,
    hasBeenUpdatedInterests,
    showUpdatedOtherWorkArea,
    showNewNav,
    navItem,
    departmentName,
    profileInterestsArray,
    profileGrades,
    profileOthersArray,
    primaryChoice,
    primaryOpsDelChoiceArray,
    combinedName,
    email,
    anythingUpdated
  };

  return res.render('prototypes/learner/v12/profile/index', viewData);
}

// learning record GET
function recordGet(req, res) {
  let viewData, fireTrainingComplete, fireTrainingCompleteBanner, trainingEndDate, hasLeftFeedback, showNewNav, navItem;

  fireTrainingCompleteBanner = req.session.fireTrainingCompleteBanner;
  fireTrainingComplete = req.session.fireTrainingComplete;

  trainingEndDate = req.session.trainingEndDate;

  hasLeftFeedback = req.session.hasLeftFeedback;
  if (hasLeftFeedback) {
    req.session.hasLeftFeedback = null;
  }

  req.session.showNewNav = true;
  showNewNav = true;
  navItem = 'record';

  viewData = {
    fireTrainingCompleteBanner,
    fireTrainingComplete,
    trainingEndDate,
    hasLeftFeedback,
    showNewNav,
    navItem
  };

  req.session.fireTrainingCompleteBanner = null;

  return res.render('prototypes/learner/v12/learning-record/index', viewData);
}

// suggested learning GET
function suggestedGet(req, res) {
  let viewData, hideHomeStars, showUpdatedPrimaryWorkArea, hasAddedContractManagement, templateVersion, type, showNewNav, navItem, showRemoveX, primaryChoice, primaryOpsDelChoiceArray, isG6, isHEO, department;

  showUpdatedPrimaryWorkArea = req.session.showUpdatedPrimaryWorkArea;
  hasAddedContractManagement = req.session.hasAddedContractManagement;

  type = req.param('type');
  console.log('type = ' + type);

  if (type == 'accordion') {
    templateVersion = 'prototypes/learner/v12/suggested-learning/index-boxed';
  } else if (type == 'squares') {
    templateVersion = 'prototypes/learner/v12/suggested-learning/index-squares';
  } else {
    templateVersion = 'prototypes/learner/v12/suggested-learning/index';
  }

  hideHomeStars = true;
  req.session.showNewNav = true;
  // showNewNav = req.session.showNewNav;
  showNewNav = true;
  navItem = 'suggested';

  // showRemoveX = req.session.showRemoveX;
  req.session.showRemoveX = true;
  showRemoveX = true;

  /* new stuff relating to profile */
  department = req.session.departmentName;
  primaryChoice = req.session.primaryChoice;
  primaryOpsDelChoiceArray = req.session.primaryOpsDelChoiceArray;
  isHEO = req.session.isHEO;
  isG6 = req.session.isG6;

  viewData = {
    hideHomeStars,
    showUpdatedPrimaryWorkArea,
    hasAddedContractManagement,
    showNewNav,
    navItem,
    showRemoveX,
    department,
    primaryChoice,
    primaryOpsDelChoiceArray,
    isG6,
    isHEO
  };

  return res.render(templateVersion, viewData);
}

// suggested learning full list GET
function suggestedFullGet(req, res) {
  let viewData;
  viewData = {};
  return res.render('prototypes/learner/v12/suggested-learning/full', viewData);
}

// suggested learning all list GET
function suggestedAllGet(req, res) {
  let viewData;
  viewData = {};
  return res.render('prototypes/learner/v12/suggested-learning/all', viewData);
}

// suggested learning all list GET
function suggestedAllHMRCGet(req, res) {
  let viewData;
  viewData = {};
  return res.render('prototypes/learner/v12/suggested-learning/hmrc', viewData);
}

// suggested learning all list GET
function suggestedAllHMRCColsGet(req, res) {
  let viewData;
  viewData = {};
  return res.render('prototypes/learner/v12/suggested-learning/hmrc-cols', viewData);
}

// search
function searchGet(req, res) {
  let viewData, searchTerm, showPreFilteredResults, showNewNav, navItem, newCoreInterests;

  searchTerm = req.session.searchTerm;
  showPreFilteredResults = req.session.showPreFilteredResults;

  newCoreInterests = generalData.newCoreInterests;

  showNewNav = req.session.showNewNav;
  navItem = '';

  viewData = {
    searchTerm,
    showPreFilteredResults,
    showNewNav,
    navItem,
    newCoreInterests
  };

  return res.render('prototypes/learner/v12/search/index', viewData);
}

// Personal details: POST
function searchPost(req, res) {
  const { searchInput } = req.body;

  let searchTerm;
  searchTerm = searchInput;
  req.session.searchTerm = searchTerm;

  return res.redirect('/prototypes/learner/v12/search');
}

// FEEDBACK
function feedbackGet(req, res) {
  let viewData, showNewNav, navItem;

  showNewNav = req.session.showNewNav;
  navItem = '';

  viewData = {
    showNewNav,
    navItem
  };

  return res.render('prototypes/learner/v12/feedback/index', viewData);
}

function feedbackPost(req, res) {
  const { ratingPresentation, ratingContent, ratingRelevance, ratingInteractivity, feedbackComments } = req.body;
  let redirectPath;

  /*console.log('ratingPresentation = ' + ratingPresentation);
    console.log('ratingContent = ' + ratingContent);
    console.log('ratingRelevance = ' + ratingRelevance);
    console.log('ratingInteractivity = ' + ratingInteractivity);
    console.log('feedbackComments = ' + feedbackComments);*/

  req.session.hasLeftFeedback = true;
  redirectPath = '/prototypes/learner/v12/learning-record';
  return res.redirect(redirectPath);
}

// suggested learning GET
function privacyGet(req, res) {
  let viewData;
  viewData = {};
  return res.render('prototypes/learner/v12/privacy/index', viewData);
}

function feedbackFormalGet(req, res) {
  let viewData, showNewNav, navItem;

  showNewNav = req.session.showNewNav;
  navItem = '';

  viewData = {
    showNewNav,
    navItem
  };

  return res.render('prototypes/learner/v12/feedback/formal', viewData);
}

function feedbackInformalGet(req, res) {
  let viewData, showNewNav, navItem;

  showNewNav = req.session.showNewNav;
  navItem = '';

  viewData = {
    showNewNav,
    navItem
  };

  return res.render('prototypes/learner/v12/feedback/informal', viewData);
}