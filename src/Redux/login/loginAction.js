import { actionTypes } from "../constant";

export const toggleLoginPage = (details) => ({
  type: actionTypes.TOGGLE_LOGIN,
  payload: details,
});
