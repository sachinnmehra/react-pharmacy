const INITIAL_STATE = {
  hidden: true,
  user: [],
};

const addUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_ADD_USER_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden,
      };
    case "ADD_USER":
      return {
        user: [...state.user, action.payload],
      };
    default:
      return state;
  }
};

export default addUserReducer;
