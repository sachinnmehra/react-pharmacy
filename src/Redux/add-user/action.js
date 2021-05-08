export const toggleAddUserHidden = () => ({
  type: "TOGGLE_ADD_USER_HIDDEN",
});

export const addUser = (item) => ({
  type: "ADD_USER",
  payload: item,
});

export const removeUser = (item) => ({
  type: "REMOVE_USER",
  payload: item,
});

export const searchUser = (user) => ({
  type: "SEARCH_USER",
  payload: user,
});
