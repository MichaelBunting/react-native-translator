import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, View, StatusBar } from 'react-native';

import { WHITE, CHARCOAL } from './styles';
import Home from './views/Home';
import Loader from './components/Loader';

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  statusBar: {
    height: 20,
  },
  container: {
    backgroundColor: WHITE,
    flex: 1,
  },
});

const Root = ({ isLoading }) => (
  <View style={styles.page}>
    <View
      backgroundColor={CHARCOAL}
      style={styles.statusBar}
    >
      <StatusBar
        translucent
        barStyle="light-content"
      />
    </View>
    <View style={styles.container}>
      <Loader
        isLoading={isLoading}
      />
      <Home />
    </View>
  </View>
);

Root.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const { isLoading } = state.homeReducer;

  return {
    isLoading,
  };
};

export default connect(mapStateToProps)(Root);
