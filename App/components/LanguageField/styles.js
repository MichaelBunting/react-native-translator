import { StyleSheet } from 'react-native';

import { LIGHT_GRAY, MEDIUM_GRAY, GRAY } from '../../styles';

export default StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: LIGHT_GRAY,
    borderBottomColor: MEDIUM_GRAY,
    borderBottomWidth: 3,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    position: 'absolute',
    top: 10,
    left: 10,
    fontSize: 14,
    color: GRAY,
  },
  field: {
    width: '100%',
    fontSize: 20,
    textAlign: 'center',
  },
});
