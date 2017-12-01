import { Router } from 'express';

import * as mainController from './../controllers/main.controller';
import * as miscController from './../controllers/misc.controller';
import * as recallsAPIController from './../controllers/api/v1/recalls.controller';
import * as ajaxBrowseAPIController from './../controllers/api/v1/ajax-browse.controller';

const router = Router();

// Misc routes
router.get('/robots.txt', mainController.robots);
router.get('/', mainController.index);

// API Routes
router.post('/api/v1/recalls', recallsAPIController.recalls);
router.post('/api/v1/ajax-browse', ajaxBrowseAPIController.getItems);

// Create route from view path
router.get('*', miscController.viewFileRoute);

export const allRoutes = router;
