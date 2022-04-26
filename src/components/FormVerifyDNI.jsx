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
    dispatch(buscarDni(e.target.dni.value));

  }


  return (
    <div className="login shadow ">
      <form
        onSubmit={submitHandler}
        className="d-flex flex-column align-items-center"
      >
        <input
          type="dni"
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