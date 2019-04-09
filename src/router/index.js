import Login from "@/pages/login";
import Order from "@/pages/order";

import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";

const AuthStack = createStackNavigator(
  { Login },
  {
    headerMode: "none"
  }
);
const AppStack = createStackNavigator({
  Order
});

const AppNavigation = createSwitchNavigator(
  {
    // AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRouteName: "Auth"
  }
);

const AppContainer = createAppContainer(AppNavigation);

export default AppContainer;
