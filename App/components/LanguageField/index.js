import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

const LanguageField = ({ editable, language = '' }) => (
  <View style={styles.block}>
    <Text style={styles.label}>
      {language.toUpperCase()}
    </Text>
    <TextInput
      style={styles.field}
      multiline
      placeholder={`${language} Text...`}
      placeholderTextColor="#aaa"
      editable={editable}
    />
  </View>
);

LanguageField.propTypes = {
  editable: PropTypes.bool,
  language: PropTypes.string.isRequired,
};

LanguageField.defaultProps = {
  editable: true,
};

export default LanguageField;
