const URL_BASE = "https://app-digimed.herokuapp.com/api";

export const LOADING = "LOADING";
export const LOADED_SUCCESS = "LOADED_SUCCESS";
export const LOADED_FAILURE = "LOADED_FAILURE";
export const LIMPIAR_REDIRECT = "LIMPIAR_REDIRECT";
export const CARGAR_FUNCIONES="CARGAR_FUNCIONES"
export const MOSTRAR_MODAL_NUEVA_FUNCION= "MOSTRAR_MODAL_NUEVA_FUNCION";
export const OCULTAR_MODAL_NUEVA_FUNCION= "OCULTAR_MODAL_NUEVA_FUNCION";
export const VALID_FORM = "VALID_FORM";
export const ALERT_NOMBRE = "ALERT_NOMBRE";
export const ALERT_DESCRIPCION = "ALERT_DESCRIPCION";

export const loading = () => ({ type: LOADING });

export const success = (payload) => ({
    type: LOADED_SUCCESS,
    payload,
});
export function limpiarRedirectFuncion() {
    return (dispatch) => {
        dispatch({
            type: LIMPIAR_REDIRECT,
        });
    };
}
export const failure = () => ({ type: LOADED_FAILURE });


export function CargarFunciones() {
    return async (dispatch) => {
        try {
            const response = await fetch(`${URL_BASE}/funcion`);
            const data = await response.json();
            dispatch({ type: CARGAR_FUNCIONES, payload: data });
        } catch (error) {
            console.log("error al cargar funciones en la app");
        }
    };
}


export function agregarFuncion(data) {
    console.log(data);
    return async (dispatch) => {
        dispatch(loading());
        try {
            const response = await fetch(
                `${URL_BASE}/funcion`,
                {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        nombre: data.nombre,
                        descripcion: data.descripcion,
                    }),
                }
            );
            const res = await response.json();
            console.log("funcion agregada:", res);
        } catch (error) {
            console.log(error)
            dispatch(failure());
        }
    };
}

export function MostrarModalNuevaFuncion() {
    return (dispatch) => {
      dispatch({ type: MOSTRAR_MODAL_NUEVA_FUNCION, payload: true });
    };
  }


  export function OcultarModalNuevaFuncion() {
    return (dispatch) => {
      dispatch({ type: OCULTAR_MODAL_NUEVA_FUNCION, payload: false });
    };
  }
  export function FormularioValido(data) {
    return (dispatch) => {
      dispatch({ type: VALID_FORM, payload: data });
    };
  }

  export function AlertNombre(data) {
    return (dispatch) => {
      dispatch({ type: ALERT_NOMBRE, payload: data });
    };
  }
  
  export function AlertDescripcion(data) {
    return (dispatch) => {
      dispatch({ type: ALERT_DESCRIPCION, payload: data });
    };
  }