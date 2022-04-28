import * as actions from '../actions/tratamientoActions'


export const initialState = {
    loading: true,
    hasErrors: false,
    redirect: null,
    finAtencion: null,
  }

  export default function tratamientoReducer(state = initialState, action) {
    switch (action.type) {
      case actions.LOADING_TRATAMIENTO:
        return { ...state, loading: true }
      case actions.LOADED_SUCCESS_TRATAMIENTO:
        return { ...state, ...action.payload, loading: false, hasErrors: false, finAtencion: action.payload.finAtencion }
      case actions.LOADED_FAILURE_TRATAMIENTO:
        return { ...state, loading: false, hasErrors: true, finAtencion:null }
      case actions.LIMPIAR_REDIRECT:
        return { ...state, redirect: null, hasErrors: false, loading: false}
      case actions.RESET_FIN_ATENCION:
        return { ...state, finAtencion: null}
      default:
        return state
    }
  }