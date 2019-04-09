import { combineReducers } from "redux";

export const submitting = (state = false, action) => {
  switch (action.type) {
    case "Test":
      return action.loading;
    default:
      return state;
  }
};

const test = combineReducers({
  submitting
});

export default test;
