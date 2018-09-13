'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allRoutes = undefined;

var _express = require('express');

var _main = require('./../controllers/main.controller');

var mainController = _interopRequireWildcard(_main);

var _misc = require('./../controllers/misc.controller');

var miscController = _interopRequireWildcard(_misc);

var _recalls = require('./../controllers/api/v1/recalls.controller');

var recallsController = _interopRequireWildcard(_recalls);

var _createAccount = require('./../controllers/create-account');

var createAccountController = _interopRequireWildcard(_createAccount);

var _learnerV = require('./../controllers/learnerV1');

var learnerV1Controller = _interopRequireWildcard(_learnerV);

var _learnerV2 = require('./../controllers/learnerV2');

var learnerV2Controller = _interopRequireWildcard(_learnerV2);

var _learnerV3 = require('./../controllers/learnerV3');

var learnerV3Controller = _interopRequireWildcard(_learnerV3);

var _learnerV4 = require('./../controllers/learnerV4');

var learnerV4Controller = _interopRequireWildcard(_learnerV4);

var _learnerV5 = require('./../controllers/learnerV5');

var learnerV5Controller = _interopRequireWildcard(_learnerV5);

var _learnerV6 = require('./../controllers/learnerV6');

var learnerV6Controller = _interopRequireWildcard(_learnerV6);

var _learnerV7 = require('../controllers/learnerV7');

var learnerV7Controller = _interopRequireWildcard(_learnerV7);

var _learnerV8 = require('../controllers/learnerV8');

var learnerV8Controller = _interopRequireWildcard(_learnerV8);

var _learnerV9 = require('../controllers/learnerV9');

var learnerV9Controller = _interopRequireWildcard(_learnerV9);

var _learnerV10 = require('../controllers/learnerV10');

var learnerV10Controller = _interopRequireWildcard(_learnerV10);

var _learnerV11 = require('../controllers/learnerV11');

var learnerV11Controller = _interopRequireWildcard(_learnerV11);

var _learnerV12 = require('../controllers/learnerV12');

var learnerV12Controller = _interopRequireWildcard(_learnerV12);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// import

const router = (0, _express.Router)();

// Misc routes
router.get('/robots.txt', mainController.robots);
router.get('/', mainController.index);

// API Routes
router.post('/api/v1/recalls', recallsController.recalls);

// Create account user journey
router.get('/prototypes/create-account', createAccountController.getRoot);
router.get('/prototypes/create-account/email', createAccountController.getEmail);
router.get('/prototypes/create-account/details', createAccountController.getDetails);
router.get('/prototypes/create-account/contact-details', createAccountController.getContactDetails);
router.get('/prototypes/create-account/security-questions', createAccountController.getSecurityQuestions);
router.get('/prototypes/create-account/password', createAccountController.getPassword);
router.get('/prototypes/create-account/review', createAccountController.getReview);
router.post('/prototypes/create-account/email', createAccountController.emailValidationChecks, createAccountController.postEmail);
router.post('/prototypes/create-account/details', createAccountController.detailsValidationChecks, createAccountController.postDetails);
router.post('/prototypes/create-account/contact-details', createAccountController.contactDetailsValidationChecks, createAccountController.postContactDetails);
router.post('/prototypes/create-account/security-questions', createAccountController.securityQuestions, createAccountController.postSecurityQuestions);
router.post('/prototypes/create-account/password', createAccountController.passwordValidationChecks, createAccountController.postPassword);

//******************************************************
//
//      v1 end-to-end learner journey custom routes
//
//******************************************************

// import { routesLearnerV1 } from './routesLearnerV1';
// learner config
router.get('/prototypes/learner/v1/config', learnerV1Controller.configGet);
router.post('/prototypes/learner/v1/config', learnerV1Controller.configPost);

//******************************************************
//      Various smaller sections
//******************************************************
// start
router.get('/prototypes/learner/v1', learnerV1Controller.indexGet);
router.post('/prototypes/learner/v1', learnerV1Controller.indexPost);
// home
router.get('/prototypes/learner/v1/home', learnerV1Controller.homeGet);
// router.post('/prototypes/learner/v1/home', learnerV1Controller.homePost);

// profile
router.get('/prototypes/learner/v1/your-profile', learnerV1Controller.profileGet);
// planned learning
router.get('/prototypes/learner/v1/learning-plan', learnerV1Controller.plannedGet);
// learning record
router.get('/prototypes/learner/v1/learning-record', learnerV1Controller.recordGet);
// suggested learning
router.get('/prototypes/learner/v1/suggested-learning', learnerV1Controller.suggestedGet);

// search
router.get('/prototypes/learner/v1/search', learnerV1Controller.searchGet);
router.post('/prototypes/learner/v1/search', learnerV1Controller.searchPost);

// feedback
router.get('/prototypes/learner/v1/feedback', learnerV1Controller.feedbackGet);

// Actions
router.get('/prototypes/learner/v1/actions', learnerV1Controller.actionsGet);
router.post('/prototypes/learner/v1/actions', learnerV1Controller.actionsPost);

//******************************************************
//      Registration stuff
//******************************************************
// registration, email
router.get('/prototypes/learner/v1/registration', learnerV1Controller.registerEmailGet);
router.post('/prototypes/learner/v1/registration', learnerV1Controller.registerEmailPost);
// registration, name
router.get('/prototypes/learner/v1/registration/personal-details', learnerV1Controller.registerPersonalGet);
router.post('/prototypes/learner/v1/registration/personal-details', learnerV1Controller.registerPersonalPost);

// registration, job, part 1, department
router.get('/prototypes/learner/v1/registration/department', learnerV1Controller.registerDepartmentGet);
router.post('/prototypes/learner/v1/registration/department', learnerV1Controller.registerDepartmentPost);
// registration, job, part 2, profession
router.get('/prototypes/learner/v1/registration/area-of-work', learnerV1Controller.registerAreaGet);
router.post('/prototypes/learner/v1/registration/area-of-work', learnerV1Controller.registerAreaPost);
// registration, job, part 3, grade
router.get('/prototypes/learner/v1/registration/grade', learnerV1Controller.registerGradeGet);
router.post('/prototypes/learner/v1/registration/grade', learnerV1Controller.registerGradePost);

// registration, password
router.get('/prototypes/learner/v1/registration/password', learnerV1Controller.registerPasswordGet);
router.post('/prototypes/learner/v1/registration/password', learnerV1Controller.registerPasswordPost);
// registration, review
router.get('/prototypes/learner/v1/registration/review', learnerV1Controller.registerReviewGet);
router.post('/prototypes/learner/v1/registration/review', learnerV1Controller.registerReviewPost);
// registration, complete
router.get('/prototypes/learner/v1/registration/complete', learnerV1Controller.registerCompleteGet);
// router.post('/prototypes/learner/v1/registration/complete', learnerV1Controller.registerCompletePost);

// registration, complete
router.get('/prototypes/learner/v1/resource', learnerV1Controller.resourceGet);

//******************************************************
//      Booking stuff
//******************************************************
router.get('/prototypes/learner/v1/booking', learnerV1Controller.bookingDateGet);
router.post('/prototypes/learner/v1/booking', learnerV1Controller.bookingDatePost);
router.get('/prototypes/learner/v1/booking/payment', learnerV1Controller.bookingPaymentGet);
router.post('/prototypes/learner/v1/booking/payment', learnerV1Controller.bookingPaymentPost);
router.get('/prototypes/learner/v1/booking/confirm', learnerV1Controller.bookingConfirmGet);
router.get('/prototypes/learner/v1/booking/complete', learnerV1Controller.bookingCompleteGet);

//******************************************************
//
//      v2 end-to-end learner journey custom routes
//
//******************************************************
// learner config
router.get('/prototypes/learner/v2/config', learnerV2Controller.configGet);
router.post('/prototypes/learner/v2/config', learnerV2Controller.configPost);

//******************************************************
//      Various smaller sections
//******************************************************
// start
router.get('/prototypes/learner/v2', learnerV2Controller.indexGet);
router.post('/prototypes/learner/v2', learnerV2Controller.indexPost);
// home
router.get('/prototypes/learner/v2/home', learnerV2Controller.homeGet);
// router.post('/prototypes/learner/v2/home', learnerV2Controller.homePost);

// profile
router.get('/prototypes/learner/v2/your-profile', learnerV2Controller.profileGet);
// planned learning
router.get('/prototypes/learner/v2/learning-plan', learnerV2Controller.plannedGet);
// learning record
router.get('/prototypes/learner/v2/learning-record', learnerV2Controller.recordGet);
// suggested learning
router.get('/prototypes/learner/v2/suggested-learning', learnerV2Controller.suggestedGet);

// search
router.get('/prototypes/learner/v2/search', learnerV2Controller.searchGet);
router.post('/prototypes/learner/v2/search', learnerV2Controller.searchPost);

// feedback
router.get('/prototypes/learner/v2/feedback', learnerV2Controller.feedbackGet);

// Actions
router.get('/prototypes/learner/v2/actions', learnerV2Controller.actionsGet);
router.post('/prototypes/learner/v2/actions', learnerV2Controller.actionsPost);

//******************************************************
//      Registration stuff
//******************************************************
// registration, email
router.get('/prototypes/learner/v2/registration', learnerV2Controller.registerEmailGet);
router.post('/prototypes/learner/v2/registration', learnerV2Controller.registerEmailPost);
// registration, name
router.get('/prototypes/learner/v2/registration/personal-details', learnerV2Controller.registerPersonalGet);
router.post('/prototypes/learner/v2/registration/personal-details', learnerV2Controller.registerPersonalPost);

// registration, job, part 1, department
router.get('/prototypes/learner/v2/registration/department', learnerV2Controller.registerDepartmentGet);
router.post('/prototypes/learner/v2/registration/department', learnerV2Controller.registerDepartmentPost);
// registration, job, part 2, profession
router.get('/prototypes/learner/v2/registration/area-of-work', learnerV2Controller.registerAreaGet);
router.post('/prototypes/learner/v2/registration/area-of-work', learnerV2Controller.registerAreaPost);
// registration, job, part 3, grade
router.get('/prototypes/learner/v2/registration/grade', learnerV2Controller.registerGradeGet);
router.post('/prototypes/learner/v2/registration/grade', learnerV2Controller.registerGradePost);

// registration, password
router.get('/prototypes/learner/v2/registration/password', learnerV2Controller.registerPasswordGet);
router.post('/prototypes/learner/v2/registration/password', learnerV2Controller.registerPasswordPost);
// registration, review
router.get('/prototypes/learner/v2/registration/review', learnerV2Controller.registerReviewGet);
router.post('/prototypes/learner/v2/registration/review', learnerV2Controller.registerReviewPost);
// registration, complete
router.get('/prototypes/learner/v2/registration/complete', learnerV2Controller.registerCompleteGet);
// router.post('/prototypes/learner/v2/registration/complete', learnerV2Controller.registerCompletePost);

// registration, complete
router.get('/prototypes/learner/v2/resource', learnerV2Controller.resourceGet);

//******************************************************
//      Booking stuff
//******************************************************
router.get('/prototypes/learner/v2/booking', learnerV2Controller.bookingDateGet);
router.post('/prototypes/learner/v2/booking', learnerV2Controller.bookingDatePost);
router.get('/prototypes/learner/v2/booking/payment', learnerV2Controller.bookingPaymentGet);
router.post('/prototypes/learner/v2/booking/payment', learnerV2Controller.bookingPaymentPost);
router.get('/prototypes/learner/v2/booking/confirm', learnerV2Controller.bookingConfirmGet);
router.get('/prototypes/learner/v2/booking/complete', learnerV2Controller.bookingCompleteGet);

//******************************************************
//
//      v3 end-to-end learner journey custom routes
//
//******************************************************
// learner config

router.get('/prototypes/learner/v3/config', learnerV3Controller.configGet);
router.post('/prototypes/learner/v3/config', learnerV3Controller.configPost);

//******************************************************
//      Various smaller sections
//******************************************************
// start
router.get('/prototypes/learner/v3', learnerV3Controller.indexGet);
router.post('/prototypes/learner/v3', learnerV3Controller.indexPost);
// home
router.get('/prototypes/learner/v3/home', learnerV3Controller.homeGet);
// router.post('/prototypes/learner/v3/home', learnerV3Controller.homePost);

// profile
router.get('/prototypes/learner/v3/your-profile', learnerV3Controller.profileGet);
// planned learning
router.get('/prototypes/learner/v3/learning-plan', learnerV3Controller.plannedGet);
// learning record
router.get('/prototypes/learner/v3/learning-record', learnerV3Controller.recordGet);
// suggested learning
router.get('/prototypes/learner/v3/suggested-learning', learnerV3Controller.suggestedGet);

// search
router.get('/prototypes/learner/v3/search', learnerV3Controller.searchGet);
router.post('/prototypes/learner/v3/search', learnerV3Controller.searchPost);

// feedback
router.get('/prototypes/learner/v3/feedback', learnerV3Controller.feedbackGet);

// Actions
router.get('/prototypes/learner/v3/actions', learnerV3Controller.actionsGet);
router.post('/prototypes/learner/v3/actions', learnerV3Controller.actionsPost);

//******************************************************
//      Registration stuff
//******************************************************
// registration, email
router.get('/prototypes/learner/v3/registration', learnerV3Controller.registerEmailGet);
router.post('/prototypes/learner/v3/registration', learnerV3Controller.registerEmailPost);
// registration, name
router.get('/prototypes/learner/v3/registration/personal-details', learnerV3Controller.registerPersonalGet);
router.post('/prototypes/learner/v3/registration/personal-details', learnerV3Controller.registerPersonalPost);

// registration, job, part 1, department
router.get('/prototypes/learner/v3/registration/department', learnerV3Controller.registerDepartmentGet);
router.post('/prototypes/learner/v3/registration/department', learnerV3Controller.registerDepartmentPost);
// registration, job, part 2, profession
router.get('/prototypes/learner/v3/registration/area-of-work', learnerV3Controller.registerAreaGet);
router.post('/prototypes/learner/v3/registration/area-of-work', learnerV3Controller.registerAreaPost);
// registration, job, part 3, grade
router.get('/prototypes/learner/v3/registration/grade', learnerV3Controller.registerGradeGet);
router.post('/prototypes/learner/v3/registration/grade', learnerV3Controller.registerGradePost);

// registration, password
router.get('/prototypes/learner/v3/registration/password', learnerV3Controller.registerPasswordGet);
router.post('/prototypes/learner/v3/registration/password', learnerV3Controller.registerPasswordPost);
// registration, review
router.get('/prototypes/learner/v3/registration/review', learnerV3Controller.registerReviewGet);
router.post('/prototypes/learner/v3/registration/review', learnerV3Controller.registerReviewPost);
// registration, complete
router.get('/prototypes/learner/v3/registration/complete', learnerV3Controller.registerCompleteGet);
// router.post('/prototypes/learner/v3/registration/complete', learnerV3Controller.registerCompletePost);

// registration, complete
router.get('/prototypes/learner/v3/resource', learnerV3Controller.resourceGet);
router.post('/prototypes/learner/v3/resource', learnerV3Controller.resourcePost);

//******************************************************
//      Booking stuff
//******************************************************
router.get('/prototypes/learner/v3/booking', learnerV3Controller.bookingDateGet);
router.post('/prototypes/learner/v3/booking', learnerV3Controller.bookingDatePost);
router.get('/prototypes/learner/v3/booking/payment', learnerV3Controller.bookingPaymentGet);
router.post('/prototypes/learner/v3/booking/payment', learnerV3Controller.bookingPaymentPost);
router.get('/prototypes/learner/v3/booking/confirm', learnerV3Controller.bookingConfirmGet);
router.get('/prototypes/learner/v3/booking/complete', learnerV3Controller.bookingCompleteGet);

// SCORMS fire safety
router.get('/prototypes/learner/v3/scorms/basic-fire-safety', learnerV3Controller.basicFireSafetyGet);
router.post('/prototypes/learner/v3/scorms/basic-fire-safety', learnerV3Controller.basicFireSafetyPost);
// scorm done
router.get('/prototypes/learner/v3/scorms/basic-fire-safety/complete', learnerV3Controller.scormCompleteGet);

//******************************************************
//
//      v4 end-to-end learner journey custom routes
//
//******************************************************
// learner config

router.get('/prototypes/learner/v4/config', learnerV4Controller.configGet);
router.post('/prototypes/learner/v4/config', learnerV4Controller.configPost);

//******************************************************
//      Various smaller sections
//******************************************************
// start
router.get('/prototypes/learner/v4', learnerV4Controller.indexGet);
router.post('/prototypes/learner/v4', learnerV4Controller.indexPost);
// home
router.get('/prototypes/learner/v4/home', learnerV4Controller.homeGet);
// router.post('/prototypes/learner/v4/home', learnerV4Controller.homePost);

// profile
router.get('/prototypes/learner/v4/your-profile', learnerV4Controller.profileGet);
// planned learning
router.get('/prototypes/learner/v4/learning-plan', learnerV4Controller.plannedGet);
// learning record
router.get('/prototypes/learner/v4/learning-record', learnerV4Controller.recordGet);
// suggested learning
router.get('/prototypes/learner/v4/suggested-learning', learnerV4Controller.suggestedGet);

// search
router.get('/prototypes/learner/v4/search', learnerV4Controller.searchGet);
router.post('/prototypes/learner/v4/search', learnerV4Controller.searchPost);

// feedback
router.get('/prototypes/learner/v4/feedback', learnerV4Controller.feedbackGet);
router.post('/prototypes/learner/v4/feedback', learnerV4Controller.feedbackPost);

// Actions
router.get('/prototypes/learner/v4/actions', learnerV4Controller.actionsGet);
router.post('/prototypes/learner/v4/actions', learnerV4Controller.actionsPost);

//******************************************************
//      Registration stuff
//******************************************************
// registration, email
router.get('/prototypes/learner/v4/registration', learnerV4Controller.registerEmailGet);
router.post('/prototypes/learner/v4/registration', learnerV4Controller.registerEmailPost);
// registration, name
router.get('/prototypes/learner/v4/registration/personal-details', learnerV4Controller.registerPersonalGet);
router.post('/prototypes/learner/v4/registration/personal-details', learnerV4Controller.registerPersonalPost);

// registration, job, part 1, department
router.get('/prototypes/learner/v4/registration/department', learnerV4Controller.registerDepartmentGet);
router.post('/prototypes/learner/v4/registration/department', learnerV4Controller.registerDepartmentPost);
// registration, job, part 2, profession
router.get('/prototypes/learner/v4/registration/area-of-work', learnerV4Controller.registerAreaGet);
router.post('/prototypes/learner/v4/registration/area-of-work', learnerV4Controller.registerAreaPost);
// registration, job, part 3, grade
router.get('/prototypes/learner/v4/registration/grade', learnerV4Controller.registerGradeGet);
router.post('/prototypes/learner/v4/registration/grade', learnerV4Controller.registerGradePost);

// registration, password
router.get('/prototypes/learner/v4/registration/password', learnerV4Controller.registerPasswordGet);
router.post('/prototypes/learner/v4/registration/password', learnerV4Controller.registerPasswordPost);
// registration, review
router.get('/prototypes/learner/v4/registration/review', learnerV4Controller.registerReviewGet);
router.post('/prototypes/learner/v4/registration/review', learnerV4Controller.registerReviewPost);
// registration, complete
router.get('/prototypes/learner/v4/registration/complete', learnerV4Controller.registerCompleteGet);
// router.post('/prototypes/learner/v4/registration/complete', learnerV4Controller.registerCompletePost);

// registration, complete
router.get('/prototypes/learner/v4/resource', learnerV4Controller.resourceGet);
router.post('/prototypes/learner/v4/resource', learnerV4Controller.resourcePost);

//******************************************************
//      Booking stuff
//******************************************************
router.get('/prototypes/learner/v4/booking', learnerV4Controller.bookingDateGet);
router.post('/prototypes/learner/v4/booking', learnerV4Controller.bookingDatePost);
router.get('/prototypes/learner/v4/booking/payment', learnerV4Controller.bookingPaymentGet);
router.post('/prototypes/learner/v4/booking/payment', learnerV4Controller.bookingPaymentPost);
router.get('/prototypes/learner/v4/booking/confirm', learnerV4Controller.bookingConfirmGet);
router.get('/prototypes/learner/v4/booking/complete', learnerV4Controller.bookingCompleteGet);

// SCORMS fire safety
router.get('/prototypes/learner/v4/scorms/basic-fire-safety', learnerV4Controller.basicFireSafetyGet);
router.post('/prototypes/learner/v4/scorms/basic-fire-safety', learnerV4Controller.basicFireSafetyPost);
// scorm done
router.get('/prototypes/learner/v4/scorms/basic-fire-safety/complete', learnerV4Controller.scormCompleteGet);

//******************************************************
//
//      v5 end-to-end learner journey custom routes
//
//******************************************************
// learner config

router.get('/prototypes/learner/v5/config', learnerV5Controller.configGet);
router.post('/prototypes/learner/v5/config', learnerV5Controller.configPost);

//******************************************************
//      Various smaller sections
//******************************************************
// start
router.get('/prototypes/learner/v5', learnerV5Controller.indexGet);
router.post('/prototypes/learner/v5', learnerV5Controller.indexPost);
// home
router.get('/prototypes/learner/v5/home', learnerV5Controller.homeGet);
// router.post('/prototypes/learner/v5/home', learnerV5Controller.homePost);

// profile
router.get('/prototypes/learner/v5/your-profile', learnerV5Controller.profileGet);
// planned learning
router.get('/prototypes/learner/v5/learning-plan', learnerV5Controller.plannedGet);
// learning record
router.get('/prototypes/learner/v5/learning-record', learnerV5Controller.recordGet);
// suggested learning
router.get('/prototypes/learner/v5/suggested-learning', learnerV5Controller.suggestedGet);

// search
router.get('/prototypes/learner/v5/search', learnerV5Controller.searchGet);
router.post('/prototypes/learner/v5/search', learnerV5Controller.searchPost);

// feedback
router.get('/prototypes/learner/v5/feedback', learnerV5Controller.feedbackGet);
router.post('/prototypes/learner/v5/feedback', learnerV5Controller.feedbackPost);

// edit areas of work with levels
router.get('/prototypes/learner/v5/your-profile/area-of-work', learnerV5Controller.areasGet);
router.post('/prototypes/learner/v5/your-profile/area-of-work', learnerV5Controller.areasPost);

router.get('/prototypes/learner/v5/your-profile/area-of-work/levels', learnerV5Controller.areasLevelsGet);
router.post('/prototypes/learner/v5/your-profile/area-of-work/levels', learnerV5Controller.areasLevelsPost);

router.get('/prototypes/learner/v5/your-profile/interests', learnerV5Controller.interestsGet);

router.get('/prototypes/learner/v5/your-profile/area-of-work/joined-levels', learnerV5Controller.areasJoinedLevelsGet);
router.post('/prototypes/learner/v5/your-profile/area-of-work/joined-levels', learnerV5Controller.areasJoinedLevelsPost);

router.get('/prototypes/learner/v5/your-profile/other-areas-of-work', learnerV5Controller.otherAreasGet);
router.post('/prototypes/learner/v5/your-profile/other-areas-of-work', learnerV5Controller.otherAreasPost);

// Actions
router.get('/prototypes/learner/v5/actions', learnerV5Controller.actionsGet);
router.post('/prototypes/learner/v5/actions', learnerV5Controller.actionsPost);

//******************************************************
//      Registration stuff
//******************************************************
// registration, email
router.get('/prototypes/learner/v5/registration', learnerV5Controller.registerEmailGet);
router.post('/prototypes/learner/v5/registration', learnerV5Controller.registerEmailPost);
// registration, name
router.get('/prototypes/learner/v5/registration/personal-details', learnerV5Controller.registerPersonalGet);
router.post('/prototypes/learner/v5/registration/personal-details', learnerV5Controller.registerPersonalPost);

// registration, job, part 1, department
router.get('/prototypes/learner/v5/registration/department', learnerV5Controller.registerDepartmentGet);
router.post('/prototypes/learner/v5/registration/department', learnerV5Controller.registerDepartmentPost);
// registration, job, part 2, profession
router.get('/prototypes/learner/v5/registration/area-of-work', learnerV5Controller.registerAreaGet);
router.post('/prototypes/learner/v5/registration/area-of-work', learnerV5Controller.registerAreaPost);
// registration, job, part 3, grade
router.get('/prototypes/learner/v5/registration/grade', learnerV5Controller.registerGradeGet);
router.post('/prototypes/learner/v5/registration/grade', learnerV5Controller.registerGradePost);

// registration, password
router.get('/prototypes/learner/v5/registration/password', learnerV5Controller.registerPasswordGet);
router.post('/prototypes/learner/v5/registration/password', learnerV5Controller.registerPasswordPost);
// registration, review
router.get('/prototypes/learner/v5/registration/review', learnerV5Controller.registerReviewGet);
router.post('/prototypes/learner/v5/registration/review', learnerV5Controller.registerReviewPost);
// registration, complete
router.get('/prototypes/learner/v5/registration/complete', learnerV5Controller.registerCompleteGet);
// router.post('/prototypes/learner/v5/registration/complete', learnerV5Controller.registerCompletePost);

// registration, complete
router.get('/prototypes/learner/v5/resource', learnerV5Controller.resourceGet);
router.post('/prototypes/learner/v5/resource', learnerV5Controller.resourcePost);

//******************************************************
//      Booking stuff
//******************************************************
router.get('/prototypes/learner/v5/booking', learnerV5Controller.bookingDateGet);
router.post('/prototypes/learner/v5/booking', learnerV5Controller.bookingDatePost);
router.get('/prototypes/learner/v5/booking/payment', learnerV5Controller.bookingPaymentGet);
router.post('/prototypes/learner/v5/booking/payment', learnerV5Controller.bookingPaymentPost);
router.get('/prototypes/learner/v5/booking/confirm', learnerV5Controller.bookingConfirmGet);
router.get('/prototypes/learner/v5/booking/complete', learnerV5Controller.bookingCompleteGet);

// SCORMS fire safety
router.get('/prototypes/learner/v5/scorms/basic-fire-safety', learnerV5Controller.basicFireSafetyGet);
router.post('/prototypes/learner/v5/scorms/basic-fire-safety', learnerV5Controller.basicFireSafetyPost);
// scorm done
router.get('/prototypes/learner/v5/scorms/basic-fire-safety/complete', learnerV5Controller.scormCompleteGet);

//******************************************************
//
//      v6 end-to-end learner journey custom routes
//
//******************************************************
// learner config

router.get('/prototypes/learner/v6/config', learnerV6Controller.configGet);
router.post('/prototypes/learner/v6/config', learnerV6Controller.configPost);

//******************************************************
//      Various smaller sections
//******************************************************
// start
router.get('/prototypes/learner/v6', learnerV6Controller.indexGet);
router.post('/prototypes/learner/v6', learnerV6Controller.indexPost);
// home
router.get('/prototypes/learner/v6/home', learnerV6Controller.homeGet);
// router.post('/prototypes/learner/v6/home', learnerV6Controller.homePost);

// profile
router.get('/prototypes/learner/v6/your-profile', learnerV6Controller.profileGet);
// planned learning
router.get('/prototypes/learner/v6/learning-plan', learnerV6Controller.plannedGet);
// learning record
router.get('/prototypes/learner/v6/learning-record', learnerV6Controller.recordGet);
// suggested learning
router.get('/prototypes/learner/v6/suggested-learning', learnerV6Controller.suggestedGet);
router.get('/prototypes/learner/v6/suggested-learning-full', learnerV6Controller.suggestedFullGet);

// profile
router.get('/prototypes/learner/v6/privacy', learnerV6Controller.privacyGet);

// search
router.get('/prototypes/learner/v6/search', learnerV6Controller.searchGet);
router.post('/prototypes/learner/v6/search', learnerV6Controller.searchPost);

// feedback
router.get('/prototypes/learner/v6/feedback', learnerV6Controller.feedbackGet);
router.post('/prototypes/learner/v6/feedback', learnerV6Controller.feedbackPost);

// edit areas of work with levels
router.get('/prototypes/learner/v6/your-profile/area-of-work', learnerV6Controller.areasGet);
router.post('/prototypes/learner/v6/your-profile/area-of-work', learnerV6Controller.areasPost);

router.get('/prototypes/learner/v6/your-profile/area-of-work/levels', learnerV6Controller.areasLevelsGet);
router.post('/prototypes/learner/v6/your-profile/area-of-work/levels', learnerV6Controller.areasLevelsPost);

router.get('/prototypes/learner/v6/your-profile/interests', learnerV6Controller.interestsGet);
router.post('/prototypes/learner/v6/your-profile/interests', learnerV6Controller.interestsPost);

router.get('/prototypes/learner/v6/your-profile/area-of-work/joined-levels', learnerV6Controller.areasJoinedLevelsGet);
router.post('/prototypes/learner/v6/your-profile/area-of-work/joined-levels', learnerV6Controller.areasJoinedLevelsPost);

// As product manager for show and tell
router.get('/prototypes/learner/v6/your-profile/area-of-work/joined-levels-pm', learnerV6Controller.areasJoinedLevelsPMGet);
router.post('/prototypes/learner/v6/your-profile/area-of-work/joined-levels-pm', learnerV6Controller.areasJoinedLevelsPMPost);

router.get('/prototypes/learner/v6/your-profile/other-areas-of-work', learnerV6Controller.otherAreasGet);
router.post('/prototypes/learner/v6/your-profile/other-areas-of-work', learnerV6Controller.otherAreasPost);

// Actions
router.get('/prototypes/learner/v6/actions', learnerV6Controller.actionsGet);
router.post('/prototypes/learner/v6/actions', learnerV6Controller.actionsPost);

//******************************************************
//      Registration stuff
//******************************************************
// registration, email
router.get('/prototypes/learner/v6/registration', learnerV6Controller.registerEmailGet);
router.post('/prototypes/learner/v6/registration', learnerV6Controller.registerEmailPost);
// registration, name
router.get('/prototypes/learner/v6/registration/personal-details', learnerV6Controller.registerPersonalGet);
router.post('/prototypes/learner/v6/registration/personal-details', learnerV6Controller.registerPersonalPost);

// registration, job, part 1, department
router.get('/prototypes/learner/v6/registration/department', learnerV6Controller.registerDepartmentGet);
router.post('/prototypes/learner/v6/registration/department', learnerV6Controller.registerDepartmentPost);
// registration, job, part 2, profession
router.get('/prototypes/learner/v6/registration/area-of-work', learnerV6Controller.registerAreaGet);
router.post('/prototypes/learner/v6/registration/area-of-work', learnerV6Controller.registerAreaPost);
// registration, job, part 3, grade
router.get('/prototypes/learner/v6/registration/grade', learnerV6Controller.registerGradeGet);
router.post('/prototypes/learner/v6/registration/grade', learnerV6Controller.registerGradePost);

// registration, password
router.get('/prototypes/learner/v6/registration/password', learnerV6Controller.registerPasswordGet);
router.post('/prototypes/learner/v6/registration/password', learnerV6Controller.registerPasswordPost);
// registration, review
router.get('/prototypes/learner/v6/registration/review', learnerV6Controller.registerReviewGet);
router.post('/prototypes/learner/v6/registration/review', learnerV6Controller.registerReviewPost);
// registration, complete
router.get('/prototypes/learner/v6/registration/complete', learnerV6Controller.registerCompleteGet);
// router.post('/prototypes/learner/v6/registration/complete', learnerV6Controller.registerCompletePost);

// registration, complete
router.get('/prototypes/learner/v6/resource', learnerV6Controller.resourceGet);
router.post('/prototypes/learner/v6/resource', learnerV6Controller.resourcePost);

//******************************************************
//      Booking stuff
//******************************************************
router.get('/prototypes/learner/v6/booking', learnerV6Controller.bookingDateGet);
router.post('/prototypes/learner/v6/booking', learnerV6Controller.bookingDatePost);
router.get('/prototypes/learner/v6/booking/payment', learnerV6Controller.bookingPaymentGet);
router.post('/prototypes/learner/v6/booking/payment', learnerV6Controller.bookingPaymentPost);
router.get('/prototypes/learner/v6/booking/confirm', learnerV6Controller.bookingConfirmGet);
router.get('/prototypes/learner/v6/booking/complete', learnerV6Controller.bookingCompleteGet);

//******************************************************
//      authentication, forgotten/reset/create password etc
//******************************************************
router.get('/prototypes/learner/v6/reset-password', learnerV6Controller.resetPasswordGet);
router.post('/prototypes/learner/v6/reset-password', learnerV6Controller.resetPasswordPost);
router.get('/prototypes/learner/v6/email-sent', learnerV6Controller.emailSentGet);
router.get('/prototypes/learner/v6/enter-new-password', learnerV6Controller.enterNewPasswordGet);
router.post('/prototypes/learner/v6/enter-new-password', learnerV6Controller.enterNewPasswordPost);
router.get('/prototypes/learner/v6/reset-success', learnerV6Controller.resetSuccessGet);

router.get('/prototypes/learner/v6/create-new-password', learnerV6Controller.createNewPasswordGet);
router.post('/prototypes/learner/v6/create-new-password', learnerV6Controller.createNewPasswordPost);
router.get('/prototypes/learner/v6/create-success', learnerV6Controller.createSuccessGet);

// SCORMS fire safety
router.get('/prototypes/learner/v6/scorms/basic-fire-safety', learnerV6Controller.basicFireSafetyGet);
router.post('/prototypes/learner/v6/scorms/basic-fire-safety', learnerV6Controller.basicFireSafetyPost);
// scorm done
router.get('/prototypes/learner/v6/scorms/basic-fire-safety/complete', learnerV6Controller.scormCompleteGet);

//******************************************************
//
//      v7 end-to-end learner journey custom routes
//
//******************************************************
// learner config

router.get('/prototypes/learner/v7/config', learnerV7Controller.configGet);
router.post('/prototypes/learner/v7/config', learnerV7Controller.configPost);

//******************************************************
//      Various smaller sections
//******************************************************
// start
router.get('/prototypes/learner/v7', learnerV7Controller.indexGet);
router.post('/prototypes/learner/v7', learnerV7Controller.indexPost);
// home
router.get('/prototypes/learner/v7/home', learnerV7Controller.homeGet);
// router.post('/prototypes/learner/v7/home', learnerV7Controller.homePost);

// profile
router.get('/prototypes/learner/v7/your-profile', learnerV7Controller.profileGet);
// planned learning
router.get('/prototypes/learner/v7/learning-plan', learnerV7Controller.plannedGet);
// learning record
router.get('/prototypes/learner/v7/learning-record', learnerV7Controller.recordGet);
// suggested learning
router.get('/prototypes/learner/v7/suggested-learning', learnerV7Controller.suggestedGet);
router.get('/prototypes/learner/v7/suggested-learning-full', learnerV7Controller.suggestedFullGet);
router.get('/prototypes/learner/v7/suggested-learning-all', learnerV7Controller.suggestedAllGet);
router.get('/prototypes/learner/v7/suggested-learning-hmrc', learnerV7Controller.suggestedAllHMRCGet);
router.get('/prototypes/learner/v7/suggested-learning-hmrc-cols', learnerV7Controller.suggestedAllHMRCColsGet);

// profile
router.get('/prototypes/learner/v7/privacy', learnerV7Controller.privacyGet);

// search
router.get('/prototypes/learner/v7/search', learnerV7Controller.searchGet);
router.post('/prototypes/learner/v7/search', learnerV7Controller.searchPost);

// feedback
router.get('/prototypes/learner/v7/feedback', learnerV7Controller.feedbackGet);
router.post('/prototypes/learner/v7/feedback', learnerV7Controller.feedbackPost);

// edit areas of work with levels
router.get('/prototypes/learner/v7/your-profile/area-of-work', learnerV7Controller.areasGet);
router.post('/prototypes/learner/v7/your-profile/area-of-work', learnerV7Controller.areasPost);

router.get('/prototypes/learner/v7/your-profile/area-of-work/levels', learnerV7Controller.areasLevelsGet);
router.post('/prototypes/learner/v7/your-profile/area-of-work/levels', learnerV7Controller.areasLevelsPost);

router.get('/prototypes/learner/v7/your-profile/interests', learnerV7Controller.interestsGet);
router.post('/prototypes/learner/v7/your-profile/interests', learnerV7Controller.interestsPost);

router.get('/prototypes/learner/v7/your-profile/area-of-work/joined-levels', learnerV7Controller.areasJoinedLevelsGet);
router.post('/prototypes/learner/v7/your-profile/area-of-work/joined-levels', learnerV7Controller.areasJoinedLevelsPost);

// As product manager for show and tell
router.get('/prototypes/learner/v7/your-profile/area-of-work/joined-levels-pm', learnerV7Controller.areasJoinedLevelsPMGet);
router.post('/prototypes/learner/v7/your-profile/area-of-work/joined-levels-pm', learnerV7Controller.areasJoinedLevelsPMPost);

router.get('/prototypes/learner/v7/your-profile/other-areas-of-work', learnerV7Controller.otherAreasGet);
router.post('/prototypes/learner/v7/your-profile/other-areas-of-work', learnerV7Controller.otherAreasPost);

// Actions
router.get('/prototypes/learner/v7/actions', learnerV7Controller.actionsGet);
router.post('/prototypes/learner/v7/actions', learnerV7Controller.actionsPost);

//******************************************************
//      Registration stuff
//******************************************************
// registration, email
router.get('/prototypes/learner/v7/registration', learnerV7Controller.registerEmailGet);
router.post('/prototypes/learner/v7/registration', learnerV7Controller.registerEmailPost);
// registration, name
router.get('/prototypes/learner/v7/registration/personal-details', learnerV7Controller.registerPersonalGet);
router.post('/prototypes/learner/v7/registration/personal-details', learnerV7Controller.registerPersonalPost);

// registration, job, part 1, department
router.get('/prototypes/learner/v7/registration/department', learnerV7Controller.registerDepartmentGet);
router.post('/prototypes/learner/v7/registration/department', learnerV7Controller.registerDepartmentPost);
// registration, job, part 2, profession
router.get('/prototypes/learner/v7/registration/area-of-work', learnerV7Controller.registerAreaGet);
router.post('/prototypes/learner/v7/registration/area-of-work', learnerV7Controller.registerAreaPost);
// registration, job, part 3, grade
router.get('/prototypes/learner/v7/registration/grade', learnerV7Controller.registerGradeGet);
router.post('/prototypes/learner/v7/registration/grade', learnerV7Controller.registerGradePost);

// registration, password
router.get('/prototypes/learner/v7/registration/password', learnerV7Controller.registerPasswordGet);
router.post('/prototypes/learner/v7/registration/password', learnerV7Controller.registerPasswordPost);
// registration, review
router.get('/prototypes/learner/v7/registration/review', learnerV7Controller.registerReviewGet);
router.post('/prototypes/learner/v7/registration/review', learnerV7Controller.registerReviewPost);
// registration, complete
router.get('/prototypes/learner/v7/registration/complete', learnerV7Controller.registerCompleteGet);
// router.post('/prototypes/learner/v7/registration/complete', learnerV7Controller.registerCompletePost);

// registration, complete
router.get('/prototypes/learner/v7/resource', learnerV7Controller.resourceGet);
router.post('/prototypes/learner/v7/resource', learnerV7Controller.resourcePost);

//******************************************************
//      Booking stuff
//******************************************************
router.get('/prototypes/learner/v7/booking', learnerV7Controller.bookingDateGet);
router.post('/prototypes/learner/v7/booking', learnerV7Controller.bookingDatePost);
router.get('/prototypes/learner/v7/booking/payment', learnerV7Controller.bookingPaymentGet);
router.post('/prototypes/learner/v7/booking/payment', learnerV7Controller.bookingPaymentPost);
router.get('/prototypes/learner/v7/booking/confirm', learnerV7Controller.bookingConfirmGet);
router.get('/prototypes/learner/v7/booking/complete', learnerV7Controller.bookingCompleteGet);

// Booking elements page in Library
router.get('/prototypes/layouts/booking', learnerV7Controller.bookingPOCGet);

//******************************************************
//      authentication, forgotten/reset/create password etc
//******************************************************
router.get('/prototypes/learner/v7/reset-password', learnerV7Controller.resetPasswordGet);
router.post('/prototypes/learner/v7/reset-password', learnerV7Controller.resetPasswordPost);
router.get('/prototypes/learner/v7/email-sent', learnerV7Controller.emailSentGet);
router.get('/prototypes/learner/v7/enter-new-password', learnerV7Controller.enterNewPasswordGet);
router.post('/prototypes/learner/v7/enter-new-password', learnerV7Controller.enterNewPasswordPost);
router.get('/prototypes/learner/v7/reset-success', learnerV7Controller.resetSuccessGet);

router.get('/prototypes/learner/v7/create-new-password', learnerV7Controller.createNewPasswordGet);
router.post('/prototypes/learner/v7/create-new-password', learnerV7Controller.createNewPasswordPost);
router.get('/prototypes/learner/v7/create-success', learnerV7Controller.createSuccessGet);

// SCORMS fire safety
router.get('/prototypes/learner/v7/scorms/basic-fire-safety', learnerV7Controller.basicFireSafetyGet);
router.post('/prototypes/learner/v7/scorms/basic-fire-safety', learnerV7Controller.basicFireSafetyPost);
// scorm done
router.get('/prototypes/learner/v7/scorms/basic-fire-safety/complete', learnerV7Controller.scormCompleteGet);

//******************************************************
//
//      v8 end-to-end learner journey custom routes
//
//******************************************************
// learner config

router.get('/prototypes/learner/v8/config', learnerV8Controller.configGet);
router.post('/prototypes/learner/v8/config', learnerV8Controller.configPost);

//******************************************************
//      Various smaller sections
//******************************************************
// start
router.get('/prototypes/learner/v8', learnerV8Controller.indexGet);
router.post('/prototypes/learner/v8', learnerV8Controller.indexPost);
// home
router.get('/prototypes/learner/v8/home', learnerV8Controller.homeGet);
// router.post('/prototypes/learner/v8/home', learnerV8Controller.homePost);

// profile
router.get('/prototypes/learner/v8/your-profile', learnerV8Controller.profileGet);
// planned learning
router.get('/prototypes/learner/v8/learning-plan', learnerV8Controller.plannedGet);
// learning record
router.get('/prototypes/learner/v8/learning-record', learnerV8Controller.recordGet);
// suggested learning
router.get('/prototypes/learner/v8/suggested-learning', learnerV8Controller.suggestedGet);
router.get('/prototypes/learner/v8/suggested-learning-full', learnerV8Controller.suggestedFullGet);
router.get('/prototypes/learner/v8/suggested-learning-all', learnerV8Controller.suggestedAllGet);
router.get('/prototypes/learner/v8/suggested-learning-hmrc', learnerV8Controller.suggestedAllHMRCGet);
router.get('/prototypes/learner/v8/suggested-learning-hmrc-cols', learnerV8Controller.suggestedAllHMRCColsGet);

// profile
router.get('/prototypes/learner/v8/privacy', learnerV8Controller.privacyGet);

// search
router.get('/prototypes/learner/v8/search', learnerV8Controller.searchGet);
router.post('/prototypes/learner/v8/search', learnerV8Controller.searchPost);

// feedback
router.get('/prototypes/learner/v8/feedback', learnerV8Controller.feedbackGet);
router.post('/prototypes/learner/v8/feedback', learnerV8Controller.feedbackPost);

// edit areas of work with levels
router.get('/prototypes/learner/v8/your-profile/area-of-work', learnerV8Controller.areasGet);
router.post('/prototypes/learner/v8/your-profile/area-of-work', learnerV8Controller.areasPost);

router.get('/prototypes/learner/v8/your-profile/area-of-work/levels', learnerV8Controller.areasLevelsGet);
router.post('/prototypes/learner/v8/your-profile/area-of-work/levels', learnerV8Controller.areasLevelsPost);

router.get('/prototypes/learner/v8/your-profile/interests', learnerV8Controller.interestsGet);
router.post('/prototypes/learner/v8/your-profile/interests', learnerV8Controller.interestsPost);

router.get('/prototypes/learner/v8/your-profile/area-of-work/joined-levels', learnerV8Controller.areasJoinedLevelsGet);
router.post('/prototypes/learner/v8/your-profile/area-of-work/joined-levels', learnerV8Controller.areasJoinedLevelsPost);

// As product manager for show and tell
router.get('/prototypes/learner/v8/your-profile/area-of-work/joined-levels-pm', learnerV8Controller.areasJoinedLevelsPMGet);
router.post('/prototypes/learner/v8/your-profile/area-of-work/joined-levels-pm', learnerV8Controller.areasJoinedLevelsPMPost);

router.get('/prototypes/learner/v8/your-profile/other-areas-of-work', learnerV8Controller.otherAreasGet);
router.post('/prototypes/learner/v8/your-profile/other-areas-of-work', learnerV8Controller.otherAreasPost);

// Actions
router.get('/prototypes/learner/v8/actions', learnerV8Controller.actionsGet);
router.post('/prototypes/learner/v8/actions', learnerV8Controller.actionsPost);

//******************************************************
//      Registration stuff
//******************************************************
// registration, email
router.get('/prototypes/learner/v8/registration', learnerV8Controller.registerEmailGet);
router.post('/prototypes/learner/v8/registration', learnerV8Controller.registerEmailPost);
// registration, name
router.get('/prototypes/learner/v8/registration/personal-details', learnerV8Controller.registerPersonalGet);
router.post('/prototypes/learner/v8/registration/personal-details', learnerV8Controller.registerPersonalPost);

// registration, job, part 1, department
router.get('/prototypes/learner/v8/registration/department', learnerV8Controller.registerDepartmentGet);
router.post('/prototypes/learner/v8/registration/department', learnerV8Controller.registerDepartmentPost);
// registration, job, part 2, profession
router.get('/prototypes/learner/v8/registration/area-of-work', learnerV8Controller.registerAreaGet);
router.post('/prototypes/learner/v8/registration/area-of-work', learnerV8Controller.registerAreaPost);
// registration, job, part 3, grade
router.get('/prototypes/learner/v8/registration/grade', learnerV8Controller.registerGradeGet);
router.post('/prototypes/learner/v8/registration/grade', learnerV8Controller.registerGradePost);

// registration, password
router.get('/prototypes/learner/v8/registration/password', learnerV8Controller.registerPasswordGet);
router.post('/prototypes/learner/v8/registration/password', learnerV8Controller.registerPasswordPost);
// registration, review
router.get('/prototypes/learner/v8/registration/review', learnerV8Controller.registerReviewGet);
router.post('/prototypes/learner/v8/registration/review', learnerV8Controller.registerReviewPost);
// registration, complete
router.get('/prototypes/learner/v8/registration/complete', learnerV8Controller.registerCompleteGet);
// router.post('/prototypes/learner/v8/registration/complete', learnerV8Controller.registerCompletePost);

// registration, complete
router.get('/prototypes/learner/v8/resource', learnerV8Controller.resourceGet);
router.post('/prototypes/learner/v8/resource', learnerV8Controller.resourcePost);

//******************************************************
//      Booking stuff
//******************************************************
router.get('/prototypes/learner/v8/booking', learnerV8Controller.bookingDateGet);
router.post('/prototypes/learner/v8/booking', learnerV8Controller.bookingDatePost);
router.get('/prototypes/learner/v8/booking/payment', learnerV8Controller.bookingPaymentGet);
router.post('/prototypes/learner/v8/booking/payment', learnerV8Controller.bookingPaymentPost);
router.get('/prototypes/learner/v8/booking/confirm', learnerV8Controller.bookingConfirmGet);
router.get('/prototypes/learner/v8/booking/complete', learnerV8Controller.bookingCompleteGet);

// Booking elements page in Library
router.get('/prototypes/layouts/booking', learnerV8Controller.bookingPOCGet);

//******************************************************
//      authentication, forgotten/reset/create password etc
//******************************************************
router.get('/prototypes/learner/v8/reset-password', learnerV8Controller.resetPasswordGet);
router.post('/prototypes/learner/v8/reset-password', learnerV8Controller.resetPasswordPost);
router.get('/prototypes/learner/v8/email-sent', learnerV8Controller.emailSentGet);
router.get('/prototypes/learner/v8/enter-new-password', learnerV8Controller.enterNewPasswordGet);
router.post('/prototypes/learner/v8/enter-new-password', learnerV8Controller.enterNewPasswordPost);
router.get('/prototypes/learner/v8/reset-success', learnerV8Controller.resetSuccessGet);

router.get('/prototypes/learner/v8/create-new-password', learnerV8Controller.createNewPasswordGet);
router.post('/prototypes/learner/v8/create-new-password', learnerV8Controller.createNewPasswordPost);
router.get('/prototypes/learner/v8/create-success', learnerV8Controller.createSuccessGet);

// SCORMS fire safety
router.get('/prototypes/learner/v8/scorms/basic-fire-safety', learnerV8Controller.basicFireSafetyGet);
router.post('/prototypes/learner/v8/scorms/basic-fire-safety', learnerV8Controller.basicFireSafetyPost);
// scorm done
router.get('/prototypes/learner/v8/scorms/basic-fire-safety/complete', learnerV8Controller.scormCompleteGet);

//******************************************************
//      admin section
//******************************************************
router.get('/prototypes/learner/v8/admin', learnerV8Controller.adminGet);
router.post('/prototypes/learner/v8/admin', learnerV8Controller.adminPost);

router.get('/prototypes/learner/v8/admin/course-list', learnerV8Controller.adminCourseListGet);
router.post('/prototypes/learner/v8/admin/course-list', learnerV8Controller.adminCourseListPost);

router.get('/prototypes/learner/v8/admin/events-list', learnerV8Controller.adminEventsListGet);
router.post('/prototypes/learner/v8/admin/events-list', learnerV8Controller.adminEventsListPost);

router.get('/prototypes/learner/v8/admin/edit', learnerV8Controller.adminEditGet);
router.post('/prototypes/learner/v8/admin/edit', learnerV8Controller.adminEditPost);
router.get('/prototypes/learner/v8/admin/add', learnerV8Controller.adminAddGet);
router.post('/prototypes/learner/v8/admin/add', learnerV8Controller.adminAddPost);
router.get('/prototypes/learner/v8/admin/add-details', learnerV8Controller.adminAddDetailsGet);
router.post('/prototypes/learner/v8/admin/add-details', learnerV8Controller.adminAddDetailsPost);

router.get('/prototypes/learner/v8/admin/add-assets', learnerV8Controller.adminAddAssetsGet);
router.post('/prototypes/learner/v8/admin/add-assets', learnerV8Controller.adminAddAssetsPost);

router.get('/prototypes/learner/v8/admin/add-review', learnerV8Controller.adminAddReviewGet);
router.post('/prototypes/learner/v8/admin/add-review', learnerV8Controller.adminAddReviewPost);
router.get('/prototypes/learner/v8/admin/add-complete', learnerV8Controller.adminAddCompleteGet);
router.post('/prototypes/learner/v8/admin/add-complete', learnerV8Controller.adminAddCompletePost);

//******************************************************
//
//      v9 end-to-end learner journey custom routes
//
//******************************************************
// learner config

router.get('/prototypes/learner/v9/config', learnerV9Controller.configGet);
router.post('/prototypes/learner/v9/config', learnerV9Controller.configPost);

//******************************************************
//      Various smaller sections
//******************************************************
// start
router.get('/prototypes/learner/v9', learnerV9Controller.indexGet);
router.post('/prototypes/learner/v9', learnerV9Controller.indexPost);
// home
router.get('/prototypes/learner/v9/home', learnerV9Controller.homeGet);
// router.post('/prototypes/learner/v9/home', learnerV9Controller.homePost);

// profile
router.get('/prototypes/learner/v9/your-profile', learnerV9Controller.profileGet);
// planned learning
router.get('/prototypes/learner/v9/learning-plan', learnerV9Controller.plannedGet);
// learning record
router.get('/prototypes/learner/v9/learning-record', learnerV9Controller.recordGet);
// suggested learning
router.get('/prototypes/learner/v9/suggested-learning', learnerV9Controller.suggestedGet);
router.get('/prototypes/learner/v9/suggested-learning-full', learnerV9Controller.suggestedFullGet);
router.get('/prototypes/learner/v9/suggested-learning-all', learnerV9Controller.suggestedAllGet);
router.get('/prototypes/learner/v9/suggested-learning-hmrc', learnerV9Controller.suggestedAllHMRCGet);
router.get('/prototypes/learner/v9/suggested-learning-hmrc-cols', learnerV9Controller.suggestedAllHMRCColsGet);

// profile
router.get('/prototypes/learner/v9/privacy', learnerV9Controller.privacyGet);

// search
router.get('/prototypes/learner/v9/search', learnerV9Controller.searchGet);
router.post('/prototypes/learner/v9/search', learnerV9Controller.searchPost);

// feedback
router.get('/prototypes/learner/v9/feedback', learnerV9Controller.feedbackGet);
router.post('/prototypes/learner/v9/feedback', learnerV9Controller.feedbackPost);

// edit areas of work with levels
router.get('/prototypes/learner/v9/your-profile/area-of-work', learnerV9Controller.areasGet);
router.post('/prototypes/learner/v9/your-profile/area-of-work', learnerV9Controller.areasPost);

router.get('/prototypes/learner/v9/your-profile/area-of-work/levels', learnerV9Controller.areasLevelsGet);
router.post('/prototypes/learner/v9/your-profile/area-of-work/levels', learnerV9Controller.areasLevelsPost);

router.get('/prototypes/learner/v9/your-profile/interests', learnerV9Controller.interestsGet);
router.post('/prototypes/learner/v9/your-profile/interests', learnerV9Controller.interestsPost);

router.get('/prototypes/learner/v9/your-profile/area-of-work/joined-levels', learnerV9Controller.areasJoinedLevelsGet);
router.post('/prototypes/learner/v9/your-profile/area-of-work/joined-levels', learnerV9Controller.areasJoinedLevelsPost);

// As product manager for show and tell
router.get('/prototypes/learner/v9/your-profile/area-of-work/joined-levels-pm', learnerV9Controller.areasJoinedLevelsPMGet);
router.post('/prototypes/learner/v9/your-profile/area-of-work/joined-levels-pm', learnerV9Controller.areasJoinedLevelsPMPost);

router.get('/prototypes/learner/v9/your-profile/other-areas-of-work', learnerV9Controller.otherAreasGet);
router.post('/prototypes/learner/v9/your-profile/other-areas-of-work', learnerV9Controller.otherAreasPost);

// Actions
router.get('/prototypes/learner/v9/actions', learnerV9Controller.actionsGet);
router.post('/prototypes/learner/v9/actions', learnerV9Controller.actionsPost);

//******************************************************
//      Registration stuff
//******************************************************
// registration, email
router.get('/prototypes/learner/v9/registration', learnerV9Controller.registerEmailGet);
router.post('/prototypes/learner/v9/registration', learnerV9Controller.registerEmailPost);
// registration, name
router.get('/prototypes/learner/v9/registration/personal-details', learnerV9Controller.registerPersonalGet);
router.post('/prototypes/learner/v9/registration/personal-details', learnerV9Controller.registerPersonalPost);

// registration, job, part 1, department
router.get('/prototypes/learner/v9/registration/department', learnerV9Controller.registerDepartmentGet);
router.post('/prototypes/learner/v9/registration/department', learnerV9Controller.registerDepartmentPost);
// registration, job, part 2, profession
router.get('/prototypes/learner/v9/registration/area-of-work', learnerV9Controller.registerAreaGet);
router.post('/prototypes/learner/v9/registration/area-of-work', learnerV9Controller.registerAreaPost);
// registration, job, part 3, grade
router.get('/prototypes/learner/v9/registration/grade', learnerV9Controller.registerGradeGet);
router.post('/prototypes/learner/v9/registration/grade', learnerV9Controller.registerGradePost);

// registration, password
router.get('/prototypes/learner/v9/registration/password', learnerV9Controller.registerPasswordGet);
router.post('/prototypes/learner/v9/registration/password', learnerV9Controller.registerPasswordPost);
// registration, review
router.get('/prototypes/learner/v9/registration/review', learnerV9Controller.registerReviewGet);
router.post('/prototypes/learner/v9/registration/review', learnerV9Controller.registerReviewPost);
// registration, complete
router.get('/prototypes/learner/v9/registration/complete', learnerV9Controller.registerCompleteGet);
// router.post('/prototypes/learner/v9/registration/complete', learnerV9Controller.registerCompletePost);

// registration, complete
router.get('/prototypes/learner/v9/resource', learnerV9Controller.resourceGet);
router.post('/prototypes/learner/v9/resource', learnerV9Controller.resourcePost);

//******************************************************
//      Booking stuff
//******************************************************
router.get('/prototypes/learner/v9/booking', learnerV9Controller.bookingDateGet);
router.post('/prototypes/learner/v9/booking', learnerV9Controller.bookingDatePost);
router.get('/prototypes/learner/v9/booking/payment', learnerV9Controller.bookingPaymentGet);
router.post('/prototypes/learner/v9/booking/payment', learnerV9Controller.bookingPaymentPost);
router.get('/prototypes/learner/v9/booking/confirm', learnerV9Controller.bookingConfirmGet);
router.get('/prototypes/learner/v9/booking/complete', learnerV9Controller.bookingCompleteGet);

// Booking elements page in Library
router.get('/prototypes/layouts/booking', learnerV9Controller.bookingPOCGet);

//******************************************************
//      authentication, forgotten/reset/create password etc
//******************************************************
router.get('/prototypes/learner/v9/reset-password', learnerV9Controller.resetPasswordGet);
router.post('/prototypes/learner/v9/reset-password', learnerV9Controller.resetPasswordPost);
router.get('/prototypes/learner/v9/email-sent', learnerV9Controller.emailSentGet);
router.get('/prototypes/learner/v9/enter-new-password', learnerV9Controller.enterNewPasswordGet);
router.post('/prototypes/learner/v9/enter-new-password', learnerV9Controller.enterNewPasswordPost);
router.get('/prototypes/learner/v9/reset-success', learnerV9Controller.resetSuccessGet);

router.get('/prototypes/learner/v9/create-new-password', learnerV9Controller.createNewPasswordGet);
router.post('/prototypes/learner/v9/create-new-password', learnerV9Controller.createNewPasswordPost);
router.get('/prototypes/learner/v9/create-success', learnerV9Controller.createSuccessGet);

// SCORMS fire safety
router.get('/prototypes/learner/v9/scorms/basic-fire-safety', learnerV9Controller.basicFireSafetyGet);
router.post('/prototypes/learner/v9/scorms/basic-fire-safety', learnerV9Controller.basicFireSafetyPost);
// scorm done
router.get('/prototypes/learner/v9/scorms/basic-fire-safety/complete', learnerV9Controller.scormCompleteGet);

//******************************************************
//      admin section
//******************************************************
router.get('/prototypes/learner/v9/admin', learnerV9Controller.adminGet);
router.post('/prototypes/learner/v9/admin', learnerV9Controller.adminPost);

router.get('/prototypes/learner/v9/admin/course-list', learnerV9Controller.adminCourseListGet);
router.post('/prototypes/learner/v9/admin/course-list', learnerV9Controller.adminCourseListPost);

router.get('/prototypes/learner/v9/admin/events-list', learnerV9Controller.adminEventsListGet);
router.post('/prototypes/learner/v9/admin/events-list', learnerV9Controller.adminEventsListPost);

router.get('/prototypes/learner/v9/admin/edit', learnerV9Controller.adminEditGet);
router.post('/prototypes/learner/v9/admin/edit', learnerV9Controller.adminEditPost);
router.get('/prototypes/learner/v9/admin/add', learnerV9Controller.adminAddGet);
router.post('/prototypes/learner/v9/admin/add', learnerV9Controller.adminAddPost);
router.get('/prototypes/learner/v9/admin/add-details', learnerV9Controller.adminAddDetailsGet);
router.post('/prototypes/learner/v9/admin/add-details', learnerV9Controller.adminAddDetailsPost);

router.get('/prototypes/learner/v9/admin/add-assets', learnerV9Controller.adminAddAssetsGet);
router.post('/prototypes/learner/v9/admin/add-assets', learnerV9Controller.adminAddAssetsPost);

router.get('/prototypes/learner/v9/admin/add-review', learnerV9Controller.adminAddReviewGet);
router.post('/prototypes/learner/v9/admin/add-review', learnerV9Controller.adminAddReviewPost);
router.get('/prototypes/learner/v9/admin/add-complete', learnerV9Controller.adminAddCompleteGet);
router.post('/prototypes/learner/v9/admin/add-complete', learnerV9Controller.adminAddCompletePost);

//******************************************************
//
//      v10 end-to-end learner journey custom routes
//
//******************************************************
// learner config

router.get('/prototypes/learner/v10/config', learnerV10Controller.configGet);
router.post('/prototypes/learner/v10/config', learnerV10Controller.configPost);

//******************************************************
//      Various smaller sections
//******************************************************
// start
router.get('/prototypes/learner/v10', learnerV10Controller.indexGet);
router.post('/prototypes/learner/v10', learnerV10Controller.indexPost);
// home
router.get('/prototypes/learner/v10/home', learnerV10Controller.homeGet);
// router.post('/prototypes/learner/v10/home', learnerV10Controller.homePost);

// profile
router.get('/prototypes/learner/v10/your-profile', learnerV10Controller.profileGet);
// planned learning
router.get('/prototypes/learner/v10/learning-plan', learnerV10Controller.plannedGet);
// learning record
router.get('/prototypes/learner/v10/learning-record', learnerV10Controller.recordGet);
// suggested learning
router.get('/prototypes/learner/v10/suggested-learning', learnerV10Controller.suggestedGet);
router.get('/prototypes/learner/v10/suggested-learning-full', learnerV10Controller.suggestedFullGet);
router.get('/prototypes/learner/v10/suggested-learning-all', learnerV10Controller.suggestedAllGet);
router.get('/prototypes/learner/v10/suggested-learning-hmrc', learnerV10Controller.suggestedAllHMRCGet);
router.get('/prototypes/learner/v10/suggested-learning-hmrc-cols', learnerV10Controller.suggestedAllHMRCColsGet);

// profile
router.get('/prototypes/learner/v10/privacy', learnerV10Controller.privacyGet);

// search
router.get('/prototypes/learner/v10/search', learnerV10Controller.searchGet);
router.post('/prototypes/learner/v10/search', learnerV10Controller.searchPost);

// feedback
router.get('/prototypes/learner/v10/feedback', learnerV10Controller.feedbackGet);
router.post('/prototypes/learner/v10/feedback', learnerV10Controller.feedbackPost);
router.get('/prototypes/learner/v10/feedback/informal', learnerV10Controller.feedbackInformalGet);
router.get('/prototypes/learner/v10/feedback/formal', learnerV10Controller.feedbackFormalGet);

// edit areas of work with levels
router.get('/prototypes/learner/v10/your-profile/area-of-work', learnerV10Controller.areasGet);
router.post('/prototypes/learner/v10/your-profile/area-of-work', learnerV10Controller.areasPost);

router.get('/prototypes/learner/v10/your-profile/area-of-work/levels', learnerV10Controller.areasLevelsGet);
router.post('/prototypes/learner/v10/your-profile/area-of-work/levels', learnerV10Controller.areasLevelsPost);

router.get('/prototypes/learner/v10/your-profile/interests', learnerV10Controller.interestsGet);
router.post('/prototypes/learner/v10/your-profile/interests', learnerV10Controller.interestsPost);

router.get('/prototypes/learner/v10/your-profile/area-of-work/joined-levels', learnerV10Controller.areasJoinedLevelsGet);
router.post('/prototypes/learner/v10/your-profile/area-of-work/joined-levels', learnerV10Controller.areasJoinedLevelsPost);

// As product manager for show and tell
router.get('/prototypes/learner/v10/your-profile/area-of-work/joined-levels-pm', learnerV10Controller.areasJoinedLevelsPMGet);
router.post('/prototypes/learner/v10/your-profile/area-of-work/joined-levels-pm', learnerV10Controller.areasJoinedLevelsPMPost);

router.get('/prototypes/learner/v10/your-profile/other-areas-of-work', learnerV10Controller.otherAreasGet);
router.post('/prototypes/learner/v10/your-profile/other-areas-of-work', learnerV10Controller.otherAreasPost);

// Actions
router.get('/prototypes/learner/v10/actions', learnerV10Controller.actionsGet);
router.post('/prototypes/learner/v10/actions', learnerV10Controller.actionsPost);

//******************************************************
//      Registration stuff
//******************************************************
// registration, email
router.get('/prototypes/learner/v10/registration', learnerV10Controller.registerEmailGet);
router.post('/prototypes/learner/v10/registration', learnerV10Controller.registerEmailPost);
// registration, name
router.get('/prototypes/learner/v10/registration/personal-details', learnerV10Controller.registerPersonalGet);
router.post('/prototypes/learner/v10/registration/personal-details', learnerV10Controller.registerPersonalPost);

// registration, job, part 1, department
router.get('/prototypes/learner/v10/registration/department', learnerV10Controller.registerDepartmentGet);
router.post('/prototypes/learner/v10/registration/department', learnerV10Controller.registerDepartmentPost);
// registration, job, part 2, profession
router.get('/prototypes/learner/v10/registration/area-of-work', learnerV10Controller.registerAreaGet);
router.post('/prototypes/learner/v10/registration/area-of-work', learnerV10Controller.registerAreaPost);
// registration, job, part 3, grade
router.get('/prototypes/learner/v10/registration/grade', learnerV10Controller.registerGradeGet);
router.post('/prototypes/learner/v10/registration/grade', learnerV10Controller.registerGradePost);

// registration, password
router.get('/prototypes/learner/v10/registration/password', learnerV10Controller.registerPasswordGet);
router.post('/prototypes/learner/v10/registration/password', learnerV10Controller.registerPasswordPost);
// registration, review
router.get('/prototypes/learner/v10/registration/review', learnerV10Controller.registerReviewGet);
router.post('/prototypes/learner/v10/registration/review', learnerV10Controller.registerReviewPost);
// registration, complete
router.get('/prototypes/learner/v10/registration/complete', learnerV10Controller.registerCompleteGet);
// router.post('/prototypes/learner/v10/registration/complete', learnerV10Controller.registerCompletePost);

// registration, complete
router.get('/prototypes/learner/v10/resource', learnerV10Controller.resourceGet);
router.post('/prototypes/learner/v10/resource', learnerV10Controller.resourcePost);

//******************************************************
//      Booking stuff
//******************************************************
router.get('/prototypes/learner/v10/booking', learnerV10Controller.bookingDateGet);
router.post('/prototypes/learner/v10/booking', learnerV10Controller.bookingDatePost);
router.get('/prototypes/learner/v10/booking/payment', learnerV10Controller.bookingPaymentGet);
router.post('/prototypes/learner/v10/booking/payment', learnerV10Controller.bookingPaymentPost);
router.get('/prototypes/learner/v10/booking/confirm', learnerV10Controller.bookingConfirmGet);
router.get('/prototypes/learner/v10/booking/complete', learnerV10Controller.bookingCompleteGet);

// Booking elements page in Library
router.get('/prototypes/layouts/booking', learnerV10Controller.bookingPOCGet);

//******************************************************
//      authentication, forgotten/reset/create password etc
//******************************************************
router.get('/prototypes/learner/v10/reset-password', learnerV10Controller.resetPasswordGet);
router.post('/prototypes/learner/v10/reset-password', learnerV10Controller.resetPasswordPost);
router.get('/prototypes/learner/v10/email-sent', learnerV10Controller.emailSentGet);
router.get('/prototypes/learner/v10/enter-new-password', learnerV10Controller.enterNewPasswordGet);
router.post('/prototypes/learner/v10/enter-new-password', learnerV10Controller.enterNewPasswordPost);
router.get('/prototypes/learner/v10/reset-success', learnerV10Controller.resetSuccessGet);

router.get('/prototypes/learner/v10/create-new-password', learnerV10Controller.createNewPasswordGet);
router.post('/prototypes/learner/v10/create-new-password', learnerV10Controller.createNewPasswordPost);
router.get('/prototypes/learner/v10/create-success', learnerV10Controller.createSuccessGet);

// SCORMS fire safety
router.get('/prototypes/learner/v10/scorms/basic-fire-safety', learnerV10Controller.basicFireSafetyGet);
router.post('/prototypes/learner/v10/scorms/basic-fire-safety', learnerV10Controller.basicFireSafetyPost);
// scorm done
router.get('/prototypes/learner/v10/scorms/basic-fire-safety/complete', learnerV10Controller.scormCompleteGet);

//******************************************************
//      admin section
//******************************************************
router.get('/prototypes/learner/v10/admin', learnerV10Controller.adminGet);
router.post('/prototypes/learner/v10/admin', learnerV10Controller.adminPost);

router.get('/prototypes/learner/v10/admin/course-list', learnerV10Controller.adminCourseListGet);
router.post('/prototypes/learner/v10/admin/course-list', learnerV10Controller.adminCourseListPost);

router.get('/prototypes/learner/v10/admin/events-list', learnerV10Controller.adminEventsListGet);
router.post('/prototypes/learner/v10/admin/events-list', learnerV10Controller.adminEventsListPost);

router.get('/prototypes/learner/v10/admin/edit', learnerV10Controller.adminEditGet);
router.post('/prototypes/learner/v10/admin/edit', learnerV10Controller.adminEditPost);
router.get('/prototypes/learner/v10/admin/add', learnerV10Controller.adminAddGet);
router.post('/prototypes/learner/v10/admin/add', learnerV10Controller.adminAddPost);
router.get('/prototypes/learner/v10/admin/add-details', learnerV10Controller.adminAddDetailsGet);
router.post('/prototypes/learner/v10/admin/add-details', learnerV10Controller.adminAddDetailsPost);

router.get('/prototypes/learner/v10/admin/add-assets', learnerV10Controller.adminAddAssetsGet);
router.post('/prototypes/learner/v10/admin/add-assets', learnerV10Controller.adminAddAssetsPost);

router.get('/prototypes/learner/v10/admin/add-review', learnerV10Controller.adminAddReviewGet);
router.post('/prototypes/learner/v10/admin/add-review', learnerV10Controller.adminAddReviewPost);
router.get('/prototypes/learner/v10/admin/add-complete', learnerV10Controller.adminAddCompleteGet);
router.post('/prototypes/learner/v10/admin/add-complete', learnerV10Controller.adminAddCompletePost);

//******************************************************
//
//      v11 end-to-end learner journey custom routes
//
//******************************************************
// learner config

router.get('/prototypes/learner/v11/config', learnerV11Controller.configGet);
router.post('/prototypes/learner/v11/config', learnerV11Controller.configPost);

//******************************************************
//      Various smaller sections
//******************************************************
// start
router.get('/prototypes/learner/v11', learnerV11Controller.indexGet);
router.post('/prototypes/learner/v11', learnerV11Controller.indexPost);
// home
router.get('/prototypes/learner/v11/home', learnerV11Controller.homeGet);
// router.post('/prototypes/learner/v11/home', learnerV11Controller.homePost);

// profile
router.get('/prototypes/learner/v11/your-profile', learnerV11Controller.profileGet);
// planned learning
router.get('/prototypes/learner/v11/learning-plan', learnerV11Controller.plannedGet);
// learning record
router.get('/prototypes/learner/v11/learning-record', learnerV11Controller.recordGet);
// suggested learning
router.get('/prototypes/learner/v11/suggested-learning', learnerV11Controller.suggestedGet);
router.get('/prototypes/learner/v11/suggested-learning-full', learnerV11Controller.suggestedFullGet);
router.get('/prototypes/learner/v11/suggested-learning-all', learnerV11Controller.suggestedAllGet);
router.get('/prototypes/learner/v11/suggested-learning-hmrc', learnerV11Controller.suggestedAllHMRCGet);
router.get('/prototypes/learner/v11/suggested-learning-hmrc-cols', learnerV11Controller.suggestedAllHMRCColsGet);

// profile
router.get('/prototypes/learner/v11/privacy', learnerV11Controller.privacyGet);

// search
router.get('/prototypes/learner/v11/search', learnerV11Controller.searchGet);
router.post('/prototypes/learner/v11/search', learnerV11Controller.searchPost);

// feedback
router.get('/prototypes/learner/v11/feedback', learnerV11Controller.feedbackGet);
router.post('/prototypes/learner/v11/feedback', learnerV11Controller.feedbackPost);
router.get('/prototypes/learner/v11/feedback/informal', learnerV11Controller.feedbackInformalGet);
router.get('/prototypes/learner/v11/feedback/formal', learnerV11Controller.feedbackFormalGet);

// edit areas of work with levels
router.get('/prototypes/learner/v11/your-profile/area-of-work', learnerV11Controller.areasGet);
router.post('/prototypes/learner/v11/your-profile/area-of-work', learnerV11Controller.areasPost);

router.get('/prototypes/learner/v11/your-profile/area-of-work/levels', learnerV11Controller.areasLevelsGet);
router.post('/prototypes/learner/v11/your-profile/area-of-work/levels', learnerV11Controller.areasLevelsPost);

router.get('/prototypes/learner/v11/your-profile/interests', learnerV11Controller.interestsGet);
router.post('/prototypes/learner/v11/your-profile/interests', learnerV11Controller.interestsPost);

router.get('/prototypes/learner/v11/your-profile/area-of-work/joined-levels', learnerV11Controller.areasJoinedLevelsGet);
router.post('/prototypes/learner/v11/your-profile/area-of-work/joined-levels', learnerV11Controller.areasJoinedLevelsPost);

// As product manager for show and tell
router.get('/prototypes/learner/v11/your-profile/area-of-work/joined-levels-pm', learnerV11Controller.areasJoinedLevelsPMGet);
router.post('/prototypes/learner/v11/your-profile/area-of-work/joined-levels-pm', learnerV11Controller.areasJoinedLevelsPMPost);

router.get('/prototypes/learner/v11/your-profile/other-areas-of-work', learnerV11Controller.otherAreasGet);
router.post('/prototypes/learner/v11/your-profile/other-areas-of-work', learnerV11Controller.otherAreasPost);

// Actions
router.get('/prototypes/learner/v11/actions', learnerV11Controller.actionsGet);
router.post('/prototypes/learner/v11/actions', learnerV11Controller.actionsPost);

//******************************************************
//      Registration stuff
//******************************************************
// registration, email
router.get('/prototypes/learner/v11/registration', learnerV11Controller.registerEmailGet);
router.post('/prototypes/learner/v11/registration', learnerV11Controller.registerEmailPost);
// registration, name
router.get('/prototypes/learner/v11/registration/personal-details', learnerV11Controller.registerPersonalGet);
router.post('/prototypes/learner/v11/registration/personal-details', learnerV11Controller.registerPersonalPost);

// registration, job, part 1, department
router.get('/prototypes/learner/v11/registration/department', learnerV11Controller.registerDepartmentGet);
router.post('/prototypes/learner/v11/registration/department', learnerV11Controller.registerDepartmentPost);

// registration, job, part 2, profession
router.get('/prototypes/learner/v11/registration/area-of-work', learnerV11Controller.registerAreaGet);
router.post('/prototypes/learner/v11/registration/area-of-work', learnerV11Controller.registerAreaPost);

router.get('/prototypes/learner/v11/registration/area-of-work/details', learnerV11Controller.registerAreaDetailsGet);
router.post('/prototypes/learner/v11/registration/area-of-work/details', learnerV11Controller.registerAreaDetailsPost);

router.get('/prototypes/learner/v11/registration/other-areas', learnerV11Controller.registerOtherAreasGet);
router.post('/prototypes/learner/v11/registration/other-areas', learnerV11Controller.registerOtherAreasPost);

// registration, job, part 3, grade
router.get('/prototypes/learner/v11/registration/grade', learnerV11Controller.registerGradeGet);
router.post('/prototypes/learner/v11/registration/grade', learnerV11Controller.registerGradePost);

// registration, job, part 3, interests
router.get('/prototypes/learner/v11/registration/interests', learnerV11Controller.registerInterestsGet);
router.post('/prototypes/learner/v11/registration/interests', learnerV11Controller.registerInterestsPost);

// registration, password
router.get('/prototypes/learner/v11/registration/password', learnerV11Controller.registerPasswordGet);
router.post('/prototypes/learner/v11/registration/password', learnerV11Controller.registerPasswordPost);
// registration, review
router.get('/prototypes/learner/v11/registration/review', learnerV11Controller.registerReviewGet);
router.post('/prototypes/learner/v11/registration/review', learnerV11Controller.registerReviewPost);
// registration, complete
router.get('/prototypes/learner/v11/registration/complete', learnerV11Controller.registerCompleteGet);
// router.post('/prototypes/learner/v11/registration/complete', learnerV11Controller.registerCompletePost);

// registration, complete
router.get('/prototypes/learner/v11/resource', learnerV11Controller.resourceGet);
router.post('/prototypes/learner/v11/resource', learnerV11Controller.resourcePost);

//******************************************************
//      Booking stuff
//******************************************************
router.get('/prototypes/learner/v11/booking', learnerV11Controller.bookingDateGet);
router.post('/prototypes/learner/v11/booking', learnerV11Controller.bookingDatePost);
router.get('/prototypes/learner/v11/booking/payment', learnerV11Controller.bookingPaymentGet);
router.post('/prototypes/learner/v11/booking/payment', learnerV11Controller.bookingPaymentPost);
router.get('/prototypes/learner/v11/booking/confirm', learnerV11Controller.bookingConfirmGet);
router.get('/prototypes/learner/v11/booking/complete', learnerV11Controller.bookingCompleteGet);

// Booking elements page in Library
router.get('/prototypes/layouts/booking', learnerV11Controller.bookingPOCGet);

//******************************************************
//      authentication, forgotten/reset/create password etc
//******************************************************
router.get('/prototypes/learner/v11/reset-password', learnerV11Controller.resetPasswordGet);
router.post('/prototypes/learner/v11/reset-password', learnerV11Controller.resetPasswordPost);
router.get('/prototypes/learner/v11/email-sent', learnerV11Controller.emailSentGet);
router.get('/prototypes/learner/v11/enter-new-password', learnerV11Controller.enterNewPasswordGet);
router.post('/prototypes/learner/v11/enter-new-password', learnerV11Controller.enterNewPasswordPost);
router.get('/prototypes/learner/v11/reset-success', learnerV11Controller.resetSuccessGet);

router.get('/prototypes/learner/v11/create-new-password', learnerV11Controller.createNewPasswordGet);
router.post('/prototypes/learner/v11/create-new-password', learnerV11Controller.createNewPasswordPost);
router.get('/prototypes/learner/v11/create-success', learnerV11Controller.createSuccessGet);

// SCORMS fire safety
router.get('/prototypes/learner/v11/scorms/basic-fire-safety', learnerV11Controller.basicFireSafetyGet);
router.post('/prototypes/learner/v11/scorms/basic-fire-safety', learnerV11Controller.basicFireSafetyPost);
// scorm done
router.get('/prototypes/learner/v11/scorms/basic-fire-safety/complete', learnerV11Controller.scormCompleteGet);

//******************************************************
//      admin section
//******************************************************
router.get('/prototypes/learner/v11/admin', learnerV11Controller.adminGet);
router.post('/prototypes/learner/v11/admin', learnerV11Controller.adminPost);

router.get('/prototypes/learner/v11/admin/course-list', learnerV11Controller.adminCourseListGet);
router.post('/prototypes/learner/v11/admin/course-list', learnerV11Controller.adminCourseListPost);

router.get('/prototypes/learner/v11/admin/events-list', learnerV11Controller.adminEventsListGet);
router.post('/prototypes/learner/v11/admin/events-list', learnerV11Controller.adminEventsListPost);

router.get('/prototypes/learner/v11/admin/edit', learnerV11Controller.adminEditGet);
router.post('/prototypes/learner/v11/admin/edit', learnerV11Controller.adminEditPost);
router.get('/prototypes/learner/v11/admin/add', learnerV11Controller.adminAddGet);
router.post('/prototypes/learner/v11/admin/add', learnerV11Controller.adminAddPost);
router.get('/prototypes/learner/v11/admin/add-details', learnerV11Controller.adminAddDetailsGet);
router.post('/prototypes/learner/v11/admin/add-details', learnerV11Controller.adminAddDetailsPost);

router.get('/prototypes/learner/v11/admin/add-assets', learnerV11Controller.adminAddAssetsGet);
router.post('/prototypes/learner/v11/admin/add-assets', learnerV11Controller.adminAddAssetsPost);

router.get('/prototypes/learner/v11/admin/add-review', learnerV11Controller.adminAddReviewGet);
router.post('/prototypes/learner/v11/admin/add-review', learnerV11Controller.adminAddReviewPost);
router.get('/prototypes/learner/v11/admin/add-complete', learnerV11Controller.adminAddCompleteGet);
router.post('/prototypes/learner/v11/admin/add-complete', learnerV11Controller.adminAddCompletePost);

//******************************************************
//
//      v12 end-to-end learner journey custom routes
//
//******************************************************
// learner config

router.get('/prototypes/learner/v12/config', learnerV12Controller.configGet);
router.post('/prototypes/learner/v12/config', learnerV12Controller.configPost);

//******************************************************
//      Various smaller sections
//******************************************************
// start
router.get('/prototypes/learner/v12', learnerV12Controller.indexGet);
router.post('/prototypes/learner/v12', learnerV12Controller.indexPost);
// home
router.get('/prototypes/learner/v12/home', learnerV12Controller.homeGet);
// router.post('/prototypes/learner/v12/home', learnerV12Controller.homePost);

// profile
router.get('/prototypes/learner/v12/your-profile', learnerV12Controller.profileGet);
// planned learning
router.get('/prototypes/learner/v12/learning-plan', learnerV12Controller.plannedGet);
// learning record
router.get('/prototypes/learner/v12/learning-record', learnerV12Controller.recordGet);
// suggested learning
router.get('/prototypes/learner/v12/suggested-learning', learnerV12Controller.suggestedGet);
router.get('/prototypes/learner/v12/suggested-learning-full', learnerV12Controller.suggestedFullGet);
router.get('/prototypes/learner/v12/suggested-learning-all', learnerV12Controller.suggestedAllGet);
router.get('/prototypes/learner/v12/suggested-learning-hmrc', learnerV12Controller.suggestedAllHMRCGet);
router.get('/prototypes/learner/v12/suggested-learning-hmrc-cols', learnerV12Controller.suggestedAllHMRCColsGet);

// profile
router.get('/prototypes/learner/v12/privacy', learnerV12Controller.privacyGet);

// search
router.get('/prototypes/learner/v12/search', learnerV12Controller.searchGet);
router.post('/prototypes/learner/v12/search', learnerV12Controller.searchPost);

// feedback
router.get('/prototypes/learner/v12/feedback', learnerV12Controller.feedbackGet);
router.post('/prototypes/learner/v12/feedback', learnerV12Controller.feedbackPost);
router.get('/prototypes/learner/v12/feedback/informal', learnerV12Controller.feedbackInformalGet);
router.get('/prototypes/learner/v12/feedback/formal', learnerV12Controller.feedbackFormalGet);

// edit areas of work with levels
router.get('/prototypes/learner/v12/your-profile/area-of-work', learnerV12Controller.areasGet);
router.post('/prototypes/learner/v12/your-profile/area-of-work', learnerV12Controller.areasPost);

router.get('/prototypes/learner/v12/your-profile/area-of-work/levels', learnerV12Controller.areasLevelsGet);
router.post('/prototypes/learner/v12/your-profile/area-of-work/levels', learnerV12Controller.areasLevelsPost);

router.get('/prototypes/learner/v12/your-profile/interests', learnerV12Controller.interestsGet);
router.post('/prototypes/learner/v12/your-profile/interests', learnerV12Controller.interestsPost);

router.get('/prototypes/learner/v12/your-profile/area-of-work/joined-levels', learnerV12Controller.areasJoinedLevelsGet);
router.post('/prototypes/learner/v12/your-profile/area-of-work/joined-levels', learnerV12Controller.areasJoinedLevelsPost);

// As product manager for show and tell
router.get('/prototypes/learner/v12/your-profile/area-of-work/joined-levels-pm', learnerV12Controller.areasJoinedLevelsPMGet);
router.post('/prototypes/learner/v12/your-profile/area-of-work/joined-levels-pm', learnerV12Controller.areasJoinedLevelsPMPost);

router.get('/prototypes/learner/v12/your-profile/other-areas-of-work', learnerV12Controller.otherAreasGet);
router.post('/prototypes/learner/v12/your-profile/other-areas-of-work', learnerV12Controller.otherAreasPost);

// Actions
router.get('/prototypes/learner/v12/actions', learnerV12Controller.actionsGet);
router.post('/prototypes/learner/v12/actions', learnerV12Controller.actionsPost);

//******************************************************
//      New profile stuff
//******************************************************
// name
router.get('/prototypes/learner/v12/your-profile/name', learnerV12Controller.profileNameGet);
router.post('/prototypes/learner/v12/your-profile/name', learnerV12Controller.profileNamePost);
// email
router.get('/prototypes/learner/v12/your-profile/email', learnerV12Controller.profileEmailGet);
router.post('/prototypes/learner/v12/your-profile/email', learnerV12Controller.profileEmailPost);
// password
router.get('/prototypes/learner/v12/your-profile/password', learnerV12Controller.profilePasswordGet);
router.post('/prototypes/learner/v12/your-profile/password', learnerV12Controller.profilePasswordPost);
// organisation
router.get('/prototypes/learner/v12/your-profile/organisation', learnerV12Controller.profileOrganisationGet);
router.post('/prototypes/learner/v12/your-profile/organisation', learnerV12Controller.profileOrganistionPost);
// organisation /sub-divisions
router.get('/prototypes/learner/v12/your-profile/organisation/sub-divisions', learnerV12Controller.profileOrganisationSubDivisionsGet);
router.post('/prototypes/learner/v12/your-profile/organisation/sub-divisions', learnerV12Controller.profileOrganisationSubDivisionsPost);
// primary
router.get('/prototypes/learner/v12/your-profile/primary', learnerV12Controller.profilePrimaryGet);
router.post('/prototypes/learner/v12/your-profile/primary', learnerV12Controller.profilePrimaryPost);
// primary, ops del
router.get('/prototypes/learner/v12/your-profile/primary/operational-delivery', learnerV12Controller.profilePrimaryOpsDelGet);
router.post('/prototypes/learner/v12/your-profile/primary/operational-delivery', learnerV12Controller.profilePrimaryOpsDelPost);
// other areas
router.get('/prototypes/learner/v12/your-profile/other-areas', learnerV12Controller.profileOthersGet);
router.post('/prototypes/learner/v12/your-profile/other-areas', learnerV12Controller.profileOthersPost);
// interests
router.get('/prototypes/learner/v12/your-profile/core-interests', learnerV12Controller.profileInterestsGet);
router.post('/prototypes/learner/v12/your-profile/core-interests', learnerV12Controller.profileInterestsPost);
// Grade
router.get('/prototypes/learner/v12/your-profile/grade', learnerV12Controller.profileGradeGet);
router.post('/prototypes/learner/v12/your-profile/grade', learnerV12Controller.profileGradePost);

//******************************************************
//      Registration stuff
//******************************************************
// registration, email
router.get('/prototypes/learner/v12/registration', learnerV12Controller.registerEmailGet);
router.post('/prototypes/learner/v12/registration', learnerV12Controller.registerEmailPost);
// registration, name
router.get('/prototypes/learner/v12/registration/personal-details', learnerV12Controller.registerPersonalGet);
router.post('/prototypes/learner/v12/registration/personal-details', learnerV12Controller.registerPersonalPost);

// registration, job, part 1, department
router.get('/prototypes/learner/v12/registration/department', learnerV12Controller.registerDepartmentGet);
router.post('/prototypes/learner/v12/registration/department', learnerV12Controller.registerDepartmentPost);

// registration, job, part 2, profession
router.get('/prototypes/learner/v12/registration/area-of-work', learnerV12Controller.registerAreaGet);
router.post('/prototypes/learner/v12/registration/area-of-work', learnerV12Controller.registerAreaPost);

router.get('/prototypes/learner/v12/registration/area-of-work/details', learnerV12Controller.registerAreaDetailsGet);
router.post('/prototypes/learner/v12/registration/area-of-work/details', learnerV12Controller.registerAreaDetailsPost);

router.get('/prototypes/learner/v12/registration/other-areas', learnerV12Controller.registerOtherAreasGet);
router.post('/prototypes/learner/v12/registration/other-areas', learnerV12Controller.registerOtherAreasPost);

// registration, job, part 3, grade
router.get('/prototypes/learner/v12/registration/grade', learnerV12Controller.registerGradeGet);
router.post('/prototypes/learner/v12/registration/grade', learnerV12Controller.registerGradePost);

// registration, job, part 3, interests
router.get('/prototypes/learner/v12/registration/interests', learnerV12Controller.registerInterestsGet);
router.post('/prototypes/learner/v12/registration/interests', learnerV12Controller.registerInterestsPost);

// registration, password
router.get('/prototypes/learner/v12/registration/password', learnerV12Controller.registerPasswordGet);
router.post('/prototypes/learner/v12/registration/password', learnerV12Controller.registerPasswordPost);
// registration, review
router.get('/prototypes/learner/v12/registration/review', learnerV12Controller.registerReviewGet);
router.post('/prototypes/learner/v12/registration/review', learnerV12Controller.registerReviewPost);
// registration, complete
router.get('/prototypes/learner/v12/registration/complete', learnerV12Controller.registerCompleteGet);
// router.post('/prototypes/learner/v12/registration/complete', learnerV12Controller.registerCompletePost);

// registration, complete
router.get('/prototypes/learner/v12/resource', learnerV12Controller.resourceGet);
router.post('/prototypes/learner/v12/resource', learnerV12Controller.resourcePost);

//******************************************************
//      Booking stuff
//******************************************************
router.get('/prototypes/learner/v12/booking', learnerV12Controller.bookingDateGet);
router.post('/prototypes/learner/v12/booking', learnerV12Controller.bookingDatePost);
router.get('/prototypes/learner/v12/booking/payment', learnerV12Controller.bookingPaymentGet);
router.post('/prototypes/learner/v12/booking/payment', learnerV12Controller.bookingPaymentPost);
router.get('/prototypes/learner/v12/booking/confirm', learnerV12Controller.bookingConfirmGet);
router.get('/prototypes/learner/v12/booking/complete', learnerV12Controller.bookingCompleteGet);

// Booking elements page in Library
router.get('/prototypes/layouts/booking', learnerV12Controller.bookingPOCGet);

//******************************************************
//      authentication, forgotten/reset/create password etc
//******************************************************
router.get('/prototypes/learner/v12/reset-password', learnerV12Controller.resetPasswordGet);
router.post('/prototypes/learner/v12/reset-password', learnerV12Controller.resetPasswordPost);
router.get('/prototypes/learner/v12/email-sent', learnerV12Controller.emailSentGet);
router.get('/prototypes/learner/v12/enter-new-password', learnerV12Controller.enterNewPasswordGet);
router.post('/prototypes/learner/v12/enter-new-password', learnerV12Controller.enterNewPasswordPost);
router.get('/prototypes/learner/v12/reset-success', learnerV12Controller.resetSuccessGet);

router.get('/prototypes/learner/v12/create-new-password', learnerV12Controller.createNewPasswordGet);
router.post('/prototypes/learner/v12/create-new-password', learnerV12Controller.createNewPasswordPost);
router.get('/prototypes/learner/v12/create-success', learnerV12Controller.createSuccessGet);

// SCORMS fire safety
router.get('/prototypes/learner/v12/scorms/basic-fire-safety', learnerV12Controller.basicFireSafetyGet);
router.post('/prototypes/learner/v12/scorms/basic-fire-safety', learnerV12Controller.basicFireSafetyPost);
// scorm done
router.get('/prototypes/learner/v12/scorms/basic-fire-safety/complete', learnerV12Controller.scormCompleteGet);

//******************************************************
//      admin section
//******************************************************
router.get('/prototypes/learner/v12/admin', learnerV12Controller.adminGet);
router.post('/prototypes/learner/v12/admin', learnerV12Controller.adminPost);

router.get('/prototypes/learner/v12/admin/course-list', learnerV12Controller.adminCourseListGet);
router.post('/prototypes/learner/v12/admin/course-list', learnerV12Controller.adminCourseListPost);

router.get('/prototypes/learner/v12/admin/events-list', learnerV12Controller.adminEventsListGet);
router.post('/prototypes/learner/v12/admin/events-list', learnerV12Controller.adminEventsListPost);

router.get('/prototypes/learner/v12/admin/edit', learnerV12Controller.adminEditGet);
router.post('/prototypes/learner/v12/admin/edit', learnerV12Controller.adminEditPost);
router.get('/prototypes/learner/v12/admin/add', learnerV12Controller.adminAddGet);
router.post('/prototypes/learner/v12/admin/add', learnerV12Controller.adminAddPost);
router.get('/prototypes/learner/v12/admin/add-details', learnerV12Controller.adminAddDetailsGet);
router.post('/prototypes/learner/v12/admin/add-details', learnerV12Controller.adminAddDetailsPost);

router.get('/prototypes/learner/v12/admin/add-assets', learnerV12Controller.adminAddAssetsGet);
router.post('/prototypes/learner/v12/admin/add-assets', learnerV12Controller.adminAddAssetsPost);

router.get('/prototypes/learner/v12/admin/add-review', learnerV12Controller.adminAddReviewGet);
router.post('/prototypes/learner/v12/admin/add-review', learnerV12Controller.adminAddReviewPost);
router.get('/prototypes/learner/v12/admin/add-complete', learnerV12Controller.adminAddCompleteGet);
router.post('/prototypes/learner/v12/admin/add-complete', learnerV12Controller.adminAddCompletePost);

//******************************************************
//      drop down test
//******************************************************
router.get('/prototypes/learner/v12/selectas/radios', learnerV12Controller.selectaTestRadiosGet);
router.get('/prototypes/learner/v12/selectas/select', learnerV12Controller.selectaTestSelectGet);
router.get('/prototypes/learner/v12/selectas/typeahead', learnerV12Controller.selectaTestTypeaheadGet);
router.get('/prototypes/learner/v12/selectas/all', learnerV12Controller.selectaTestMegaListGet);

// Create route from view path
router.get('*', miscController.viewFileRoute);

const allRoutes = exports.allRoutes = router;