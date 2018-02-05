import { Router } from 'express';

import * as mainController from './../controllers/main.controller';
import * as miscController from './../controllers/misc.controller';
import * as recallsController from './../controllers/api/v1/recalls.controller';
import * as demoController from './../controllers/demo.controller';

const router = Router();

// Misc routes
router.get('/robots.txt', mainController.robots);
router.get('/', mainController.index);

// API Routes
router.post('/api/v1/recalls', recallsController.recalls);

// custom routes
router.get('/demo', demoController.indexGet);
router.post('/demo', demoController.indexPost);

router.get('/demo/address', demoController.addressGet);
router.post('/demo/address', demoController.addressPost);

router.get('/demo/contact', demoController.contactGet);
router.post('/demo/contact', demoController.contactPost);

router.get('/demo/summary', demoController.summaryGet);
router.post('/demo/summary', demoController.summaryPost);

router.get('/demo/finished', demoController.finishedGet);

// Create route from view path
router.get('*', miscController.viewFileRoute);

export const allRoutes = router;
