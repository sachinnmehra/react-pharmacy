import { actionTypes } from "../constant";

const INITIAL_STATE = {
  medicine: [],

  hidden: true,
};
const addMedicineReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_ADD_MEDS_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case "ADD_MEDICINE":
      return {
        medicine: [...state.medicine, action.payload],
      };
    default:
      return state;
  }
};

export default addMedicineReducer;
