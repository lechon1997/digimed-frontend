import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate,useParams } from 'react-router-dom';
import {agregarDiagnostico} from '../actions/diagnosticoActions'

const FormDiagnostico = () => {
    const redirect = useSelector((state) => state.diagnostico.redirect);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const {id} = useParams();

    useEffect(() => {
        if (redirect) { navigate(redirect) }
    }, [redirect])

    const cancelHandler = () => {
        navigate("/nuevo-paciente")
    }
    const submitHandler = (e) => {
        e.preventDefault();
        // const medicamentos = e.target.medicamentos;
        const resultados = e.target.resultados.value;

        if (!resultados.trim()) {
            window.alert("resultados es un campo obligatorio");
            return false;
        }

        if (resultados.length > 50) {
            window.alert("50 caracteres maximo para los resultados")
            return false;
        }
        console.log('mi codigo siempre ta raro');
        dispatch(agregarDiagnostico({
            resultados,idPaciente:id
        }))

    }

    return (
        <div className="login shadow d-flex flex-column align-items-center w-100">

            <form
                className="d-flex flex-column align-items-center "onSubmit={submitHandler}
            ><label className="mb-4">Diagnostico</label>

                <input
                    type="resultados"
                    name="resultados"
                    className="input-lindo mb-4"
                    placeholder="Ingrese resultados"
                    id="exampleInputResultados1"
                    aria-describedby="ResultadosHelp"
                />
                <button type="submit" className="btn-ingresar"  >
                    Enviar
                </button>
                <button type="submit" className=" mt-2 btn-ingresar" onClick={cancelHandler}>
                    cancelar
                </button>
            </form>

        </div>
    )
}

export default FormDiagnostico