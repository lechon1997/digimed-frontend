import * as actions from "../actions/verifyActions";

export const initialState = {
  redirect: null,
  paciente: null,

};

export default function verifyReducer(state = initialState, action) {
  switch (action.type) {
    case actions.VERIFICAR_EXISTE_SUCCESS:
      return {
        verificar_existe_success: action.payload,
      };
    case actions.OBTENER_PACIENTE:
      return {
        paciente: action.payload.paciente,
        redirect: action.payload.redirect
      }
    case actions.LIMPIAR_REDIRECT:
      return {
        ...state, redirect: ''

      }
    case actions.CREAR_PACIENTE:
      return{
        paciente:null,
        redirect: action.payload.redirect
      }
    default:
      return state;
  }
}
