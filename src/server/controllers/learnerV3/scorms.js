// import generic validation functions
// import { validateEmail } from './validation-functions';

// GET
export function basicFireSafetyGet(req, res) {
  let viewData, signinError;

  viewData = {
    signinError,
  };

  return res.render('prototypes/learner/v3/scorms/basic-fire-safety/index', viewData);
}

// Start: POST
export function basicFireSafetyPost(req, res) {
  const { email, password } = req.body;

  return res.redirect('/prototypes/learner/v3/');
}