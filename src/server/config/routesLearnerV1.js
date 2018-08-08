//******************************************************
//
//      v11 end-to-end learner journey custom routes
//
//******************************************************
// learner config

import * as learnerV11Controller from '../controllers/learnerV11';

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
// registration, job, part 3, grade
router.get('/prototypes/learner/v11/registration/grade', learnerV11Controller.registerGradeGet);
router.post('/prototypes/learner/v11/registration/grade', learnerV11Controller.registerGradePost);

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
