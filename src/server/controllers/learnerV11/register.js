// import generic validation functions
import { validateEmail, validatePostCode, validateWord } from './validation-functions';

let generalData = require('./data');

// **************************************************************************************
// Email: GET
// **************************************************************************************
export function registerEmailGet(req, res) {
  let viewData,
    email,
    email2,
    registrationEmailError,
    registrationEmailErrorMessage,
    mode,
    editMode,
    clearSession,
    registrationEmailErrorMessageBottom,
    registrationEmailErrorMessageTop;

  email = req.session.email;
  registrationEmailError = req.session.registrationEmailError;
  registrationEmailErrorMessage = req.session.registrationEmailErrorMessage;
  registrationEmailErrorMessageTop = req.session.registrationEmailErrorMessageTop;
  registrationEmailErrorMessageBottom = req.session.registrationEmailErrorMessageBottom;

  clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    return res.redirect('/prototypes/learner/v11');
  }

  mode = req.param('mode');
  console.log('mode = ' + mode);
  if (mode == 'edit') {
    email2 = email;
    editMode = true;
    req.session.editMode = true;
  }

  viewData = {
    email,
    email2,
    registrationEmailError,
    registrationEmailErrorMessage,
    editMode,
    registrationEmailErrorMessageBottom,
    registrationEmailErrorMessageTop,
  };

  return res.render('prototypes/learner/v11/registration/index', viewData);
}

// Email: POST
export function registerEmailPost(req, res) {
  const { email, email2 } = req.body;

  let registrationEmailError,
    registrationEmailErrorMessage,
    editMode,
    registrationEmailErrorMessageTop,
    registrationEmailErrorMessageBottom;
  req.session.email = email;
  editMode = req.session.editMode;

  if (!validateEmail(email)) {
    registrationEmailError = true;
    registrationEmailErrorMessage = 'You must enter a valid email';
    registrationEmailErrorMessageTop = 'Enter a valid email address';
  }

  if (email !== email2) {
    registrationEmailError = true;
    registrationEmailErrorMessage = 'The email addresses do not match';
    registrationEmailErrorMessageBottom = 'Enter a matching email address';
  }

  if (registrationEmailError === true) {
    req.session.registrationEmailError = registrationEmailError;
    req.session.registrationEmailErrorMessage = registrationEmailErrorMessage;
    req.session.registrationEmailErrorMessageTop = registrationEmailErrorMessageTop;
    req.session.registrationEmailErrorMessageBottom = registrationEmailErrorMessageBottom;

    return res.redirect('/prototypes/learner/v11/registration');
  } else {
    req.session.registrationEmailError = req.session.registrationEmailErrorMessage = null;
    if (editMode === true) {
      req.session.editMode = null;
      return res.redirect('/prototypes/learner/v11/registration/review');
    } else {
      return res.redirect('/prototypes/learner/v11/registration/personal-details');
    }
  }
}
// **************************************************************************************
// Personal details: GET
// **************************************************************************************
export function registerPersonalGet(req, res) {
  let viewData,
    firstName,
    lastName,
    registrationPersonalError,
    registrationPersonalErrorFirstName,
    registrationPersonalErrorLastName,
    mode,
    editMode;

  firstName = req.session.firstName;
  lastName = req.session.lastName;
  registrationPersonalError = req.session.registrationPersonalError;
  registrationPersonalErrorFirstName = req.session.registrationPersonalErrorFirstName;
  registrationPersonalErrorLastName = req.session.registrationPersonalErrorLastName;

  mode = req.param('mode');
  if (mode == 'edit') {
    editMode = true;
    req.session.editMode = true;
  }

  viewData = {
    firstName,
    lastName,
    registrationPersonalError,
    registrationPersonalErrorFirstName,
    registrationPersonalErrorLastName,
    editMode,
  };

  return res.render('prototypes/learner/v11/registration/personal-details/index', viewData);
}

// Personal details: POST
export function registerPersonalPost(req, res) {
  const { firstName, lastName } = req.body;

  let registrationPersonalError, registrationPersonalErrorFirstName, registrationPersonalErrorLastName, editMode;
  req.session.firstName = firstName;
  req.session.lastName = lastName;

  editMode = req.session.editMode;

  if (!validateWord(firstName)) {
    registrationPersonalErrorFirstName = 'Enter a valid first name';
    registrationPersonalError = true;
  }

  if (!validateWord(lastName)) {
    registrationPersonalErrorLastName = 'Enter a valid last name';
    registrationPersonalError = true;
  }

  if (registrationPersonalError === true) {
    req.session.registrationPersonalErrorFirstName = registrationPersonalErrorFirstName;
    req.session.registrationPersonalErrorLastName = registrationPersonalErrorLastName;
    req.session.registrationPersonalError = registrationPersonalError;
    return res.redirect('/prototypes/learner/v11/registration/personal-details');
  } else {
    req.session.registrationPersonalErrorFirstName = req.session.registrationPersonalErrorLastName = req.session.registrationPersonalError = null;

    if (editMode === true) {
      req.session.editMode = null;
      return res.redirect('/prototypes/learner/v11/registration/review');
    } else {
      return res.redirect('/prototypes/learner/v11/registration/department');
    }
  }
}
// **************************************************************************************
// Job details 1: GET Department
// **************************************************************************************
export function registerDepartmentGet(req, res) {
  let viewData, departmentSelectOptions, registrationDepartmentError, mode, editMode, department;

  departmentSelectOptions = generalData.allDepartments;
  registrationDepartmentError = req.session.registrationDepartmentError;

  mode = req.param('mode');
  if (mode == 'edit') {
    editMode = true;
    req.session.editMode = true;
  }

  department = req.session.department;

  viewData = {
    departmentSelectOptions,
    registrationDepartmentError,
    department,
    editMode,
  };

  return res.render('prototypes/learner/v11/registration/department/index', viewData);
}

// Job details: POST
export function registerDepartmentPost(req, res) {
  const { department } = req.body;

  let registrationDepartmentError, departmentSelectOptions, departmentName, editMode;
  departmentSelectOptions = generalData.allDepartments;

  for (let i = 0; i < departmentSelectOptions.length; i++) {
    if (departmentSelectOptions[i].value == department) departmentName = departmentSelectOptions[i].text;
  }

  editMode = req.session.editMode;

  if (parseInt(department) < 1) {
    registrationDepartmentError = true;
    req.session.registrationDepartmentError = registrationDepartmentError;
    return res.redirect('/prototypes/learner/v11/registration/department');
  } else {
    req.session.department = department;
    req.session.departmentName = departmentName;
    req.session.registrationDepartmentError = null;
    if (editMode === true) {
      req.session.editMode = null;
      return res.redirect('/prototypes/learner/v11/registration/review');
    } else {
      // return res.redirect('/prototypes/learner/v11/registration/area-of-work');
      return res.redirect('/prototypes/learner/v11/registration/grade');
    }
  }
}
// **************************************************************************************
// Job2 details 2: GET Profession AKA area-of-work
// **************************************************************************************
export function registerAreaGet(req, res) {
  let viewData, professionSelectOptions, registrationProfessionError, registrationJob2Error, profession, mode, editMode;

  mode = req.param('mode');
  if (mode == 'edit') {
    editMode = true;
    req.session.editMode = true;
  }

  // professionSelectOptions = generalData.allProfessions;
  professionSelectOptions = generalData.allNewAreasOfWork;
  registrationJob2Error = req.session.registrationJob2Error;
  registrationProfessionError = req.session.registrationProfessionError;
  profession = req.session.profession;

  //console.log('professionSelectOptions = ' + professionSelectOptions);

  viewData = {
    professionSelectOptions,
    registrationProfessionError,
    registrationJob2Error,
    profession,
    editMode,
  };

  return res.render('prototypes/learner/v11/registration/area-of-work/index', viewData);
}

// Job2 details: POST
export function registerAreaPost(req, res) {
  const { profession } = req.body;

  console.log('profession = ' + profession);

  let registrationJob2Error,
    registrationProfessionError,
    professionSelectOptions,
    professionName = [],
    usersProfession,
    editMode,
    returnPath;

  professionSelectOptions = generalData.allNewAreasOfWork;
  req.session.profession = profession;
  editMode = req.session.editMode;

  if (profession) {
    for (let i = 0; i < profession.length; i++) {
      professionName.push(professionSelectOptions[parseInt(profession[i]) - 1].text);
    }
  }

  if (profession) {
    usersProfession = professionSelectOptions[parseInt(profession) - 1].text;
  }

  // req.session.professionName = professionName;
  req.session.professionName = usersProfession;
  // req.session.usersProfession = usersProfession;
  console.log('usersProfession = ' + usersProfession);

  if (!profession) {
    registrationJob2Error = true;
    registrationProfessionError = true;
  }

  if (registrationJob2Error === true) {
    req.session.registrationJob2Error = registrationJob2Error;
    req.session.registrationProfessionError = registrationProfessionError;
    return res.redirect('/prototypes/learner/v11/registration/area-of-work');
  } else {
    req.session.registrationJob2Error = false;
    req.session.registrationJob2Error = req.session.registrationProfessionError = null;

    if (editMode === true) {
      req.session.editMode = null;
      return res.redirect('/prototypes/learner/v11/registration/review');
    } else {
      // if (usersProfession === 'Operational delivery' || usersProfession === 'Digital, Data and Technology') {
      if (usersProfession === 'Operational delivery') {
        return res.redirect('/prototypes/learner/v11/registration/area-of-work/details');
      } else {
        return res.redirect('/prototypes/learner/v11/registration/other-areas');
      }
    }
  }
}

// **************************************************************************************
// Job2 details 2: GET Profession AKA area-of-work DETAILS
// **************************************************************************************
export function registerAreaDetailsGet(req, res) {
  let viewData, mode, editMode, professionName, viewPath, detailsOpsDel;

  professionName = req.session.professionName;

  console.log('************************************************************************************************************');

  console.log('professionName = ' + professionName);

  if (professionName === 'Operational delivery') {
    viewPath = 'prototypes/learner/v11/registration/area-of-work/details-opsdel';
  } else if (professionName === 'Digital, Data and Technology') {
    viewPath = 'prototypes/learner/v11/registration/area-of-work/details-ddat';
  } else {
    return res.redirect('/prototypes/learner/v11/registration/other-areas');
  }

  mode = req.param('mode');
  if (mode == 'edit') {
    editMode = true;
    req.session.editMode = true;
  }

  detailsOpsDel = generalData.detailsOpsDel;

  /*if (profession) {
    profession = req.session.profession;
  } else {
    profession = '';
  }*/

  viewData = {
    editMode,
    detailsOpsDel,
  };

  return res.render(viewPath, viewData);
}

// Job2 details: POST
export function registerAreaDetailsPost(req, res) {
  const { detailsOpsDel } = req.body;

  console.log('detailsOpsDel = ' + detailsOpsDel);

  let editMode, detailsOpsDel2;

  detailsOpsDel2 = detailsOpsDel;
  req.session.detailsOpsDel = detailsOpsDel2;

  /*professionSelectOptions = generalData.allNewAreasOfWork;
  req.session.profession = profession;*/
  editMode = req.session.editMode;

  /* if (profession) {
    for (let i = 0; i < profession.length; i++) {
      professionName.push(professionSelectOptions[parseInt(profession[i]) - 1].text);
    }
  }

  if (profession) {
    usersProfession = professionSelectOptions[parseInt(profession) - 1].text;
  }*/

  // req.session.professionName = professionName;
  // req.session.professionName = usersProfession;
  // req.session.usersProfession = usersProfession;
  // console.log('usersProfession = ' + usersProfession);

  /*if (!profession) {
    registrationJob2Error = true;
    registrationProfessionError = true;
  }*/

  /*if (registrationJob2Error === true) {
    req.session.registrationJob2Error = registrationJob2Error;
    req.session.registrationProfessionError = registrationProfessionError;
    return res.redirect('/prototypes/learner/v11/registration/area-of-work');
  } else {
    req.session.registrationJob2Error = false;
    req.session.registrationJob2Error = req.session.registrationProfessionError = null;*/

  if (editMode === true) {
    req.session.editMode = null;
    return res.redirect('/prototypes/learner/v11/registration/review');
  } else {
    return res.redirect('/prototypes/learner/v11/registration/other-areas');
  }
  //}
}

// **************************************************************************************
// Job2 details 2: GET interests
// **************************************************************************************
export function registerInterestsGet(req, res) {
  let viewData, editMode, mode, professionSelectOptions;

  mode = req.param('mode');
  if (mode == 'edit') {
    editMode = true;
    req.session.editMode = true;
  }

  professionSelectOptions = generalData.allNewAreasOfWork;
  console.log('professionSelectOptions = ' + professionSelectOptions);

  viewData = {
    professionSelectOptions,
  };

  return res.render('prototypes/learner/v11/registration/interests/index', viewData);
}
// Job2 details: POST
export function registerInterestsPost(req, res) {
  const { extraInterests } = req.body;

  let editMode,
    allInterests = [];

  console.log('extraInterests = ' + extraInterests);

  editMode = req.session.editMode;

  if (typeof extraInterests === 'string' || extraInterests instanceof String) {
    allInterests = [extraInterests];
  } else {
    allInterests = extraInterests;
  }

  req.session.allInterests = allInterests;
  console.log('allInterests = ' + allInterests);

  if (editMode === true) {
    req.session.editMode = null;
    return res.redirect('/prototypes/learner/v11/registration/review');
  } else {
    return res.redirect('/prototypes/learner/v11/registration/password');
  }
}

// **************************************************************************************
// Job2 details 2: GET other areas of work
// **************************************************************************************
export function registerOtherAreasGet(req, res) {
  let viewData, professionSelectOptions;

  professionSelectOptions = generalData.allNewAreasOfWork;
  console.log('professionSelectOptions = ' + professionSelectOptions);

  viewData = {
    professionSelectOptions,
  };

  return res.render('prototypes/learner/v11/registration/other-areas/index', viewData);
}
// Job2 details: POST
export function registerOtherAreasPost(req, res) {
  const { otherAreas } = req.body;

  console.log('otherAreas = ' + otherAreas);

  let registrationJob2Error, registrationProfessionError, professionSelectOptions, otherAreasList, usersProfession, editMode;

  otherAreasList = otherAreas;
  req.session.otherAreas = otherAreasList;

  professionSelectOptions = generalData.allNewAreasOfWork;
  // req.session.profession = profession;
  editMode = req.session.editMode;

  /*if (otherAreas) {
    for (let i = 0; i < otherAreas.length; i++) {
      otherAreasList.push(professionSelectOptions[parseInt(profession[i]) - 1].text);
    }
  }*/

  /*if (profession) {
    usersProfession = professionSelectOptions[parseInt(profession) - 1].text;
  }*/

  // req.session.professionName = professionName;
  //req.session.professionName = usersProfession;
  // req.session.usersProfession = usersProfession;
  //console.log('usersProfession = ' + usersProfession);

  /*if (!profession) {
    registrationJob2Error = true;
    registrationProfessionError = true;
  }*/

  if (registrationJob2Error === true) {
    req.session.registrationJob2Error = registrationJob2Error;
    req.session.registrationProfessionError = registrationProfessionError;
    return res.redirect('/prototypes/learner/v11/registration/area-of-work');
  } else {
    req.session.registrationJob2Error = false;
    req.session.registrationJob2Error = req.session.registrationProfessionError = null;

    if (editMode === true) {
      req.session.editMode = null;
      return res.redirect('/prototypes/learner/v11/registration/review');
    } else {
      // return res.redirect('/prototypes/learner/v11/registration/grade');
      return res.redirect('/prototypes/learner/v11/registration/interests');
    }
  }
}

// **************************************************************************************
// Job3 details 3: GET  Grade
// **************************************************************************************
export function registerGradeGet(req, res) {
  let viewData, registrationGradeError, gradeSelectOptions, registrationJob2Error, grade, mode, editMode;

  mode = req.param('mode');
  if (mode == 'edit') {
    editMode = true;
    req.session.editMode = true;
  }

  gradeSelectOptions = generalData.allGrades;
  registrationJob2Error = req.session.registrationJob2Error;
  registrationGradeError = req.session.registrationGradeError;
  grade = req.session.grade;

  viewData = {
    gradeSelectOptions,
    registrationGradeError,
    registrationJob2Error,
    grade,
    editMode,
  };

  return res.render('prototypes/learner/v11/registration/grade/index', viewData);
}

// Job2 details: POST
export function registerGradePost(req, res) {
  const { grade } = req.body;

  console.log(grade);

  let registrationJob2Error, registrationGradeError, gradeSelectOptions, gradeName, editMode;

  gradeSelectOptions = generalData.allGrades;
  req.session.grade = grade;
  editMode = req.session.editMode;

  for (let i = 0; i < gradeSelectOptions.length; i++) {
    if (gradeSelectOptions[i].value == grade) gradeName = gradeSelectOptions[i].text;
  }

  req.session.gradeName = gradeName;

  // if (parseInt(grade) < 1) {
  if (!grade) {
    registrationJob2Error = true;
    registrationGradeError = true;
  }

  // redirect for debug
  // return res.redirect('/prototypes/learner/v11/registration/grade');

  if (registrationJob2Error === true) {
    req.session.registrationJob2Error = registrationJob2Error;
    req.session.registrationGradeError = registrationGradeError;
    return res.redirect('/prototypes/learner/v11/registration/grade');
  } else {
    req.session.registrationJob2Error = false;
    req.session.registrationJob2Error = req.session.registrationGradeError = null;

    if (editMode === true) {
      req.session.editMode = null;
      return res.redirect('/prototypes/learner/v11/registration/review');
    } else {
      // return res.redirect('/prototypes/learner/v11/registration/password');
      return res.redirect('/prototypes/learner/v11/registration/area-of-work');
    }
  }
}
// **************************************************************************************
// Password GET
// **************************************************************************************
export function registerPasswordGet(req, res) {
  let viewData, passwordError, passwordErrorMessage, passwordOneError, passwordTwoError, password, mode, editMode;

  passwordError = req.session.passwordError;
  passwordErrorMessage = req.session.passwordErrorMessage;
  passwordOneError = req.session.passwordOneError;
  passwordTwoError = req.session.passwordTwoError;
  password = req.session.password;

  mode = req.param('mode');
  if (mode == 'edit') {
    editMode = true;
    req.session.editMode = true;
  }

  viewData = {
    passwordError,
    passwordErrorMessage,
    passwordOneError,
    passwordTwoError,
    password,
    editMode,
  };

  return res.render('prototypes/learner/v11/registration/password/index', viewData);
}

// password: POST
export function registerPasswordPost(req, res) {
  const { passwordOne, passwordTwo } = req.body;

  let passwordError, passwordErrorMessage, passwordOneError, passwordTwoError;

  req.session.password = passwordOne;

  let hasUpperCase = /[A-Z]/.test(passwordOne);
  let hasLowerCase = /[a-z]/.test(passwordOne);
  let hasNumbers = /\d/.test(passwordOne);
  // let hasNonalphas = /\W/.test(passwordOne);

  if (passwordOne.length < 8) {
    passwordError = true;
    passwordOneError = true;
    passwordErrorMessage = '<li>Your password is too short</li>';
  } else if (hasUpperCase + hasLowerCase + hasNumbers < 3) {
    passwordError = true;
    passwordOneError = true;
    passwordErrorMessage = '<li>Your password is not complex enough</li>';
  } else if (passwordOne !== passwordTwo) {
    passwordError = true;
    passwordTwoError = true;
    passwordErrorMessage = '<li>Your passwords do not match</li>';
  }

  if (passwordError === true) {
    req.session.passwordError = passwordError;
    req.session.passwordOneError = passwordOneError;
    req.session.passwordTwoError = passwordTwoError;
    req.session.passwordErrorMessage = passwordErrorMessage;
    return res.redirect('/prototypes/learner/v11/registration/password');
  } else {
    req.session.passwordError = req.session.passwordOneError = req.session.passwordTwoError = req.session.passwordErrorMessage = null;
    return res.redirect('/prototypes/learner/v11/registration/review');
  }
}

// **************************************************************************************
// Review GET
// **************************************************************************************
export function registerReviewGet(req, res) {
  let viewData, email, firstName, lastName, departmentName, professionName, gradeName, password, allInterests, otherAreas, detailsOpsDel;

  email = req.session.email;
  firstName = req.session.firstName;
  lastName = req.session.lastName;
  departmentName = req.session.departmentName;
  professionName = req.session.professionName;
  gradeName = req.session.gradeName;
  password = req.session.password;
  allInterests = req.session.allInterests;
  otherAreas = req.session.otherAreas;
  detailsOpsDel = req.session.detailsOpsDel;

  viewData = {
    email,
    firstName,
    lastName,
    departmentName,
    professionName,
    gradeName,
    password,
    otherAreas,
    allInterests,
    detailsOpsDel,
  };

  return res.render('prototypes/learner/v11/registration/review/index', viewData);
}

// Review: POST
export function registerReviewPost(req, res) {
  const { email, email2 } = req.body;

  let signinError;

  // no validation required, just save to session and send on to complete
  return res.redirect('/prototypes/learner/v11/registration/complete');
}
// **************************************************************************************
// Complete GET
// **************************************************************************************
export function registerCompleteGet(req, res) {
  let viewData;

  return res.render('prototypes/learner/v11/registration/complete/index', viewData);
}
