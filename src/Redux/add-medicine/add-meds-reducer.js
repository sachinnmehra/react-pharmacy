import { actionTypes } from "../constant";

const INITIAL_STATE = {
  medicine: [
    {
      Id: "1",
      name: "Asprin",
      ManufacturerName: "Cipla",
      Price: "Rs 140",
      Stock: "Available",
      Discount: "10%",
    },
    {
      Id: "2",
      name: "Crocin",
      ManufacturerName: "XYZ",
      Price: "Rs 240",
      Stock: "Available",
      Discount: "20%",
    },
  ],

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
    case "CLEAR_ITEM_FROM_MEDICINE":
      return {
        ...state,
        medicine: state.medicine.filter((med) => med.Id !== action.payload.Id),
      };
    default:
      return state;
  }
};

export default addMedicineReducer;
