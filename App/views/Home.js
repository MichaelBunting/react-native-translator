import React from 'react';
import { View, StyleSheet } from 'react-native';

import LanguageSelector from '../components/LanguageSelector';
import LanguageField from '../components/LanguageField';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default () => (
  <View style={styles.container}>
    <LanguageSelector />
    <View style={styles.container}>
      <LanguageField />
      <LanguageField
        editable={false}
      />
    </View>
  </View>
);
