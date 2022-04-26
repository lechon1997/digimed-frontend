import React, { useState } from "react";
import firebaseApp from "../firebase/config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Alert } from "reactstrap";
import { async } from "@firebase/util";

const auth = getAuth(firebaseApp);

const FormLogin = () => {
  const [invalidUser, setInvalidUser] = useState(false);
  const [invalidPass, setInvalidPass] = useState(false);

  const [user] = useAuthState(auth);

  if (user) {
    console.log("logeado");
  } else {
    console.log("no logeado");
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      setInvalidUser(false);
      setInvalidPass(true);
      return false;
    } else {
      setInvalidPass(false);
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      setInvalidUser(true);
    }
  };

  return (
    <div className="login shadow">
      <form
        onSubmit={submitHandler}
        className="d-flex flex-column align-items-center"
      >
        <input
          type="email"
          name="email"
          className="input-lindo mb-4"
          placeholder="Usuario"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />

        <input
          type="password"
          name="password"
          className="input-lindo mb-4"
          placeholder="Contraseña"
          id="exampleInputPassword1"
        />
        <button type="submit" className="btn-ingresar mb-2">
          Ingresar
        </button>
        <Alert isOpen={invalidUser} color="danger">
          El Usuario ingresado no es válido
        </Alert>
        <Alert isOpen={invalidPass} color="danger">
          La contraseña debe tener más de 6 caracteres
        </Alert>
      </form>
    </div>
  );
};

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  return <button onClick={signInWithGoogle}>Sign in with google</button>;
}

export default FormLogin;
