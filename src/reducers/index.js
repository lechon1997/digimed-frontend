import { combineReducers } from "redux";
import authReducer from "./authReducer";
import pacienteReducers from "./pacienteReducer";
import verifyReducer from "./verifyReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  verifyPaciente: verifyReducer,
  paciente: pacienteReducers
});

export default rootReducer;
