import { actionTypes } from "../constant";
const INITIAL_STATE = {
  username: "",
  password: "",
  isLoggedIn: false,
  loginId: 0,
};

const toggleLoginPage = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_LOGIN:
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
        loginId: 1,
      };
    default:
      return state;
  }
};
export default toggleLoginPage;
