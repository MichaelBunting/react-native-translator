import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';
import Dropdown from '../Dropdown';

const LanguageSelector = ({ languages, setFromLang, setToLang }) => (
  <View style={styles.container}>
    <View style={[styles.block, styles.blockFirstChild]}>
      <Text style={styles.label}>
        From:
      </Text>
      <Dropdown
        options={languages}
        selectedVal="English"
        label="Language"
        onChangeText={setFromLang}
      />
    </View>
    <View style={[styles.block, styles.iconContainer]}>
      <MaterialCommunityIcons name="arrow-right" style={styles.icon} />
    </View>
    <View style={styles.block}>
      <Text style={styles.label}>
        To:
      </Text>
      <Dropdown
        options={languages}
        selectedVal="Spanish"
        label="Language"
        onChangeText={setToLang}
      />
    </View>
  </View>
);

LanguageSelector.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFromLang: PropTypes.func.isRequired,
  setToLang: PropTypes.func.isRequired,
};

export default LanguageSelector;
