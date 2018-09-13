'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectaTestRadiosGet = selectaTestRadiosGet;
exports.selectaTestSelectGet = selectaTestSelectGet;
exports.selectaTestTypeaheadGet = selectaTestTypeaheadGet;
let generalData = require('./data');

// Selecta test pages
function selectaTestRadiosGet(req, res) {
  let viewData, showNewNav, navItem, profilePrimary;

  showNewNav = req.session.showNewNav;
  navItem = '';

  profilePrimary = generalData.allNewAreasOfWork;

  viewData = {
    profilePrimary,
    showNewNav,
    navItem
  };

  return res.render('prototypes/learner/v12/selectas/radios', viewData);
}

function selectaTestSelectGet(req, res) {
  let viewData, showNewNav, navItem, profilePrimary;

  showNewNav = req.session.showNewNav;
  navItem = '';

  profilePrimary = generalData.allNewAreasOfWork;

  viewData = {
    profilePrimary,
    showNewNav,
    navItem
  };

  return res.render('prototypes/learner/v12/selectas/select', viewData);
}

function selectaTestTypeaheadGet(req, res) {
  let viewData, showNewNav, navItem, profilePrimary;

  showNewNav = req.session.showNewNav;
  navItem = '';

  profilePrimary = generalData.allNewAreasOfWork;

  viewData = {
    profilePrimary,
    showNewNav,
    navItem
  };

  return res.render('prototypes/learner/v12/selectas/typeahead', viewData);
}