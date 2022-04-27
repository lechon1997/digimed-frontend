const URL_BASE = "https://app-digimed.herokuapp.com/api/";

export const CAMBIAR_ESTADO_SELECCIONAR_FUNCION =
  "CAMBIAR_ESTADO_SELECCIONAR_FUNCION";
export const CAMBIAR_ESTADO_EDITAR_FUNCION = "CAMBIAR_ESTADO_EDITAR_FUNCION";
export const CAMBIAR_ESTADO_SELECCIONAR_ENFERMERA =
  "CAMBIAR_ESTADO_SELECCIONAR_ENFERMERA";

export function cambiarEstadoSeleccionFuncion() {
  return (dispatch) => {
    dispatch({ type: CAMBIAR_ESTADO_SELECCIONAR_FUNCION });
  };
}

export function cambiarEstadoEditarFuncion() {
  return (dispatch) => {
    dispatch({ type: CAMBIAR_ESTADO_EDITAR_FUNCION });
  };
}

export function cambiarEstadoSeleccionarEnfermera() {
  return (dispatch) => {
    dispatch({ type: CAMBIAR_ESTADO_SELECCIONAR_ENFERMERA });
  };
}
