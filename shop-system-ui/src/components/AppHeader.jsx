import React from "react";
import {useTranslation} from "react-i18next";

import "../styles/appHeader.css";
import Logo from "../images/logo.svg";

function Header() {  

    const [t, i18n] = useTranslation("global")

    function changeLanguage() {
        if (language === "eng") {
            setLanguage("pol");
        } else {
            setLanguage("eng");
        }
        console.log(language);
    }

    return (
        <header className="app-header">
            <img className="app-logo" src={Logo} alt="LOGO" />
            <div className={`app-language ${language}`} onClick={changelanguage}>
                <div className={`app-language-over ${language}`}></div>
            </div>
            <button className="app-sign-out">{t("header.button")}</button>
        </header>
    );
}


export default Header;