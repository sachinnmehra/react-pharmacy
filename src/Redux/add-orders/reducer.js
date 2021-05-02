const INITIAL_STATE = {
  hidden: true,
  order: [],
};

const addOrderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_ADD_ORDER_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden,
      };
    case "ADD_ORDER":
      return {
        order: [...state.order, action.payload],
      };
    default:
      return state;
  }
};

export default addOrderReducer;
