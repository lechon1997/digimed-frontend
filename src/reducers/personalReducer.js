import * as actions from "../actions/personalActions";

export const initialState = {
  nombreVacio: false,
  nombreCorrecto: false,
  emailVacio: false,
  alertEmail: false,

  personal: [],
  isOpenModalNuevoMiembro: false,
  alertNombre: {
    value: "",
    isOpen: false,
  },
  validForm: {
    value: "",
    showAlert: false,
  },
};

export default function personalReducer(state = initialState, action) {
  switch (action.type) {
    case actions.LIMPIAR_ALERTAS:
      return {
        ...state,
        nombreVacio: false,
        nombreCorrecto: false,
        emailVacio: false,
        alertEmail: false,
      };
    case actions.NOMBRE_VACIO:
      return {
        ...state,
        nombreVacio: action.payload,
      };

    case actions.EMAIL_VACIO:
      return {
        ...state,
        emailVacio: action.payload,
      };

    case actions.NOMBRE_CORRECTO:
      return {
        ...state,
        nombreCorrecto: action.payload,
      };

    case actions.ALERT_EMAIL:
      return {
        ...state,
        alertEmail: action.payload,
      };

    case actions.CARGAR_PERSONAL:
      return {
        ...state,
        personal: action.payload,
      };
    case actions.MOSTRAR_MODAL_NUEVO_MIEMBRO:
    case actions.OCULTAR_MODAL_NUEVO_MIEMBRO:
      return {
        ...state,
        isOpenModalNuevoMiembro: action.payload,
      };
    case actions.ALERT_NOMBRE:
      return {
        ...state,
        alertNombre: {
          value: action.payload.value,
          isOpen: action.payload.isOpen,
        },
      };
    case actions.NUEVO_ENFERMERO:
      return {
        ...state,
        personal: [...state.personal, action.payload],
      };
    case actions.VALID_FORM:
      return {
        ...state,
        validForm: {
          value: action.payload.value,
          showAlert: action.payload.showAlert,
        },
      };
    case actions.ACTUALIZAR_ENFERMERO:
      return {
        ...state,
        personal: [
          ...state.personal.map((p) => {
            if (p.id === action.payload.id) {
              return action.payload;
            }
            return p;
          }),
        ],
      };
    default:
      return state;
  }
}
