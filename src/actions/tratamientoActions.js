const URL_BASE = 'http://localhost:8080'
// const URL_BASE = 'https://app-digimed.herokuapp.com'

export const LOADING_TRATAMIENTO = 'LOADING_TRATAMIENTO'
export const LOADED_SUCCESS_TRATAMIENTO = 'LOADED_SUCCESS_TRATAMIENTO'
export const LOADED_FAILURE_TRATAMIENTO = 'LOADED_FAILURE_TRATAMIENTO'
export const LIMPIAR_REDIRECT = "LIMPIAR_REDIRECT"

export const loading = () => ({ type: LOADING_TRATAMIENTO })

export const success = payload => ({
    type: LOADED_SUCCESS_TRATAMIENTO,
    payload
});

export const failure = () => ({ type: LOADED_FAILURE_TRATAMIENTO })

export function limpiarRedirectTratamiento() {
    return (dispatch) => {
        dispatch({
            type: LIMPIAR_REDIRECT,
        });
    };
}

export function postTratamiento(tratamiento, atencionId) {
    return async (dispatch) => {

        let tratamientoEndpoint = "agregarTratamiento";
        if(tratamiento.fecha !== null){
            tratamientoEndpoint = "agregarTratamientoCita"
        }
        dispatch(loading());
        try {
            const response = await fetch(
                `${URL_BASE}/api/am/${tratamientoEndpoint}/${atencionId}`,
                {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(tratamiento)
                }
            );
            const savedAM = await response.text();
            dispatch(success({redirect: `/`}));
        } catch (error) {
            console.log(error)
            dispatch(failure());
        }
    }
}