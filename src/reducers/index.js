import { combineReducers } from "redux";
import authReducer from "./authReducer";
import personalReducer from "./personalReducer";
import pacienteReducers from "./pacienteReducer";
import verifyReducer from "./verifyReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  personal: personalReducer,
  verifyPaciente: verifyReducer,
  paciente: pacienteReducers
})

export default rootReducer;
