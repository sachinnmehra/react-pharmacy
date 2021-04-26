import { combineReducers } from "redux";
import AddMedicineReducer from "./add-medicine/add-meds-reducer";

export default combineReducers({
  addMedicine: AddMedicineReducer,
});
