import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { buscarDni } from '../actions/verifyActions'
const FormVerifyDNI = () => {


  const navigate = useNavigate();
  const redirect = useSelector(state =>
    state.verifyPaciente.redirect
  );
  useEffect(() => {
    if (redirect) {
      navigate(redirect)
    }


  }, [redirect])

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const dni= e.target.dni.value;
    if (dni.length>10) {
      window.alert("el dni no debe tener mas diez caracteres");
      return false;
    }
    if (dni.length<10) {
      window.alert("el dni debe tener al menos diez caracteres");
      return false;
    }

    dispatch(buscarDni(e.target.dni.value));

  }


  return (
    <div className="login shadow ">
      <form
        onSubmit={submitHandler}
        className="d-flex flex-column align-items-center"
      >
        <input
          type="number"
          name="dni"
          className="input-lindo mb-4"
          placeholder="Ingrese dni"
          id="exampleInputDni1"
          aria-describedby="dniHelp"
        />
        <button type="submit" className="btn-ingresar" onSubmit={submitHandler}>
          Verificar
        </button>
      </form></div>
  )
}

export default FormVerifyDNI