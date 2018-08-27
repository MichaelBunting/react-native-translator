import {
  SET_FROM_LANG,
  SET_TO_LANG,
} from './actions';

const initialState = {
  fromLang: 'English',
  toLang: 'Spanish',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FROM_LANG:
      return Object.assign({}, state, {
        fromLang: action.language,
      });
    case SET_TO_LANG:
      return Object.assign({}, state, {
        toLang: action.language,
      });
    default:
      return state;
  }
};
