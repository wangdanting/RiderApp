import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import AuthLoadingScreen from '@/pages/auth-loading';
import Login from '@/pages/login';
import Order from '@/pages/order';
import Protocol from '@/pages/login/protocol';
import personalCenter from '@/pages/personal-center';

const AuthStack = createStackNavigator(
  { Login },
  {
    headerMode: 'none'
  }
);

const AppStack = createStackNavigator({
  personalCenter,
  Protocol,
  Order
});

const AppNavigation = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

const AppContainer = createAppContainer(AppNavigation);

export default AppContainer;
