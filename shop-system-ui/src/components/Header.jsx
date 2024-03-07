import React, {useState} from "react";
import "../styles/appHeader.css";
import Logo from "../images/logo.svg";

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
            <div
                className={`app-language ${language}`}
                onClick={() => changeLanguage()}
            /><div/>
            <button className="app-log-out">Log out</button>
        </header>
    );
}


export default Header;