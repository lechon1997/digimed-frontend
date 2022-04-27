import * as actions from "../actions/delegarTareasActions";

export const initialState = {
  seleccionarFuncion: true,
  editarFuncion: false,
  seleccionarEnfermera: false,
};

export default function delegarTareasReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CAMBIAR_ESTADO_SELECCIONAR_FUNCION:
      return {
        ...state,
        seleccionarFuncion: !state.seleccionarFuncion,
      };

    case actions.CAMBIAR_ESTADO_EDITAR_FUNCION:
      return {
        ...state,
        editarFuncion: !state.editarFuncion,
      };

    case actions.CAMBIAR_ESTADO_SELECCIONAR_ENFERMERA:
      return {
        ...state,
        seleccionarEnfermera: !state.seleccionarEnfermera,
      };
    default:
      return state;
  }
}
