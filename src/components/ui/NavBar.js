import React from "react";

export default function NavBar() {
  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand">Carlos</span>
      <button className="btn btn-danger">
        <span className="fas fa-sign-out-alt"> Salir</span>
      </button>
    </div>
  );
}
