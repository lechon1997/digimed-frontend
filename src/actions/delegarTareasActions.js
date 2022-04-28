const URL_BASE = "https://app-digimed.herokuapp.com/api/";

export const SIGUIENTE_SELECCIONAR_FUNCION = "SIGUIENTE_SELECCIONAR_FUNCION";
export const SIGUIENTE_EDITAR_FUNCION = "SIGUIENTE_EDITAR_FUNCION";
export const VOLVER_EDITAR_FUNCION = "VOLVER_EDITAR_FUNCION";
export const VOLVER_SELECCIONAR_ENFERMERA = "VOLVER_SELECCIONAR_ENFERMERA";
export const CARGAR_FUNCIONES = "CARGAR_FUNCIONES";
export const CARGAR_ENFERMERAS = "CARGAR_ENFERMERAS";
export const SELECCIONAR_FUNCION = "SELECCIONAR_FUNCION";
export const SELECCIONAR_ENFERMERA = "SELECCIONAR_ENFERMERA";
export const EDITAR_NOMBRE_FUNCION = "EDITAR_NOMBRE_FUNCION";
export const EDITAR_DESCRIPCION_FUNCION = "EDITAR_DESCRIPCION_FUNCION";
export const ENVIAR_NOTIFICACION_ENFERMERA = "ENVIAR_NOTIFICACION_ENFERMERA";
export const ACTUALIZAR_FUNCION = "ACTUALIZAR_FUNCION";
export const LIMPIAR_STORE_DELEGAR = "LIMPIAR_STORE_DELEGAR";
export const ALERTA_NOMBRE = "ALERTA_NOMBRE";

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

export function seleccionarFuncion(funcion) {
  return (dispatch) => {
    dispatch({ type: SELECCIONAR_FUNCION, payload: funcion });
  };
}

export function seleccionarEnfermera(enfermera) {
  return (dispatch) => {
    dispatch({ type: SELECCIONAR_ENFERMERA, payload: enfermera });
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

export function fetchEnfermeras() {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_BASE}/enfermero`);
      const data = await response.json();
      dispatch({ type: CARGAR_ENFERMERAS, payload: data });
    } catch (errores) {
      console.log(errores);
    }
  };
}

export function fetchEnviarNotificacionEnfermera(data) {
  console.log(data);
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_BASE}/enfermero/notificationemail`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          enfermeroId: data.enfermero.id,
          funcion: data.funcion,
          pacienteDNI: data.pacienteDNI,
        }),
      });
      const res = await response.json();
      //dispatch({ type: ENVIAR_NOTIFICACION_ENFERMERA });
    } catch (errores) {
      console.log(errores);
    }
  };
}

export function fetchActualizarFuncion(funcion) {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_BASE}/funcion`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(funcion),
      });
      const res = await response.json();
      console.log("la nueva funcion: ", res);
      dispatch({ type: ACTUALIZAR_FUNCION, payload: res });
    } catch (e) {
      console.log(e);
    }
  };
}

export function editarNombreFuncion(nombre) {
  return (dispatch) => {
    dispatch({ type: EDITAR_NOMBRE_FUNCION, payload: nombre });
  };
}

export function editarDescripcionFuncion(descripcion) {
  return (dispatch) => {
    dispatch({ type: EDITAR_DESCRIPCION_FUNCION, payload: descripcion });
  };
}

export function limpiarEstadoStoreDelegar() {
  return (dispatch) => {
    dispatch({ type: LIMPIAR_STORE_DELEGAR });
  };
}

export function alertaNombre(data) {
  return (dispatch) => {
    dispatch({ type: ALERTA_NOMBRE, payload: data });
  };
}
