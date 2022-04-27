const URL_BASE = "https://app-digimed.herokuapp.com/api";

export const LOADING = "LOADING";
export const LOADED_SUCCESS = "LOADED_SUCCESS";
export const LOADED_FAILURE = "LOADED_FAILURE";
export const LIMPIAR_REDIRECT = "LIMPIAR_REDIRECT";


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
