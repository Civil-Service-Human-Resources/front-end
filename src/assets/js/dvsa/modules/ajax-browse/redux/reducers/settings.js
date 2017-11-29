import md5 from 'md5';
import * as ACTION_TYPES from '../constants';

const initialState = {
  setupCompleted: false,
  settingUp: false,
  container: {
    element: false,
    hash: false,
  },
  loading: true,
};

export default function settings(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SETUP_CONTAINER: {
      return {
        ...state,
        container: {
          element: action.payload,
          hash: md5(action.payload),
        },
      };
    }
    case ACTION_TYPES.ENABLE_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case ACTION_TYPES.DISABLE_LOADING: {
      return {
        ...state,
        loading: false,
      };
    }
    case ACTION_TYPES.SETUP_STARTED: {
      return {
        ...state,
        loading: true,
        settingUp: true,
        setupCompleted: false,
      };
    }
    case ACTION_TYPES.SETUP_COMPLETED: {
      return {
        ...state,
        loading: false,
        settingUp: false,
        setupCompleted: true,
      };
    }
    default: {
      return state;
    }
  }
}
