import { combineReducers } from "redux";
import authReducer from "./authReducer";
import tratamientoReducer from "./tratamientoReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  tratamiento: tratamientoReducer,
});

export default rootReducer;
