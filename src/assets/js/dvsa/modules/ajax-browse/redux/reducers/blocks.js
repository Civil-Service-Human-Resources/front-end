import * as ACTION_TYPES from './../constants';

const initialState = [];

export default function blocks(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_BLOCK: {
      return [
        ...state,
        {
          items: action.items,
        },
      ];
    }
    case ACTION_TYPES.REPLACE_BLOCK: {
      return state.map((item, index) => {
        if (index !== action.blockIndex) {
          return item;
        }
        return {
          ...item,
          items: action.items,
        };
      });
    }
    case ACTION_TYPES.REMOVE_BLOCK: {
      return [...state.slice(0, action.blockIndex), ...state.slice(action.blockIndex + 1)];
    }
    default: {
      return state;
    }
  }
}
