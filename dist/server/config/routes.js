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

var _demo = require('./../controllers/demo.controller');

var demoController = _interopRequireWildcard(_demo);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const router = (0, _express.Router)();

// Misc routes
router.get('/robots.txt', mainController.robots);
router.get('/', mainController.index);

// API Routes
router.post('/api/v1/recalls', recallsController.recalls);

// custom routes
router.get('/demo', demoController.indexGet);

// Create route from view path
router.get('*', miscController.viewFileRoute);

const allRoutes = exports.allRoutes = router;