import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { limpiarRedirectDiagnostico, } from "../actions/diagnosticoActions";
import { limpiarRedirectTratamiento, postTratamiento, resetFinAtencion } from "../actions/tratamientoActions";
import { CSSTransition } from 'react-transition-group';
import '../asset/style/transsitions.css'
import { Form } from "react-bootstrap";
import { Spinner } from "reactstrap";

/**
 * Formulario para registrar los tratamientos.
 * Ingreso desde redireccion desde SintomasPage
 * @returns 
 */

const TratamientoForm = () => {

    let pathParams = useParams();
    const {redirect, finAtencion, hasErrors, loading } = useSelector((state) => state.tratamiento);
    const navigate = useNavigate();
    const {register, handleSubmit, formState: { errors }, watch, setValue, getValues} = useForm();
    const [showCitaCheck, setshowCitaCheck] = useState(false);

    const [ datetime, setDatetime ] = useState(null);
    const [ validateDateContent, setValidateDateContent ] = useState(false);
    const [ validateDatetime, setValidateDatetime ] = useState(false);

    const watchAddCita = watch("addCita", false);
    React.useEffect(() => {
        const subscription = watch((value, { name, type }) => {
                if(value.estado === "DADO_DE_ALTA") {
                    setshowCitaCheck(true);
                }else {
                    setshowCitaCheck(false);
                    setValidateDateContent(false);
                    setDatetime(null);
                };
            }
        )
        return () => subscription.unsubscribe();
      }, [watch]);

    useEffect(() => {
      if(!showCitaCheck){ setValue("addCita", false)}
    }, [showCitaCheck])
    

    const dispatch = useDispatch();

    // MANEJO FORMULARIO CON DATOS PARA EL ENVIO DE LA INFORMACION
    const onSubmit = (data) =>{
        let dateTimeToSend = null;
        if(getValues("addCita")){ dateTimeToSend = datetime }

        const tratamientoCita = {
            fecha: dateTimeToSend,
            tratamiento: {
                estado: data.estado,
                procedimiento: data.procedimiento
            }
        };

        // Validar campo fecha si esta el check de cita
        if(showCitaCheck && getValues("addCita")) {
            setValidateDatetime(false);
            if(!datetime){
                setValidateDatetime(true);
                return
            }
        }

        // Validar campo de tratamiento
        if(!data.procedimiento.trim()){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se permiten espacios en blanco.',
              })
              return;
        }
        dispatch(postTratamiento(tratamientoCita, pathParams.idatencion, pathParams.idPaciente));
    }

    useEffect(() => {
        if(redirect) {navigate(redirect)}  
        
        dispatch(limpiarRedirectDiagnostico());
  
        return () => {
          dispatch(limpiarRedirectTratamiento());
        }
    }, [redirect])
    

    useEffect(() => {
        if(finAtencion === "INGRESADO_HOSPITAL" && !hasErrors){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Atención terminada.\nNotifique al personal de enfermeria.',
                showConfirmButton: false,
                timer: 2000
            })
        }else if(finAtencion === "DADO_DE_ALTA" && !hasErrors){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Atención terminada',
                showConfirmButton: false,
                timer: 1500
            })
        }
        if(hasErrors){
            Swal.fire({
                // position: 'top-end',
                icon: 'error',
                title: 'No se puede terminar la cita correctamente.\nIntente de nuevamente y si falla contacte a soporte.',
                showConfirmButton: true,
                // timer: 1500
            })
        }
        return () => {
            dispatch(resetFinAtencion())
        }
    }, [finAtencion, hasErrors])
    

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
    
    const handleDateChange = (e) => {
        if(e.target.value < new Date().toISOString()){
            setDatetime(new Date().toISOString());
            setValidateDateContent(true);
        }else{
            setDatetime(e.target.value);
            setValidateDateContent(false);
            setValidateDatetime(false);
        }
    }

    return (
        <>
        <div className="mt-3">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="d-flex flex-column align-items-center"
            >
                {
                    loading &&
                    <Spinner 
                        style={{ width: '2rem', height: '2rem' }}
                        children={false}
                    />
                }
                <label htmlFor="procedimiento-text" className="form-label">Tratamiento</label>
                <textarea
                    {...register("procedimiento", { required: true,})}
                    className="textAreaBonita"
                    id="procedimiento-text"
                    placeholder="Ingrese el proceder del tratamiento..."
                    rows="6"
                    required
                />
                <h3 className="mt-4">Seleccionar como proseguir con la atención:</h3>
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
                    Dar de alta al paciente
                </label>
                <label htmlFor="estado-remitido">
                    <input
                        {...register("estado", { required: true,})}
                        type="radio"
                        name="estado"
                        value="REMITIDO"
                        id="estado-remitido"
                    />
                    Remitir a otra entidad
                </label>
                {errors.estado && <p style={{color: "red", fontSize: "12px"}} id="validar-estado">"Debe seleccionar una opcion"</p>}
                <hr/>
                <Form.Check 
                    disabled={!showCitaCheck}
                    {...register("addCita")}
                    type="switch"
                    label="Adicionar cita"
                    id="agregar-cita"
                />
                <CSSTransition
                    in={watchAddCita}
                    timeout={500}
                    classNames="alert"
                    unmountOnExit
                >
                            <div className="d-flex flex-column align-items-center mt-5">
                                <p>Programar cita</p>
                                <input
                                    id="fecha-cita"
                                    type="datetime-local"
                                    name="fechaCita"
                                    className="mb-2 mt-1"
                                    min={new Date()}
                                    onChange={handleDateChange}
                                />
                                {validateDatetime && <p style={{color: "red", fontSize: "12px"}} id="validar-fecha">"Debe seleccionar una fecha"</p>}
                                {validateDateContent && <p style={{color: "red", fontSize: "12px"}} id="validar-fecha-posterior">"La fecha debe ser posterior a la actual"</p>}
                            </div>
                </CSSTransition>
                <button id="enviar-tratamiento" type="submit" className="btn-fin-atencion mt-5" disabled={loading}>
                    Fin Atención
                </button>
            </form>
            <div className="d-flex flex-column align-items-center mt-3">
                <button id="cancelar-tratamiento" className="btn-cancelar-atencion" onClick={cancelHandler} disabled={loading}>
                    Cancelar
                </button>
            </div>
        </div>
        </>
    )
}

export default TratamientoForm