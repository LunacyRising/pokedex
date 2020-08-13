import { CHANGE_LANGUAGE } from "./types";


export const changeLanguage = (lang) => {
    return {
      type: CHANGE_LANGUAGE,
      payload: lang
    };
  };
