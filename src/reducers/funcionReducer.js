import * as actions from "../actions/funcionActions";


export const initialState = {
  funciones: [],
  isOpenModalNuevaFuncion: false,
  alertNombre: {
    value: "",
    isOpen: false,
  },
  alertDescripcion: {
    value: "",
    isOpen: false,
  },
  validForm: {
    value: "",
    showAlert: false,
  },
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
    case actions.ALERT_NOMBRE:
      return {
        ...state,
        alertName: {
          value: action.payload.value,
          isOpen: action.payload.isOpen,
        },
      };
    case actions.ALERT_DESCRIPCION:
      return{
        ...state,
        alertDescripcion:{
          value: actions.payload.value,
          isOpen: actions.payload.isOpen,
        }
      }
      case actions.VALID_FORM:
        return {
          ...state,
          validForm: {
            value: action.payload.value,
            showAlert: action.payload.showAlert,
          },
        };
    case actions.MOSTRAR_MODAL_NUEVA_FUNCION:
    case actions.OCULTAR_MODAL_NUEVA_FUNCION:
      return {
        ...state,
        isOpenModalNuevaFuncion: action.payload,
      };
      case actions.CARGAR_FUNCIONES:
        return {
          ...state,
          funciones: action.payload,
        };
    
    default:
      return state
  }

}
