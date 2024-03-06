import React from "react";
import "../styles/appHeader.css";
import Logo from "../images/logo.svg";

function Header() {
    return (
        <header className="app-header">
            <img className="app-logo" src={Logo} alt="LOGO" />
            <h3 className="app-language">Eng</h3>
        </header>
    );
}


export default Header;