import { combineReducers } from "redux";
import AddMedicineReducer from "./add-medicine/add-meds-reducer";
import toggleLoginPage from "./login/loginReducer";
import orderReducer from "./add-orders/reducer";
import userReducer from "./add-user/reducer";
export default combineReducers({
  addMedicine: AddMedicineReducer,
  addUser: toggleLoginPage,
  addOrder: orderReducer,
  addUser: userReducer,
});
