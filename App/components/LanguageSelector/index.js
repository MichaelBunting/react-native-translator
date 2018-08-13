import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import Dropdown from '../Dropdown';

export default () => (
  <View style={styles.container}>
    <View style={[styles.block, styles.blockFirstChild]}>
      <Text style={styles.label}>
        From:
      </Text>
      <Dropdown
        options={[{
          value: 'foo',
          text: 'foo',
        }, {
          value: 'bar',
          text: 'bar'
        }]}
        label="Language"
      />
    </View>
    <View style={[styles.block, styles.iconContainer]}>
    </View>
    <View style={styles.block}>
      <Text style={styles.label}>
        To:
      </Text>
      <Dropdown
        options={[{
          value: 'foo',
          text: 'foo',
        }, {
          value: 'bar',
          text: 'bar'
        }]}
        label="Language"
      />
    </View>
  </View>
);