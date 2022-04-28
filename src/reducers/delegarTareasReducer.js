import * as actions from "../actions/delegarTareasActions";

export const initialState = {
  seleccionarFuncion: true,
  editarFuncion: false,
  seleccionarEnfermera: false,
  funciones: [],
  enfermeras: [],
  funcionSeleccionada: {
    funcion: null,
    seleccionada: false,
  },
  enfermeraSeleccionada: {
    enfermera: null,
    seleccionada: false,
  },
  nombreFuncionCache: "",
  descripcionFuncionCache: "",
  alertaNombre: {
    value: "",
    isOpen: false,
  },
};

export default function delegarTareasReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SIGUIENTE_SELECCIONAR_FUNCION:
      return {
        ...state,
        seleccionarFuncion: false,
        editarFuncion: true,
        seleccionarEnfermera: false,
      };

    case actions.SIGUIENTE_EDITAR_FUNCION:
      return {
        ...state,
        seleccionarFuncion: false,
        editarFuncion: false,
        seleccionarEnfermera: true,
      };

    case actions.VOLVER_EDITAR_FUNCION:
      return {
        ...state,
        seleccionarFuncion: true,
        editarFuncion: false,
        seleccionarEnfermera: false,
      };

    case actions.VOLVER_SELECCIONAR_ENFERMERA:
      return {
        ...state,
        seleccionarEnfermera: false,
        seleccionarFuncion: false,
        editarFuncion: true,
      };

    case actions.CARGAR_FUNCIONES:
      return {
        ...state,
        funciones: action.payload,
      };

    case actions.SELECCIONAR_FUNCION:
      return {
        ...state,
        funcionSeleccionada: {
          funcion: action.payload,
          seleccionada: true,
        },
        nombreFuncionCache: action.payload.nombre,
        descripcionFuncionCache: action.payload.descripcion,
      };

    case actions.SELECCIONAR_ENFERMERA:
      return {
        ...state,
        enfermeraSeleccionada: {
          enfermera: action.payload,
          seleccionada: true,
        },
      };

    case actions.EDITAR_NOMBRE_FUNCION:
      return {
        ...state,
        nombreFuncionCache: action.payload,
      };

    case actions.EDITAR_DESCRIPCION_FUNCION:
      return {
        ...state,
        descripcionFuncionCache: action.payload,
      };

    case actions.CARGAR_ENFERMERAS:
      return {
        ...state,
        enfermeras: action.payload,
      };

    case actions.ACTUALIZAR_FUNCION:
      return {
        ...state,
        funciones: [
          ...state.funciones.map((f) => {
            if (f.id === action.payload.id) {
              return action.payload;
            }
            return f;
          }),
        ],
        funcionSeleccionada: {
          funcion: action.payload,
          seleccionada: true,
        },
      };

    case actions.ALERTA_NOMBRE:
      return {
        ...state,
        alertaNombre: {
          value: action.payload.value,
          isOpen: action.payload.isOpen,
        },
      };

    case actions.LIMPIAR_STORE_DELEGAR:
      return initialState;

    default:
      return state;
  }
}
