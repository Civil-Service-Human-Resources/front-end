import * as ACTION_TYPES from './../constants';

export const addBlock = (items = []) => {
  return {
    type: ACTION_TYPES.ADD_BLOCK,
    items,
  };
};

export const replaceBlock = (blockIndex, items = []) => {
  return {
    type: ACTION_TYPES.REPLACE_BLOCK,
    blockIndex,
    items,
  };
};

export const removeBlock = blockIndex => {
  return {
    type: ACTION_TYPES.REMOVE_BLOCK,
    blockIndex,
  };
};
