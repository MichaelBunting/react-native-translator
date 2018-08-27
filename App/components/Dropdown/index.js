import React from 'react';
import { Dropdown } from 'react-native-material-dropdown';

import styles from './styles';

export default ({
  options,
  label,
  selectedVal,
  onChangeText,
}) => (
  <Dropdown
    label={label || ''}
    data={options}
    value={selectedVal || options[0].value}
    onChangeText={onChangeText}
    {...styles}
  />
);
