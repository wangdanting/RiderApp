import React, { Fragment } from 'react';
import { Provider as AntProvider } from '@ant-design/react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppContainer from './router/index';
import PageLoading from './components/PageLoading';
import { NavigationService } from './utils';
import UpdateTip from '@/components/UpdateTip';

const App = ({ loading }) => (
  <Fragment>
    <AntProvider>
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </AntProvider>
    <UpdateTip />
    <PageLoading loading={loading} />
  </Fragment>
);

App.propTypes = {
  loading: PropTypes.bool
};

App.defaultProps = {
  loading: false
};

const mapStateToProps = state => {
  return {
    loading: state.global.loading
  };
};

export default connect(mapStateToProps)(App);
