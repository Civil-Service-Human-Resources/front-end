//******************************************************
//
//      v12 end-to-end learner journey custom routes
//
//******************************************************
// learner config

import * as learnerV12Controller from '../controllers/learnerV12';

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
