import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

export default ({ editable = true }) => (
  <View style={styles.block}>
    <Text style={styles.label}>
      {'English'.toUpperCase()}
    </Text>
    <TextInput
      style={styles.field}
      multiline
      placeholder="English Text..."
      placeholderTextColor="#aaa"
      editable={editable}
    />
  </View>
);
