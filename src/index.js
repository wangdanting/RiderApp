import React, { PureComponent } from "react";
import { YellowBox } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import AppContainer from "./router/index";
import rootReducer from "./reducers";

// 移除 "Remote debugger is in a background tab" warning
YellowBox.ignoreWarnings(["Remote debugger"]);

const middleware = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
