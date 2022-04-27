import * as actions from "../actions/delegarTareasActions";

export const initialState = {
  seleccionarFuncion: true,
  editarFuncion: false,
  seleccionarEnfermera: false,
  funciones: [],
};

export default function delegarTareasReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SIGUIENTE_SELECCIONAR_FUNCION:
      return {
        ...state,
        editarFuncion: action.payload,
      };

    case actions.SIGUIENTE_EDITAR_FUNCION:
      return {
        ...state,
        seleccionarEnfermera: action.payload,
      };

    case actions.VOLVER_EDITAR_FUNCION:
      return {
        ...state,
        editarFuncion: action.payload,
      };

    case actions.VOLVER_SELECCIONAR_ENFERMERA:
      return {
        ...state,
        seleccionarEnfermera: action.payload,
      };

    case actions.CARGAR_FUNCIONES:
      return {
        ...state,
        funciones: action.payload,
      };

    default:
      return state;
  }
}
