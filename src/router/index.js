import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import AuthLoadingScreen from '@/pages/auth-loading';
import Login from '@/pages/login';
import Order from '@/pages/order';
import OrderDetail from '@/pages/order/orderDetail';
import Protocol from '@/pages/login/protocol';
import PersonalCenter from '@/pages/personal-center';
import TransferOrder from '@/pages/TransferOrder';
import EntryReceiver from '@/pages/entry-receiver';
import Address from '@/pages/entry-receiver/address';
import TaskList from '@/pages/TaskList';
import Notification from '@/pages/Notification';
import HistoryOrder from '../pages/HistoryOrder';

const AuthStack = createStackNavigator(
  { Login },
  {
    headerMode: 'none'
  }
);

const AppStack = createStackNavigator({
  HistoryOrder,
  OrderDetail,
  Notification,
  TaskList,
  Address,
  EntryReceiver,
  TransferOrder,
  Order,
  PersonalCenter,
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
