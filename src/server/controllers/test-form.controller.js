export const getTestForm = (req, res) => {
  const { errors } = req.session;

  let errorMessages = [];

  for (let key in errors) {
    errorMessages.push(errors[key]);
  }

  let viewData = {
    loggedOut: true,
    designSystem: true,
    errors,
    errorMessages,
  };

  return res.render('test-form/index', viewData);
};

export const postTestForm = (req, res) => {
  const { firstname, lastname } = req.body;

  let errors = {
    firstname: false,
    lastname: false,
  };

  if (firstname !== 'test') {
    errors.firstname = 'First name must be equal to test';
  }

  if (lastname !== 'test') {
    errors.lastname = 'Last name must be equal to test';
  }

  if (errors.firstname || errors.lastname) {
    req.session.errors = errors;
    return res.redirect('/test-form');
  }

  return res.redirect('/test-form/success-message');
};

export const getTestFormSuccessMessage = (req, res) => {
  let viewData = {
    loggedOut: true,
    designSystem: true,
  };

  req.session.errors = false;

  return res.render('test-form/success-message/index', viewData);
};
