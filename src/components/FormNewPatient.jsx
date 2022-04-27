import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { limpiar } from '../actions/verifyActions';
import {postPaciente} from '../actions/pacienteActions'
import { useNavigate } from 'react-router-dom';

const FormNewPatient = () => {

    const navigate = useNavigate();
    const redirect = useSelector(state =>
      state.paciente.redirect
    );
    useEffect(() => {
      if (redirect) {
        navigate(redirect)
      }
  
  
    }, [redirect])
  const dispatch= useDispatch();
    const submitHandler = (e) => {

        e.preventDefault();
        const name = e.target.name.value;
        const dni = e.target.dni.value;
        const eps = e.target.eps.value;
        const email = e.target.email.value;
        const celular = e.target.celular.value;
        

        if (/^([0-9])*$/.test(name)) {
            window.alert("Solo debe haber letras en el campo nombre");
            return false;
        }
        if (dni.length > 10) {
            window.alert("el dni no debe tener mas diez caracteres");
            return false;
        }
        if (dni.length < 10) {
            window.alert("el dni debe tener al menos diez caracteres");
            return false;
        }
        if (/^([0-9])*$/.test(eps)) {
            window.alert("Solo debe haber letras en el campo eps");
            return false;
        }
        if (!email.trim()) {
            window.alert("el campo email es obligatorio");
            return false;
        }

        if (celular.length > 10) {
            window.alert("el numero no debe tener mas diez caracteres");
            return false;
        }
        if (celular.length < 10) {
            window.alert("el numero debe tener al menos diez caracteres");
            return false;
        }
        dispatch(limpiar())
        dispatch(postPaciente({nombre:name,dni,email,celular,eps}))
    }
    return (
       
            <div className="container shadow p-3 mt-5">
                <form
                    onSubmit={submitHandler}
                    className="d-flex flex-column align-items-center"
                >
                    <input
                        
                        name="name"
                        className="input-lindo mb-4"
                        type="text"
                        pattern="^[A-Za-z]+$"
                        placeholder="Nombre"
                        id="exampleInputName"
                        aria-describedby="nameHelp"
                    />

                    <input
                        type="number"
                        name="dni"
                        className="input-lindo mb-4"
                        placeholder="DNI"
                        id="exampleInputDNI"
                    />


                    <input
                        type="eps"
                        name="eps"
                        className="input-lindo mb-4"
                        placeholder="Nombre EPS"
                        id="exampleInputEPS"
                    />

                    <input
                        type="email"
                        name="email"
                        className="input-lindo mb-4"
                        placeholder="Email"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />


                    <input
                        type="celular"
                        name="celular"
                        className="input-lindo mb-4"
                        placeholder="Celular"
                        id="exampleInputCelular"
                        aria-describedby="celularHelp"
                    />
                    <button type="submit" className="btn-ingresar" >
                        Enviar
                    </button>
                </form>
            </div>
       

    )
}

export default FormNewPatient