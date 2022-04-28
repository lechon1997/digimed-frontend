import { combineReducers } from "redux";
import authReducer from "./authReducer";
import personalReducer from "./personalReducer";
import pacienteReducers from "./pacienteReducer";
import verifyReducer from "./verifyReducer";
import tratamientoReducer from "./tratamientoReducer";
import diagnosticoReducer from "./DiagnosticoReducer";
import delegarTareasReducer from "./delegarTareasReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  personal: personalReducer,
  verifyPaciente: verifyReducer,
  paciente: pacienteReducers,
  tratamiento: tratamientoReducer,
  diagnostico: diagnosticoReducer,
  delegarTareas: delegarTareasReducer,
});

export default rootReducer;
