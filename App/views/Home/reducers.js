import {
  REQUEST_DATA,
  RECEIVED_DATA,
} from './actions';

const initialState = {
  isLoading: true,
  // language1: '',
  languages: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case RECEIVED_DATA:
      return Object.assign({}, state, {
        isLoading: false,
        languages: action.languages,
      });
    default:
      return state;
  }
};
