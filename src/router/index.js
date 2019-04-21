import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import AuthLoadingScreen from '@/pages/auth-loading';
import Login from '@/pages/login';
import Order from '@/pages/order';
import OrderDetail from '@/pages/order/orderDetail';
import Protocol from '@/pages/login/protocol';
import personalCenter from '@/pages/personal-center';
import transferOrder from '@/pages/transfer-order';
import entryReceiver from '@/pages/entry-receiver';

const AuthStack = createStackNavigator(
  { Login },
  {
    headerMode: 'none'
  }
);

const AppStack = createStackNavigator({
  entryReceiver,
  transferOrder,
  OrderDetail,
  Order,
  personalCenter,
  Protocol
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
