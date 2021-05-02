import { actionTypes } from "../constant";

export const toggleAddMedshidden = () => ({
  type: actionTypes.TOGGLE_ADD_MEDS_HIDDEN,
});
export const addMedicines = (item) => ({
  type: "ADD_MEDICINE",
  payload: item,
});
