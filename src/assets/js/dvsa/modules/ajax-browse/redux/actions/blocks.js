import * as ACTION_TYPES from './../constants';

export const addBlock = hash => {
  return {
    type: ACTION_TYPES.ADD_BLOCK,
    payload: hash,
  };
};
