import { combineReducers } from 'redux';

import homeReducer from '../views/Home/reducers';
import languageSelectorReducer from '../components/LanguageSelector/reducers';

export default combineReducers({
  homeReducer,
  languageSelectorReducer,
});
