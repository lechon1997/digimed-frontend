const URL_BASE = 'http://localhost:8080'
// const URL_BASE = 'https://app-digimed.herokuapp.com'

export const LOADING_TRATAMIENTO = 'LOADING_TRATAMIENTO'
export const LOADED_SUCCESS_TRATAMIENTO = 'LOADED_SUCCESS_TRATAMIENTO'
export const LOADED_FAILURE_TRATAMIENTO = 'LOADED_FAILURE_TRATAMIENTO'
export const LIMPIAR_REDIRECT = "LIMPIAR_REDIRECT"
export const RESET_FIN_ATENCION = "RESET_FIN_ATENCION"

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

export function postTratamiento(tratamientoCita, atencionId, idPaciente) {
    return async (dispatch) => {
        let redirectUrl = "/";
        if(tratamientoCita.tratamiento.estado === "INGRESADO_HOSPITAL") { redirectUrl = `/delegar-tareas/${idPaciente}` }

        let tratamientoEndpoint = "agregarTratamiento";
        if(tratamientoCita.fecha !== null){
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
                    body: JSON.stringify(tratamientoCita)
                }
            );
            const savedAM = await response.json();
            let finAtencion = savedAM.tratamiento.estado === "DADO_DE_ALTA" ?
                                "DADO_DE_ALTA" : 
                                (savedAM.tratamiento.estado === "INGRESADO_HOSPITAL" ?
                                 "INGRESADO_HOSPITAL" :
                                  null);
            dispatch(success({redirect: redirectUrl , finAtencion }));
        } catch (error) {
            console.log(error)
            dispatch(failure());
        }
    }
}

export function resetFinAtencion() {
    return (dispatch) => {
        dispatch({
            type: RESET_FIN_ATENCION,
        });
    };
}