import React from "react";

const Header = ({ user, auth }) => {
  return (
    <header className="bg-primary d-flex justify-content-between align-items-center header pe-2">
      <div className="fondo-logo">
        <a class="navbar-brand " href="/">
          <img className="imagen-xd" src="./digimed.png" />
        </a>
      </div>
      <div>
        {user && (
          <button
            onClick={() => {
              auth.signOut();
            }}
            className="cerrar-sesion"
          >
            Cerrar sesión
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
