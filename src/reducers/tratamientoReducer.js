import * as actions from '../actions/tratamientoActions'


export const initialState = {
    loading: true,
    hasErrors: false,
    redirect: null,
  }

  export default function tratamientoReducer(state = initialState, action) {
    switch (action.type) {
      case actions.LOADING_TRATAMIENTO:
        return { ...state, loading: true }
      case actions.LOADED_SUCCESS_TRATAMIENTO:
        return { ...state, ...action.payload, loading: false, hasErrors: false }
      case actions.LOADED_FAILURE_TRATAMIENTO:
        return { ...state, loading: false, hasErrors: true }
      default:
        return state
    }
  }