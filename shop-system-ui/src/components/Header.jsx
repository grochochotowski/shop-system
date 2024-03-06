import React, {useState} from "react";
import "../styles/appHeader.css";
import Logo from "../images/logo.svg";
import Eng from "../images/eng.svg";
import Pol from "../images/pol.svg";

function Header() {
    const [language, setLanguage] = useState("eng");

    function changeLanguage() {
        if (language === "eng") {
            setLanguage("pol");
        } else {
            setLanguage("eng");
        }
    }
    
    return (
        <header className="app-header">
            <img className="app-logo" src={Logo} alt="LOGO" />
            <img
            className="app-language"
            src={language === "eng" ? Eng : Pol}
            alt={language === "eng" ? "eng" : "pol"}
            onClick={() => changeLanguage()}
            />
            <button className="app-log-out">Log out</button>
        </header>
    );
}


export default Header;