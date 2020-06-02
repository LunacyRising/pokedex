import {DARK_MODE} from "../actions/types";
  
  const initialState = {
    darkMode : false
  };
  
  const darkModeReducer = (state = initialState, action) => {
    switch (action.type) {
      case DARK_MODE: {
        let dark = !state.darkMode
        return {
            ...state,
            darkMode: dark
        };
      }
      default:
        return state;
    }
  };
  
  export default darkModeReducer;