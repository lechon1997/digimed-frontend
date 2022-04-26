import { combineReducers } from "redux";
import authReducer from "./authReducer";
import personalReducer from "./personalReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  personal: personalReducer,
});

export default rootReducer;
