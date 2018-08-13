import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import { WHITE, CHARCOAL } from './styles';
import Home from './views/Home';

export default () => (
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
      <Home />
    </View>
  </View>
);

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
