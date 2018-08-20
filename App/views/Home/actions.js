export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVED_DATA = 'RECEIVED_DATA';

export const requestData = () => ({
  type: REQUEST_DATA,
});

export const receiveData = data => ({
  type: RECEIVED_DATA,
  language1: data.language1,
});

export const getData = () => (dispatch) => {
  dispatch(requestData());

  setTimeout(() => {
    dispatch(receiveData({
      language1: 'English',
    }));
  }, 1000);
};
