import { combineReducers } from "redux";
import { formReducer } from "./FormReducer";
import { accountReducer } from "./AccountReducer";

let RootReducers = combineReducers({
  //
  formReducer: formReducer,
  accountReducer: accountReducer,
});
export default RootReducers;
