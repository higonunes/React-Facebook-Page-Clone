import React from "react";
import "./styles.css";
import logo from "../../assets/logo.png";

function NavBar() {
  return (
    <nav>
      <img src={logo} alt="facebook" />
      <a href="http://google.com">Meu Perfil</a>
    </nav>
  );
}

export default NavBar;
