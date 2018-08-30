// import generic validation functions
import { validateEmail, validateWord } from './validation-functions';

let generalData = require('./data');

// **************************************************************************************
// Name: change name
// **************************************************************************************
export function profileNameGet(req, res) {
    let viewData;



    return res.render('prototypes/learner/v12/profile/name', viewData);
}

// Email: POST
export function profileNamePost(req, res) {
    const {} = req.body;

    return res.redirect('/prototypes/learner/v12/profile');
}


// **************************************************************************************
// Organisation
// **************************************************************************************
export function profileOrganisationGet(req, res) {
    let viewData;



    return res.render('prototypes/learner/v12/profile/organisation', viewData);
}

// Email: POST
export function profileOrganistionPost(req, res) {
    const {} = req.body;

    return res.redirect('/prototypes/learner/v12/profile');
}

// **************************************************************************************
// Primary area of work
// **************************************************************************************
export function profilePrimaryGet(req, res) {
    let viewData;

    return res.render('prototypes/learner/v12/profile/organisation', viewData);
}

// Email: POST
export function profilePrimaryPost(req, res) {
    const {} = req.body;

    return res.redirect('/prototypes/learner/v12/profile');
}