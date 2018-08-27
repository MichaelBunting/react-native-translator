export const SET_FROM_LANG = 'SET_FROM_LANG';
export const SET_TO_LANG = 'SET_TO_LANG';

export const setFromLang = data => ({
  type: SET_FROM_LANG,
  language: data.language,
});

export const setToLang = data => ({
  type: SET_TO_LANG,
  language: data.language,
});
