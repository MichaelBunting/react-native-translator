import apiKey from '../../config/apiKeys';

const baseTranslateApiUrl = 'https://translate.yandex.net/api/v1.5/tr.json/getLangs';

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVED_DATA = 'RECEIVED_DATA';

export const requestData = () => ({
  type: REQUEST_DATA,
});

export const receiveData = data => ({
  type: RECEIVED_DATA,
  languages: data.languages,
});

export const getData = () => async (dispatch) => {
  dispatch(requestData());

  const data = await fetch(`${baseTranslateApiUrl}?key=${apiKey}&ui=en`);
  const json = await data.json();
  const languages = json.langs;

  dispatch(receiveData({
    languages,
  }));
};
