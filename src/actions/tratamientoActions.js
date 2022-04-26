// const URL_BASE = 'http://localhost:8080'
const URL_BASE = 'https://app-digimed.herokuapp.com'

export const LOADING_TRATAMIENTO = 'LOADING_TRATAMIENTO'
export const LOADED_SUCCESS_TRATAMIENTO = 'LOADED_SUCCESS_TRATAMIENTO'
export const LOADED_FAILURE_TRATAMIENTO = 'LOADED_FAILURE_TRATAMIENTO'

export const loading = () => ({ type: LOADING_TRATAMIENTO })

export const success = payload => ({
    type: LOADED_SUCCESS_TRATAMIENTO,
    payload
});

export const failure = () => ({ type: LOADED_FAILURE_TRATAMIENTO })

export function postTratamiento(tratamiento, atencionId) {
    return async (dispatch) => {
        dispatch(loading());
        try {
            const response = await fetch(
                `${URL_BASE}/api/am/agregarTratamiento/${atencionId}`,
                {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(tratamiento)
                }
            );
            const savedTratamiento = await response.text();
            console.log(savedTratamiento)
            dispatch(success({redirect: `/`}));
        } catch (error) {
            console.log(error)
            dispatch(failure());
        }
    }
}