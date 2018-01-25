import { Router } from 'express';

import * as mainController from './../controllers/main.controller';
import * as miscController from './../controllers/misc.controller';
import * as recallsController from './../controllers/api/v1/recalls.controller';
import * as testFormController from './../controllers/test-form.controller';

const router = Router();

// Misc routes
router.get('/robots.txt', mainController.robots);
router.get('/', mainController.index);

// API Routes
router.post('/api/v1/recalls', recallsController.recalls);

// Test form
router.get('/test-form', testFormController.getTestForm);
router.post('/test-form', testFormController.postTestForm);
router.get('/test-form/success-message', testFormController.getTestFormSuccessMessage);

// Create route from view path
router.get('*', miscController.viewFileRoute);

export const allRoutes = router;
