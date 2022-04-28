export const CARGAR_PERSONAL = "CARGAR_PERSONAL";
export const MOSTRAR_MODAL_NUEVO_MIEMBRO = "MOSTRAR_MODAL_NUEVO_MIEMBRO";
export const OCULTAR_MODAL_NUEVO_MIEMBRO = "OCULTAR_MODAL_NUEVO_MIEMBRO";
export const ALERT_NOMBRE = "ALERT_NOMBRE";
export const NUEVO_ENFERMERO = "NUEVO_ENFERMERO";
export const VALID_FORM = "VALID_FORM";
export const ACTUALIZAR_ENFERMERO = "ACTUALIZAR_ENFERMERO";

export const NOMBRE_VACIO = "NOMBRE_VACIO";
export const EMAIL_VACIO = "EMAIL_VACIO";
export const NOMBRE_CORRECTO = "NOMBRE_CORRECTO";
export const ALERT_EMAIL = "ALERT_EMAIL";
export const LIMPIAR_ALERTAS = "LIMPIAR_ALERTAS";

//export const VERIFICAR_CORREO_REPETIDO = "VERIFICAR_CORREO_REPETIDO";

const URL_BASE = "https://app-digimed.herokuapp.com/api";

export function limpiarAlertasAction() {
  return (dispatch) => {
    dispatch({ type: LIMPIAR_ALERTAS });
  };
}

export function CargarPersonal() {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_BASE}/enfermero`);
      const data = await response.json();
      dispatch({ type: CARGAR_PERSONAL, payload: data });
    } catch (error) {
      console.log("error al cargar enfermeros en la app");
    }
  };
}

export function fetchNuevoEnfermero(data) {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_BASE}/enfermero`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      if (res.status == 500) {
        dispatch({ type: ALERT_EMAIL });
      } else {
        dispatch({ type: NUEVO_ENFERMERO, payload: res });
        dispatch({ type: OCULTAR_MODAL_NUEVO_MIEMBRO, payload: false });
        dispatch({ type: LIMPIAR_ALERTAS });
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };
}

export function MostrarModalNuevoMiembro() {
  return (dispatch) => {
    dispatch({ type: MOSTRAR_MODAL_NUEVO_MIEMBRO, payload: true });
  };
}

export function OcultarModalNuevoMiembro() {
  return (dispatch) => {
    dispatch({ type: OCULTAR_MODAL_NUEVO_MIEMBRO, payload: false });
  };
}

export function AlertNombre(data) {
  return (dispatch) => {
    dispatch({ type: ALERT_NOMBRE, payload: data });
  };
}

export function FormularioValido(data) {
  return (dispatch) => {
    dispatch({ type: VALID_FORM, payload: data });
  };
}

export function fetchDisponibilidadEnfermero(id) {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${URL_BASE}/enfermero/disponibilidad/${id}`
      );
      const data = await response.json();
      dispatch({ type: ACTUALIZAR_ENFERMERO, payload: data });
    } catch (error) {
      console.log("error al actualizar disponibilidad del enfermero");
    }
  };
}

export function nombreVacioAction(estado) {
  return (dispatch) => {
    dispatch({ type: NOMBRE_VACIO, payload: estado });
  };
}

export function emailVacioAction(estado) {
  return (dispatch) => {
    dispatch({ type: EMAIL_VACIO, payload: estado });
  };
}

export function alertEmailAction(estado) {
  return (dispatch) => {
    dispatch({ type: ALERT_EMAIL, payload: estado });
  };
}

export function nombreCorrectoAction(estado) {
  return (dispatch) => {
    dispatch({ type: NOMBRE_CORRECTO, payload: estado });
  };
}
