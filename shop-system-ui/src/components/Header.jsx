import React, {useState} from "react";
import "../styles/appHeader.css";
import Logo from "../images/logo.svg";
import Eng from "../images/eng.svg";
import Pol from "../images/pol.svg";

function Header() {
    const [language, setLanguage] = useState("eng");

    const EngLanguageStyle = {
        "background": "black",
        "background-position": "top",
    }
    const PolLanguageStyle = {
        "background": "green",
        "background-position": "top",
    }

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
            <div
            className="app-language"
            style={language === "eng" ? EngLanguageStyle : PolLanguageStyle}
            onClick={() => changeLanguage()}
            /><div/>
            <button className="app-log-out">Log out</button>
        </header>
    );
}


export default Header;