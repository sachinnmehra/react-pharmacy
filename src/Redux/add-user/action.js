export const toggleAddUserHidden = () => ({
  type: "TOGGLE_ADD_USER_HIDDEN",
});

export const addUser = (item) => ({
  type: "ADD_USER",
  payload: item,
});
