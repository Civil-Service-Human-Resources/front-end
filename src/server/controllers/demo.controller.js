import path from 'path';
import { CONFIG } from './../config/constants';

// generic functions
// validate name/word
let validateWord = function(word) {
  let regex = /^[a-zA-Z ]+$/;
  return regex.test(word);
};
// validate email
let validateEmail = function(email) {
  let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};
// validate postcode
let validatePostcode = function(postcode) {
  postcode = postcode.replace(/\s/g, '');
  let regex = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
  return regex.test(postcode);
};

// Start: GET
export function indexGet(req, res) {
  // return res.render('protoypes/index', '.path/to/data/if/required');
  // return res.render('demo/index', { loggedOut: false });

  let clearSession = res.param('clearSession');
  if (clearSession === 'true') {
    console.log('fuck you');
  }

  let errorFirstName = req.session.errorFirstName,
    errorLastName = req.session.errorLastName,
    errorNames = req.session.errorNames,
    firstName = req.session.firstName,
    lastName = req.session.lastName;

  // firstName = 'DaveTest';
  console.log('firstName = ' + firstName);

  let viewData;

  viewData = {
    firstName,
    lastName,
  };

  if (errorNames === true) {
    viewData += {
      errorFirstName,
      errorLastName,
      errorNames,
    };

    req.session.errorFirstName = req.session.errorLastName = req.session.errorNames = '';
  }

  return res.render('demo/index', viewData);
}

// Start: POST
export function indexPost(req, res) {
  const { firstName, lastName } = req.body;
  let errorNames, errorFirstName, errorLastName;

  req.session.firstName = firstName;
  req.session.lastName = lastName;

  if (!validateWord(firstName)) {
    errorNames = true;
    errorFirstName = true;
  }

  if (!validateWord(lastName)) {
    errorNames = true;
    errorLastName = true;
  }

  if (errorNames === true) {
    req.session.errorFirstName = errorFirstName;
    req.session.errorLastName = errorLastName;
    req.session.errorNames = errorNames;
    return res.redirect('/demo');
  } else {
    return res.redirect('/demo/address');
  }
}

// address
export function addressGet(req, res) {
  let firstline = req.session.firstLine,
    secondLine = req.session.secondLine,
    townCity = req.session.townCity,
    postcode = req.session.postcode;

  let viewData;
  viewData = {
    firstline,
    secondLine,
    townCity,
    postcode,
  };

  return res.render('demo/address/index', viewData);
}

export function addressPost(req, res) {
  let firstLine = '12 Thing Lane',
    secondLine = 'Somewhereton',
    townCity = 'Dinglyville',
    postcode = 'SW1 1WS';

  req.session.firstLine = firstLine;
  req.session.secondLine = secondLine;
  req.session.townCity = townCity;
  req.session.postcode = postcode;

  req.session.address = firstLine + ', ' + secondLine + ', ' + townCity + ', ' + postcode;

  return res.redirect('/demo/contact');
}

// contact
export function contactGet(req, res) {
  return res.render('demo/contact/index', {
    testing: 'test',
  });
}

export function contactPost(req, res) {
  return res.redirect('/demo/summary');
}

// summary
export function summaryGet(req, res) {
  let firstName = req.session.firstName,
    lastName = req.session.lastName,
    address = req.session.address;

  console.log('address = ' + address);

  let viewData;
  viewData = {
    firstName,
    lastName,
    address,
  };

  console.log('viewData = ' + viewData.firstName);
  console.log('viewData.address = ' + viewData.address);

  return res.render('demo/summary/index', viewData);
}

export function summaryPost(req, res) {
  return res.redirect('/demo/finished');
}

// All done!
export function finishedGet(req, res) {
  return res.render('demo/finished/index', {
    testing: 'test',
  });
}
