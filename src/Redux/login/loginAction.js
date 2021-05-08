import { actionTypes } from "../constant";

export const toggleLoginPage = (details) => ({
  type: actionTypes.TOGGLE_LOGIN,
  payload: details,
});
export const addUser = (user) => ({
  type: "ADD_USER",
  payload: user,
});
