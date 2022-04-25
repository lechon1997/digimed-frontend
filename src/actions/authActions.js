import { async } from "@firebase/util";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const CARGANDO_USUARIO = "CARGANDO_USUARIO";

export function CargandoUsuario() {
  return (dispatch) => {
    dispatch({ type: CARGANDO_USUARIO, payload: true });
  };
}

export function UsuarioCargado() {
  return (dispatch) => {
    dispatch({ type: CARGANDO_USUARIO, payload: false });
  };
}
