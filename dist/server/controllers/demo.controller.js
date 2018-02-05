'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.indexGet = indexGet;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _constants = require('./../config/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function indexGet(req, res) {
  // return res.render('protoypes/index', '.path/to/data/if/required');
  // return res.render('demo/index', { loggedOut: false });
  return res.render('demo/index', {
    testing: 'test'
  });
}