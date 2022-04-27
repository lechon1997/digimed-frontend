import * as actions from "../actions/diagnosticoActions";


export const initialState = {
    loading: false,
    hasErrors: false,
    diagnostico: null,
    redirect: null
  }

export default function diagnosticoReducer(state = initialState, action) {
    switch (action.type) {
      case actions.LOADING:
        return { ...state, loading: true }
      case actions.LOADED_SUCCESS:
        return { ...state, ...action.payload, loading: false, hasErrors: false }
      case actions.LOADED_FAILURE:
        return { ...state, loading: false, hasErrors: true }
      case actions.LIMPIAR_REDIRECT:
        return { ...state, redirect: null}
      default:
        return state
    }
  }
