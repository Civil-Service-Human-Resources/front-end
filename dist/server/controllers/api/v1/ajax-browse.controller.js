'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItems = undefined;

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const delay = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
};

const getItems = exports.getItems = (() => {
  var _ref = _asyncToGenerator(function* (req, res) {
    yield delay();

    res.json({
      items: [{
        href: '#',
        heading: _faker2.default.random.words(3),
        description: _faker2.default.random.words(15),
        endOfTree: false
      }, {
        href: '#',
        heading: _faker2.default.random.words(3),
        description: _faker2.default.random.words(15),
        endOfTree: false
      }, {
        href: '#',
        heading: _faker2.default.random.words(3),
        description: _faker2.default.random.words(15),
        endOfTree: false
      }]
    });
  });

  return function getItems(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();