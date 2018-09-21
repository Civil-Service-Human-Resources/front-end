'use strict';

var _learnerV = require('../controllers/learnerV13');

var learnerV13Controller = _interopRequireWildcard(_learnerV);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

router.get('/prototypes/learner/v13/config', learnerV13Controller.configGet); //******************************************************
//
//      v13 end-to-end learner journey custom routes
//
//******************************************************
// learner config

router.post('/prototypes/learner/v13/config', learnerV13Controller.configPost);

//******************************************************
//      Various smaller sections
//******************************************************
// start
router.get('/prototypes/learner/v13', learnerV13Controller.indexGet);
router.post('/prototypes/learner/v13', learnerV13Controller.indexPost);
// home
router.get('/prototypes/learner/v13/home', learnerV13Controller.homeGet);
// router.post('/prototypes/learner/v13/home', learnerV13Controller.homePost);

// profile
router.get('/prototypes/learner/v13/your-profile', learnerV13Controller.profileGet);
// planned learning
router.get('/prototypes/learner/v13/learning-plan', learnerV13Controller.plannedGet);
// learning record
router.get('/prototypes/learner/v13/learning-record', learnerV13Controller.recordGet);
// suggested learning
router.get('/prototypes/learner/v13/suggested-learning', learnerV13Controller.suggestedGet);
router.get('/prototypes/learner/v13/suggested-learning-full', learnerV13Controller.suggestedFullGet);
router.get('/prototypes/learner/v13/suggested-learning-all', learnerV13Controller.suggestedAllGet);
router.get('/prototypes/learner/v13/suggested-learning-hmrc', learnerV13Controller.suggestedAllHMRCGet);
router.get('/prototypes/learner/v13/suggested-learning-hmrc-cols', learnerV13Controller.suggestedAllHMRCColsGet);

// profile
router.get('/prototypes/learner/v13/privacy', learnerV13Controller.privacyGet);

// search
router.get('/prototypes/learner/v13/search', learnerV13Controller.searchGet);
router.post('/prototypes/learner/v13/search', learnerV13Controller.searchPost);

// feedback
router.get('/prototypes/learner/v13/feedback', learnerV13Controller.feedbackGet);
router.post('/prototypes/learner/v13/feedback', learnerV13Controller.feedbackPost);
router.get('/prototypes/learner/v13/feedback/informal', learnerV13Controller.feedbackInformalGet);
router.get('/prototypes/learner/v13/feedback/formal', learnerV13Controller.feedbackFormalGet);

// edit areas of work with levels
router.get('/prototypes/learner/v13/your-profile/area-of-work', learnerV13Controller.areasGet);
router.post('/prototypes/learner/v13/your-profile/area-of-work', learnerV13Controller.areasPost);

router.get('/prototypes/learner/v13/your-profile/area-of-work/levels', learnerV13Controller.areasLevelsGet);
router.post('/prototypes/learner/v13/your-profile/area-of-work/levels', learnerV13Controller.areasLevelsPost);

router.get('/prototypes/learner/v13/your-profile/interests', learnerV13Controller.interestsGet);
router.post('/prototypes/learner/v13/your-profile/interests', learnerV13Controller.interestsPost);

router.get('/prototypes/learner/v13/your-profile/area-of-work/joined-levels', learnerV13Controller.areasJoinedLevelsGet);
router.post('/prototypes/learner/v13/your-profile/area-of-work/joined-levels', learnerV13Controller.areasJoinedLevelsPost);

// As product manager for show and tell
router.get('/prototypes/learner/v13/your-profile/area-of-work/joined-levels-pm', learnerV13Controller.areasJoinedLevelsPMGet);
router.post('/prototypes/learner/v13/your-profile/area-of-work/joined-levels-pm', learnerV13Controller.areasJoinedLevelsPMPost);

router.get('/prototypes/learner/v13/your-profile/other-areas-of-work', learnerV13Controller.otherAreasGet);
router.post('/prototypes/learner/v13/your-profile/other-areas-of-work', learnerV13Controller.otherAreasPost);

// Actions
router.get('/prototypes/learner/v13/actions', learnerV13Controller.actionsGet);
router.post('/prototypes/learner/v13/actions', learnerV13Controller.actionsPost);

//******************************************************
//      New profile stuff
//******************************************************
// name
router.get('/prototypes/learner/v13/your-profile/name', learnerV13Controller.profileNameGet);
router.post('/prototypes/learner/v13/your-profile/name', learnerV13Controller.profileNamePost);
// email
router.get('/prototypes/learner/v13/your-profile/email', learnerV13Controller.profileEmailGet);
router.post('/prototypes/learner/v13/your-profile/email', learnerV13Controller.profileEmailPost);
// password
router.get('/prototypes/learner/v13/your-profile/password', learnerV13Controller.profilePasswordGet);
router.post('/prototypes/learner/v13/your-profile/password', learnerV13Controller.profilePasswordPost);
// organisation
router.get('/prototypes/learner/v13/your-profile/organisation', learnerV13Controller.profileOrganisationGet);
router.post('/prototypes/learner/v13/your-profile/organisation', learnerV13Controller.profileOrganistionPost);
// organisation /sub-divisions
router.get('/prototypes/learner/v13/your-profile/organisation/sub-divisions', learnerV13Controller.profileOrganisationSubDivisionsGet);
router.post('/prototypes/learner/v13/your-profile/organisation/sub-divisions', learnerV13Controller.profileOrganisationSubDivisionsPost);
// primary
router.get('/prototypes/learner/v13/your-profile/primary', learnerV13Controller.profilePrimaryGet);
router.post('/prototypes/learner/v13/your-profile/primary', learnerV13Controller.profilePrimaryPost);
// primary, ops del
router.get('/prototypes/learner/v13/your-profile/primary/operational-delivery', learnerV13Controller.profilePrimaryOpsDelGet);
router.post('/prototypes/learner/v13/your-profile/primary/operational-delivery', learnerV13Controller.profilePrimaryOpsDelPost);
// other areas
router.get('/prototypes/learner/v13/your-profile/other-areas', learnerV13Controller.profileOthersGet);
router.post('/prototypes/learner/v13/your-profile/other-areas', learnerV13Controller.profileOthersPost);
// interests
router.get('/prototypes/learner/v13/your-profile/core-interests', learnerV13Controller.profileInterestsGet);
router.post('/prototypes/learner/v13/your-profile/core-interests', learnerV13Controller.profileInterestsPost);
// Grade
router.get('/prototypes/learner/v13/your-profile/grade', learnerV13Controller.profileGradeGet);
router.post('/prototypes/learner/v13/your-profile/grade', learnerV13Controller.profileGradePost);

//******************************************************
//      Registration stuff
//******************************************************
// registration, email
router.get('/prototypes/learner/v13/registration', learnerV13Controller.registerEmailGet);
router.post('/prototypes/learner/v13/registration', learnerV13Controller.registerEmailPost);
// registration, name
router.get('/prototypes/learner/v13/registration/personal-details', learnerV13Controller.registerPersonalGet);
router.post('/prototypes/learner/v13/registration/personal-details', learnerV13Controller.registerPersonalPost);

// registration, job, part 1, department
router.get('/prototypes/learner/v13/registration/department', learnerV13Controller.registerDepartmentGet);
router.post('/prototypes/learner/v13/registration/department', learnerV13Controller.registerDepartmentPost);

// registration, job, part 2, profession
router.get('/prototypes/learner/v13/registration/area-of-work', learnerV13Controller.registerAreaGet);
router.post('/prototypes/learner/v13/registration/area-of-work', learnerV13Controller.registerAreaPost);

router.get('/prototypes/learner/v13/registration/area-of-work/details', learnerV13Controller.registerAreaDetailsGet);
router.post('/prototypes/learner/v13/registration/area-of-work/details', learnerV13Controller.registerAreaDetailsPost);

router.get('/prototypes/learner/v13/registration/other-areas', learnerV13Controller.registerOtherAreasGet);
router.post('/prototypes/learner/v13/registration/other-areas', learnerV13Controller.registerOtherAreasPost);

// registration, job, part 3, grade
router.get('/prototypes/learner/v13/registration/grade', learnerV13Controller.registerGradeGet);
router.post('/prototypes/learner/v13/registration/grade', learnerV13Controller.registerGradePost);

// registration, job, part 3, interests
router.get('/prototypes/learner/v13/registration/interests', learnerV13Controller.registerInterestsGet);
router.post('/prototypes/learner/v13/registration/interests', learnerV13Controller.registerInterestsPost);

// registration, password
router.get('/prototypes/learner/v13/registration/password', learnerV13Controller.registerPasswordGet);
router.post('/prototypes/learner/v13/registration/password', learnerV13Controller.registerPasswordPost);
// registration, review
router.get('/prototypes/learner/v13/registration/review', learnerV13Controller.registerReviewGet);
router.post('/prototypes/learner/v13/registration/review', learnerV13Controller.registerReviewPost);
// registration, complete
router.get('/prototypes/learner/v13/registration/complete', learnerV13Controller.registerCompleteGet);
// router.post('/prototypes/learner/v13/registration/complete', learnerV13Controller.registerCompletePost);

// registration, complete
router.get('/prototypes/learner/v13/resource', learnerV13Controller.resourceGet);
router.post('/prototypes/learner/v13/resource', learnerV13Controller.resourcePost);

//******************************************************
//      Booking stuff
//******************************************************
router.get('/prototypes/learner/v13/booking', learnerV13Controller.bookingDateGet);
router.post('/prototypes/learner/v13/booking', learnerV13Controller.bookingDatePost);
router.get('/prototypes/learner/v13/booking/payment', learnerV13Controller.bookingPaymentGet);
router.post('/prototypes/learner/v13/booking/payment', learnerV13Controller.bookingPaymentPost);
router.get('/prototypes/learner/v13/booking/confirm', learnerV13Controller.bookingConfirmGet);
router.get('/prototypes/learner/v13/booking/complete', learnerV13Controller.bookingCompleteGet);

// Booking elements page in Library
router.get('/prototypes/layouts/booking', learnerV13Controller.bookingPOCGet);

//******************************************************
//      authentication, forgotten/reset/create password etc
//******************************************************
router.get('/prototypes/learner/v13/reset-password', learnerV13Controller.resetPasswordGet);
router.post('/prototypes/learner/v13/reset-password', learnerV13Controller.resetPasswordPost);
router.get('/prototypes/learner/v13/email-sent', learnerV13Controller.emailSentGet);
router.get('/prototypes/learner/v13/enter-new-password', learnerV13Controller.enterNewPasswordGet);
router.post('/prototypes/learner/v13/enter-new-password', learnerV13Controller.enterNewPasswordPost);
router.get('/prototypes/learner/v13/reset-success', learnerV13Controller.resetSuccessGet);

router.get('/prototypes/learner/v13/create-new-password', learnerV13Controller.createNewPasswordGet);
router.post('/prototypes/learner/v13/create-new-password', learnerV13Controller.createNewPasswordPost);
router.get('/prototypes/learner/v13/create-success', learnerV13Controller.createSuccessGet);

// SCORMS fire safety
router.get('/prototypes/learner/v13/scorms/basic-fire-safety', learnerV13Controller.basicFireSafetyGet);
router.post('/prototypes/learner/v13/scorms/basic-fire-safety', learnerV13Controller.basicFireSafetyPost);
// scorm done
router.get('/prototypes/learner/v13/scorms/basic-fire-safety/complete', learnerV13Controller.scormCompleteGet);

//******************************************************
//      admin section
//******************************************************
router.get('/prototypes/learner/v13/admin', learnerV13Controller.adminGet);
router.post('/prototypes/learner/v13/admin', learnerV13Controller.adminPost);

router.get('/prototypes/learner/v13/admin/course-list', learnerV13Controller.adminCourseListGet);
router.post('/prototypes/learner/v13/admin/course-list', learnerV13Controller.adminCourseListPost);

router.get('/prototypes/learner/v13/admin/events-list', learnerV13Controller.adminEventsListGet);
router.post('/prototypes/learner/v13/admin/events-list', learnerV13Controller.adminEventsListPost);

router.get('/prototypes/learner/v13/admin/edit', learnerV13Controller.adminEditGet);
router.post('/prototypes/learner/v13/admin/edit', learnerV13Controller.adminEditPost);
router.get('/prototypes/learner/v13/admin/add', learnerV13Controller.adminAddGet);
router.post('/prototypes/learner/v13/admin/add', learnerV13Controller.adminAddPost);
router.get('/prototypes/learner/v13/admin/add-details', learnerV13Controller.adminAddDetailsGet);
router.post('/prototypes/learner/v13/admin/add-details', learnerV13Controller.adminAddDetailsPost);

router.get('/prototypes/learner/v13/admin/add-assets', learnerV13Controller.adminAddAssetsGet);
router.post('/prototypes/learner/v13/admin/add-assets', learnerV13Controller.adminAddAssetsPost);

router.get('/prototypes/learner/v13/admin/add-review', learnerV13Controller.adminAddReviewGet);
router.post('/prototypes/learner/v13/admin/add-review', learnerV13Controller.adminAddReviewPost);
router.get('/prototypes/learner/v13/admin/add-complete', learnerV13Controller.adminAddCompleteGet);
router.post('/prototypes/learner/v13/admin/add-complete', learnerV13Controller.adminAddCompletePost);

//******************************************************
//      drop down test
//******************************************************
router.get('/prototypes/learner/v13/selectas/radios', learnerV13Controller.selectaTestRadiosGet);
router.get('/prototypes/learner/v13/selectas/select', learnerV13Controller.selectaTestSelectGet);
router.get('/prototypes/learner/v13/selectas/typeahead', learnerV13Controller.selectaTestTypeaheadGet);
router.get('/prototypes/learner/v13/selectas/all', learnerV13Controller.selectaTestMegaListGet);