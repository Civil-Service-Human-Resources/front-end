// home GET
import { validateWord } from './validation-functions';

export function homeGet(req, res) {
  let viewData,
    hideHomeStars,
    action,
    courseId,
    removeCheckMessage,
    removeMessage,
    fireTrainingComplete,
    removedFromLearningPlanWarning,
    addedToLearningPlan,
    removedFromLearningPlan,
    hasBeenRemoved,
    willBeRemoved,
    hasBeenAdded,
    hasLeftFeedback;

  // anotherTestVar = global.anotherTestVar;
  // console.log('anotherTestVar = ' + anotherTestVar);

  // req.session.removeMessage = false;
  hideHomeStars = req.session.hideHomeStars;
  action = req.param('action');
  courseId = req.param('id');
  fireTrainingComplete = req.session.fireTrainingComplete;

  removedFromLearningPlanWarning = req.session.removedFromLearningPlanWarning;
  addedToLearningPlan = req.session.addedToLearningPlan;
  removedFromLearningPlan = req.session.removedFromLearningPlan;

  console.log('removedFromLearningPlanWarning = ' + removedFromLearningPlanWarning);

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

  // console.log('removeMessage = ' + removeMessage + ' and id = ' + courseId);

  viewData = {
    hideHomeStars,
    removeMessage,
    removeCheckMessage,
    fireTrainingComplete,
    hasBeenAdded,
    willBeRemoved,
    hasBeenRemoved,
    hasLeftFeedback,
  };

  return res.render('prototypes/learner/v4/home/index', viewData);
}

// planned GET
export function plannedGet(req, res) {
  let viewData, addedToLearningPlan, removedFromLearningPlan, removedFromLearningPlanWarning, hasBeenAdded, hasBeenRemoved, willBeRemoved;

  // action = req.param('action');
  // type = req.param('type');

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
  };

  return res.render('prototypes/learner/v4/learning-plan/index', viewData);
}

// profile GET
export function profileGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/learner/v4/profile/index', viewData);
}

// learning record GET
export function recordGet(req, res) {
  let viewData, fireTrainingComplete, fireTrainingCompleteBanner, trainingEndDate, hasLeftFeedback;

  fireTrainingCompleteBanner = req.session.fireTrainingCompleteBanner;
  fireTrainingComplete = req.session.fireTrainingComplete;

  trainingEndDate = req.session.trainingEndDate;

  hasLeftFeedback = req.session.hasLeftFeedback;
  if (hasLeftFeedback) {
    req.session.hasLeftFeedback = null;
  }

  viewData = {
    fireTrainingCompleteBanner,
    fireTrainingComplete,
    trainingEndDate,
    hasLeftFeedback,
  };

  req.session.fireTrainingCompleteBanner = null;

  return res.render('prototypes/learner/v4/learning-record/index', viewData);
}

// suggested learning GET
export function suggestedGet(req, res) {
  let viewData, hideHomeStars;

  // hideHomeStars = req.session.hideHomeStars;

  hideHomeStars = true;

  viewData = {
    hideHomeStars,
  };

  return res.render('prototypes/learner/v4/suggested-learning/index', viewData);
}

// search
export function searchGet(req, res) {
  let viewData, searchTerm;

  searchTerm = req.session.searchTerm;

  viewData = {
    searchTerm,
  };

  return res.render('prototypes/learner/v4/search/index', viewData);
}

// Personal details: POST
export function searchPost(req, res) {
  const { searchInput } = req.body;

  let searchTerm;
  searchTerm = searchInput;
  req.session.searchTerm = searchTerm;

  return res.redirect('/prototypes/learner/v4/search');
}

// FEEDBACK
export function feedbackGet(req, res) {
  let viewData;

  viewData = {};

  return res.render('prototypes/learner/v4/feedback/index', viewData);
}

export function feedbackPost(req, res) {
  const { ratingPresentation, ratingContent, ratingRelevance, ratingInteractivity, feedbackComments } = req.body;
  let redirectPath;

  /*console.log('ratingPresentation = ' + ratingPresentation);
  console.log('ratingContent = ' + ratingContent);
  console.log('ratingRelevance = ' + ratingRelevance);
  console.log('ratingInteractivity = ' + ratingInteractivity);
  console.log('feedbackComments = ' + feedbackComments);*/

  req.session.hasLeftFeedback = true;
  redirectPath = '/prototypes/learner/v4/learning-record';
  return res.redirect(redirectPath);
}
