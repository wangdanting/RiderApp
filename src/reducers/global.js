import { combineReducers } from 'redux';

export const loading = (state = false, action) => {
  switch (action.type) {
    case 'SetLoading':
      return action.loading;
    default:
      return state;
  }
};

export const lng = (state = '', action) => {
  switch (action.type) {
    case 'SetLng':
      return action.lng;
    default:
      return state;
  }
};

export const lat = (state = '', action) => {
  switch (action.type) {
    case 'SetLat':
      return action.lat;
    default:
      return state;
  }
};

const global = combineReducers({
  loading,
  lng,
  lat
});

export default global;
