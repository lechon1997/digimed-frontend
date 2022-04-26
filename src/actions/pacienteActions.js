import { async } from "@firebase/util";

const URL_BASE = "https://app-digimed.herokuapp.com/api";

export const LOADING = "LOADING";
export const LOADED_SUCCESS = "LOADED_SUCCESS";
export const LOADED_FAILURE = "LOADED_FAILURE";

export const loading = () => ({ type: LOADING });

export const success = (payload) => ({
  type: LOADED_SUCCESS,
  payload,
});

export const failure = () => ({ type: LOADED_FAILURE });

export function postPaciente(paciente) {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const response = await fetch(`${URL_BASE}/paciente`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paciente),
      });
      const data = await response.json();
      console.log(data);
      dispatch(success({ redirect: `/paciente/sintomas/${data.id}` }));
    } catch (error) {
      dispatch(failure());
    }
  };
}

export function agregarSintomas(data) {
  console.log(data);
  return async (dispatch) => {
    dispatch(loading());
    try {
      const response = await fetch(
        `${URL_BASE}/paciente/agendar-cita/${data.id}`,
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fecha: data.fecha,
            sintomas: {
              descripcion: data.descripcion,
            },
          }),
        }
      );
      const res = await response.json();
      console.log("coso actualizado:", res);
    } catch (error) {
      dispatch(failure());
    }
  };
}
