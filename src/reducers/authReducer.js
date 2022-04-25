import * as actions from "../actions/authActions";

export const initialState = {
  cargando_usuario: true,
  usuario_cargado: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CARGANDO_USUARIO:
      return {
        cargando_usuario: action.payload,
      };
    default:
      return state;
  }
}
