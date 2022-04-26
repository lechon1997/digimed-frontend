import { combineReducers } from "redux";
import authReducer from "./authReducer";
import personalReducer from "./personalReducer";
import pacienteReducers from "./pacienteReducer";
import verifyReducer from "./verifyReducer";
import tratamientoReducer from "./tratamientoReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  personal: personalReducer,
  verifyPaciente: verifyReducer,
  paciente: pacienteReducers,
  tratamiento: tratamientoReducer,
})

export default rootReducer;
