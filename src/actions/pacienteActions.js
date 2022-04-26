const URL_BASE = 'http://localhost:8080/api';

export const LOADING = 'LOADING'
export const LOADED_SUCCESS = 'LOADED_SUCCESS'
export const LOADED_FAILURE = 'LOADED_FAILURE'

export const loading = () => ({ type: LOADING })

export const success = payload => ({
    type: LOADED_SUCCESS,
    payload
});

export const failure = () => ({ type: LOADED_FAILURE })




export function postPaciente(paciente) {
    
    return async dispatch => {
        
        dispatch(loading())
        try {
           
            const response = await fetch(`${URL_BASE}/paciente`,
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(paciente)
                }
            )
            const data = await response.json();
            console.log(data)
            dispatch(success({redirect: `/paciente/sintomas/${data.dni}`}));
            
        } catch (error) {
          
            dispatch(failure())
        }
    }
}