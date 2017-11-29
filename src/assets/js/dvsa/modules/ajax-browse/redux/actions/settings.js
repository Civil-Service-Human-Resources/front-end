import * as ACTION_TYPES from './../constants';

export const setupStarted = () => {
  return {
    type: ACTION_TYPES.SETUP_STARTED,
    payload: true,
  };
};

export const setupCompleted = () => {
  return {
    type: ACTION_TYPES.SETUP_COMPLETED,
    payload: true,
  };
};

export const enableLoading = () => {
  return {
    type: ACTION_TYPES.ENABLE_LOADING,
    payload: true,
  };
};

export const disableLoading = () => {
  return {
    type: ACTION_TYPES.DISABLE_LOADING,
    payload: true,
  };
};

export const setupContainer = element => {
  return {
    type: ACTION_TYPES.SETUP_CONTAINER,
    payload: element,
  };
};
