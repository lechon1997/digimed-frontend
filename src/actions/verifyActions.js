const URL_BASE = "http://localhost:8080/api";

export const VERIFICAR_EXISTE = "VERIFICAR_EXISTE";
export const VERIFICAR_EXISTE_SUCCESS = "VERIFICAR_EXISTE_SUCCESS";
export const VERIFICAR_EXISTE_FAILURE = "VERIFICAR_EXISTE_FAILURE";
export const CREAR_PACIENTE = "CREAR_PACIENTE";
export const OBTENER_PACIENTE = "OBTENER_PACIENTE";
export const LIMPIAR_REDIRECT = "LIMPIAR_REDIRECT";
export const verificardni = () => ({ type: VERIFICAR_EXISTE });

export const success = (payload) => ({
  type: VERIFICAR_EXISTE_SUCCESS,
  payload,
});

export const failure = () => ({ type: VERIFICAR_EXISTE_FAILURE });
export function limpiar() {
  return (dispatch) => {
    dispatch({
      type: LIMPIAR_REDIRECT,
    });
  };
}
export function buscarDni(dni) {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_BASE}/paciente/DNI/${dni}`);
      const data = await response.json();
      if (data.dni !== null) {
        console.log("de aqui se va para el otro formulario");
        dispatch({
          type: OBTENER_PACIENTE,
          payload: {
            paciente: data,
            redirect: `/paciente/sintomas/${data.id}`,
          },
        });
      }
      if (data.dni == null) {
        console.log("de aqui se va a registrar");
        dispatch({
          type: CREAR_PACIENTE,
          payload: { redirect: "/nuevo-paciente" },
        });
      }
    } catch (error) {
      console.log(error);
      dispatch(failure());
    }
  };
}
