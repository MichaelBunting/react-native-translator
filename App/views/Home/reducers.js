import {
  REQUEST_DATA,
  RECEIVED_DATA,
} from './actions';

const initialState = {
  isLoading: true,
  language1: '',
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
        language1: action.language1,
      });
    default:
      return state;
  }
};
