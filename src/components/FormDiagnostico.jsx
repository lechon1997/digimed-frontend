import React from 'react'
import { useDispatch } from 'react-redux';
import diagnosticoReducer from '../reducers/DiagnosticoReducer';

const FormDiagnostico = () => {
    const submitHandler = (e) => {
        e.preventDefault();
        const medicamentos = e.target.medicamentos.value;
        const resultados = e.target.resultados.value;

        if (!medicamentos.trim()) {
            window.alert("medicamentos es un campo obligatorio");
            return false;
        }
        if (!resultados.trim()) {
            window.alert("resultados es un campo obligatorio");
            return false;
        }

        if (medicamentos.length > 50) {
            window.alert("50 caracteres maximo para los medicamentos")
            return false;
        }
        
        if (resultados.length > 50) {
            window.alert("50 caracteres maximo para los resultados") 
            return false;
        }


    }
    const dispatch = useDispatch();
    return (
        <div className="login shadow d-flex flex-column align-items-center w-100">

            <form
                onSubmit={submitHandler}
                className="d-flex flex-column align-items-center "
            ><label className="mb-4">Diagnostico</label>
                <input
                    type="medicamentos"
                    name="medicamentos"
                    className="input-lindo mb-4"
                    placeholder="Ingrese medicamentos"
                    id="exampleInputMedicamentos1"
                    aria-describedby="medicamentosHelp"
                />
                <input
                    type="resultados"
                    name="resultados"
                    className="input-lindo mb-4"
                    placeholder="Ingrese resultados"
                    id="exampleInputResultados1"
                    aria-describedby="ResultadosHelp"
                />
                <button type="submit" className="btn-ingresar" >
                    Enviar
                </button>
                <button type="submit" className=" mt-2 btn-ingresar" >
                    cancelar
                </button>
            </form>

        </div>
    )
}

export default FormDiagnostico