import {CHANGE_LANGUAGE} from "../actions/types";
  
  const initialState = {
    language : "es"
  };
  
  const languageReducer = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_LANGUAGE: {
        return {
            ...state,
            language: action.payload
        };
      }
      default:
        return state;
    }
  };
  
  export default languageReducer;