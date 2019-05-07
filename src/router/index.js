import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import AuthLoadingScreen from '@/pages/auth-loading';
import Login from '@/pages/Login';
import Order from '@/pages/Order';
import OrderDetail from '@/pages/Order/OrderDetail';
import Protocol from '@/pages/Login/Protocol';
import PersonalCenter from '@/pages/PersonalCenter';
import TransferOrder from '@/pages/TransferOrder';
import EntryReceiver from '@/pages/EntryReceiver';
import Address from '@/pages/EntryReceiver/Address';
import TaskList from '@/pages/TaskList';
import Notification from '@/pages/Notification';
import HistoryOrder from '@/pages/HistoryOrder';
import HistoryOrderDetail from '@/pages/HistoryOrder/OrderDetail';
import HistoryOrderSearch from '@/pages/HistoryOrder/Search';
import Record from '@/pages/Record';

const AuthStack = createStackNavigator(
  { Login },
  {
    headerMode: 'none'
  }
);

const AppStack = createStackNavigator({
  Order,
  OrderDetail,
  HistoryOrder,
  HistoryOrderSearch,
  PersonalCenter,
  Address,
  EntryReceiver,
  TransferOrder,
  Notification,
  TaskList,
  HistoryOrderDetail,
  Record,
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
