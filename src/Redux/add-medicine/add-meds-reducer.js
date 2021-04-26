import { actionTypes } from "../constant";
const INITIAL_STATE = {
  medicine: {
    name: "",
    manufacturerName: "",
    price: "",
    discount: "",
    stock: "",
  },

  hidden: true,
};
const addMedicineReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_ADD_MEDS_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default addMedicineReducer;
