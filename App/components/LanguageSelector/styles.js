import { StyleSheet } from 'react-native';

import { BLUE, WHITE, DARK_BLUE } from '../../styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: BLUE,
    borderBottomWidth: 2,
    borderBottomColor: DARK_BLUE,
  },
  block: {
    flex: 1,
    padding: 10,
  },
  iconContainer: {
    flex: 0,
    justifyContent: 'center',
  },
  icon: {
    color: WHITE,
    fontSize: 18,
  },
  label: {
    fontSize: 14,
    color: WHITE,
    fontWeight: '600',
  },
});
