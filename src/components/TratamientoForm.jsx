import React, { useEffect } from "react";
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { postTratamiento } from "../actions/tratamientoActions";


const TratamientoForm = () => {

    let pathParams = useParams();
    const redirect = useSelector((state) => state.tratamiento.redirect);
    const navigate = useNavigate();
    const {register, handleSubmit, formState: { errors },} = useForm();

    const dispatch = useDispatch();

    const onSubmit = (data) =>{
        console.log(data.procedimiento);
        console.log(pathParams.idatencion);
        dispatch(postTratamiento(data, pathParams.idatencion));
    }

    useEffect(() => {
      if(redirect) {navigate(redirect)}    
    }, [redirect])

    const cancelHandler = () => {

        Swal.fire({
            title: 'Quiere realmente cancelar el proceso?',
            showDenyButton: true,
            confirmButtonText: 'Si',
            denyButtonText: `No, continuar.`,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Atencion terminada', '', 'info')
              navigate("/nuevo-paciente")
            } else if (result.isDenied) {
              return
            }
          })
    }
    

    return (
        <>
        <div className="mt-3">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="d-flex flex-column align-items-center"
            >
                <label htmlFor="procedimiento-text" className="form-label">Tratamiento</label>
                <textarea
                    {...register("procedimiento", { required: true,})}
                    id="procedimiento-text"
                    placeholder="Ingrese el proceder del tratamiento..."
                    rows="6"
                    required
                />
                <h5 className="mt-4">Seleccionar como proseguir con la atencion:</h5>
                <label htmlFor="estado-ingresado">
                    <input
                        {...register("estado", { required: true,})}
                        type="radio"
                        name="estado"
                        value="INGRESADO_HOSPITAL"
                        id="estado-ingresado"
                    />
                    Ingresar
                </label>
                <label htmlFor="estado-alta">
                    <input
                        {...register("estado", { required: true,})}
                        type="radio"
                        name="estado"
                        value="DADO_DE_ALTA"
                        id="estado-alta"
                    />
                    Dar de alta
                </label>
                <label htmlFor="estado-remitido">
                    <input
                        {...register("estado", { required: true,})}
                        type="radio"
                        name="estado"
                        value="REMITIDO"
                        id="estado-remitido"
                    />
                    Remitir a otra institucion
                </label>
                {errors.estado && <p style={{color: "red", fontSize: "12px"}}>"Debe seleccionar una opcion"</p>}
                <button id="enviar-tratamiento" type="submit" className="btn-ingresar mt-5">
                    Enviar
                </button>
            </form>
            <div className="d-flex flex-column align-items-center mt-5">
                <button id="cancelar-tratamiento" className="btn-cancelar" onClick={cancelHandler}>
                    Cancelar
                </button>
            </div>
        </div>
        </>
    )
}

export default TratamientoForm