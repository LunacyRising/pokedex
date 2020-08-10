import { CHANGE_LANGUAGE } from "./types";


export const changeLanguage = (number) => {
    return {
      type: CHANGE_LANGUAGE,
      payload: number
    };
  };
