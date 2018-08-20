import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

const LanguageField = ({ editable }) => (
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

LanguageField.propTypes = {
  editable: PropTypes.bool,
};

LanguageField.defaultProps = {
  editable: true,
};

export default LanguageField;
