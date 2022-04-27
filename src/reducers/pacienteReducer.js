import * as actions from "../actions/pacienteActions";


export const initialState = {
  loading: false,
  hasErrors: false,
  paciente: null,
  redirect: null
}

export default function pacienteReducers(state = initialState, action) {
  switch (action.type) {
    case actions.LOADING:
      return { ...state, loading: true }
    case actions.LOADED_SUCCESS:
      return { ...state, ...action.payload, loading: false, hasErrors: false }
    case actions.LOADED_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    case actions.LIMPIAR_REDIRECT:
      return {
        ...state, redirect: ''

      }
    default:
      return state
  }
}
