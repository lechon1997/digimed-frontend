const URL_BASE = "https://app-digimed.herokuapp.com/api/am";
// const URL_BASE ="http://localhost:8080/api/am";

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

export function limpiarRedirectDiagnostico() {
    return (dispatch) => {
        dispatch({
            type: LIMPIAR_REDIRECT,
        });
    };
}

export function agregarDiagnostico(data) {
    console.log(data);
    return async (dispatch) => {
        console.log('entre')
        dispatch(loading());
        try {
            const response = await fetch(
                `${URL_BASE}`,
                {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        doctorID: "1",
                        pacienteID: data.idPaciente,
                        diagnostico: {
                             medicamentos: "paracetamol",
                             resultados: data.resultados
                        },
                    }),

                }
            );
            const res = await response.json();
            console.log(res);
            dispatch(success({ redirect: `/atencion/tratamiento/${res.id}/${res.pacienteID}` }));
        } catch (error) {
            console.log(error);
            dispatch(failure());

        } 
    };
}