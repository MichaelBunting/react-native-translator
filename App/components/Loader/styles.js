import { StyleSheet } from 'react-native';

import { DARK_BLUE, LIGHT_BLUE } from '../../styles';

const loaderSize = 50;

export default StyleSheet.create({
  loaderContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, .5)',
    zIndex: 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    width: loaderSize,
    height: loaderSize,
    borderWidth: 6,
    borderColor: DARK_BLUE,
    borderRadius: loaderSize / 2,
    borderTopColor: LIGHT_BLUE,
  },
});
