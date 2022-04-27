const URL_BASE = "https://app-digimed.herokuapp.com/api/";

export const SIGUIENTE_SELECCIONAR_FUNCION = "SIGUIENTE_SELECCIONAR_FUNCION";
export const SIGUIENTE_EDITAR_FUNCION = "SIGUIENTE_EDITAR_FUNCION";
export const VOLVER_EDITAR_FUNCION = "VOLVER_EDITAR_FUNCION";
export const VOLVER_SELECCIONAR_ENFERMERA = "VOLVER_SELECCIONAR_ENFERMERA";
export const CARGAR_FUNCIONES = "CARGAR_FUNCIONES";

export function siguienteSeleccionFuncion() {
  return (dispatch) => {
    dispatch({ type: SIGUIENTE_SELECCIONAR_FUNCION, payload: true });
  };
}

export function siguienteEditarFuncion() {
  return (dispatch) => {
    dispatch({ type: SIGUIENTE_EDITAR_FUNCION, payload: true });
  };
}

export function volverEditarFuncion() {
  return (dispatch) => {
    dispatch({ type: VOLVER_EDITAR_FUNCION, payload: false });
  };
}

export function volverSeleccionarEnfermera() {
  return (dispatch) => {
    dispatch({ type: VOLVER_SELECCIONAR_ENFERMERA, payload: false });
  };
}

export function fetchFunciones() {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_BASE}/funcion`);
      const data = await response.json();
      dispatch({ type: CARGAR_FUNCIONES, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}
