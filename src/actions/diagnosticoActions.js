const URL_BASE = "https://app-digimed.herokuapp.com/api/am";


export const LOADING = "LOADING";
export const LOADED_SUCCESS = "LOADED_SUCCESS";
export const LOADED_FAILURE = "LOADED_FAILURE";
export const LIMPIAR_REDIRECT = "LIMPIAR_REDIRECT";


export const loading = () => ({ type: LOADING });
export const success = (payload) => ({
    type: LOADED_SUCCESS,
    payload,
});

export const failure = () => ({ type: LOADED_FAILURE });

export function limpiar() {
    return (dispatch) => {
        dispatch({
            type: LIMPIAR_REDIRECT,
        });
    };
}

export function agregarDiagnostico(data) {
    console.log(data);
    return async (dispatch) => {
        dispatch(loading());
        try {
            const response = await fetch(
                `${URL_BASE}/paciente/urlpendiente/${data.id}`,
                {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({

                        diagnostico: {
                            descripcion: data.diagnostico,
                        },
                    }),

                }
            );
            const data = await response.json();
            console.log(data);
            dispatch(success({ redirect: `/paciente/diagnostico/${data.id}` }));
        } catch (error) {
            dispatch(failure());

        } 
    };
}