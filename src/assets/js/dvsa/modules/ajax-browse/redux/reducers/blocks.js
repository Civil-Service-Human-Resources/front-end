import md5 from 'md5';
import * as ACTION_TYPES from './../constants';

const initialState = [];

export default function blocks(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_BLOCK: {
      return [
        ...state,
        {
          hash: md5(action.payload),
          items: [],
        },
      ];
    }
    default: {
      return state;
    }
  }
}
