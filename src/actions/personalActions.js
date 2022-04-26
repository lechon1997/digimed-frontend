export const CARGAR_PERSONAL = "CARGAR_PERSONAL";
export const MOSTRAR_MODAL_NUEVO_MIEMBRO = "MOSTRAR_MODAL_NUEVO_MIEMBRO";
export const OCULTAR_MODAL_NUEVO_MIEMBRO = "OCULTAR_MODAL_NUEVO_MIEMBRO";
export const ALERT_NOMBRE = "ALERT_NOMBRE";
export const ALERT_EMAIL = "ALERT_EMAIL";
export const NUEVO_ENFERMERO = "NUEVO_ENFERMERO";
export const VALID_FORM = "VALID_FORM";
export const ACTUALIZAR_ENFERMERO = "ACTUALIZAR_ENFERMERO";

const URL_BASE = "http://localhost:8080/api";

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
      dispatch({ type: NUEVO_ENFERMERO, payload: res });
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

export function AlertEmail(data) {
  return (dispatch) => {
    dispatch({ type: ALERT_EMAIL, payload: data });
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
