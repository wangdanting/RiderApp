import { combineReducers } from 'redux';

export const loading = (state = false, action) => {
  switch (action.type) {
    case 'SetLoading':
      return action.loading;
    default:
      return state;
  }
};

const global = combineReducers({
  loading
});

export default global;
