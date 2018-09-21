'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectaTestRadiosGet = selectaTestRadiosGet;
exports.selectaTestSelectGet = selectaTestSelectGet;
exports.selectaTestTypeaheadGet = selectaTestTypeaheadGet;
exports.selectaTestMegaListGet = selectaTestMegaListGet;
let generalData = require('./data');
let orgsData = require('./all-orgs');

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

  return res.render('prototypes/learner/v13/selectas/radios', viewData);
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

  return res.render('prototypes/learner/v13/selectas/select', viewData);
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

  return res.render('prototypes/learner/v13/selectas/typeahead', viewData);
}

function selectaTestMegaListGet(req, res) {
  let viewData, showNewNav, navItem, profilePrimary;

  showNewNav = req.session.showNewNav;
  navItem = '';

  profilePrimary = orgsData.allOrgsAndSubDivisions;

  viewData = {
    profilePrimary,
    showNewNav,
    navItem
  };

  return res.render('prototypes/learner/v13/selectas/all', viewData);
}