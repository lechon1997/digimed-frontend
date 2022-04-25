import React from "react";
import firebaseApp from "../firebase/config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const auth = getAuth(firebaseApp);

const FormLogin = () => {
  const [user] = useAuthState(auth);

  if (user) {
    console.log("logeado");
  } else {
    console.log("no logeado");
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      window.alert("la contraseña debe tener más de 6 caracteres");
      return false;
    }

    try {
      const res = signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      window.alert("usuario incorrecto");
    }
  };

  return (
    <div className="login shadow ">
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
        <button type="submit" className="btn-ingresar">
          Ingresar
        </button>
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
