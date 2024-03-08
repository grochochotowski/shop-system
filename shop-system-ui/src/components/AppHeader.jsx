import React from "react";
import {useTranslation} from "react-i18next";

import "../styles/appHeader.css";
import Logo from "../images/logo.svg";

function Header() {  

    const [t, i18n] = useTranslation("global")

    function changelanguage() {
        if (i18n.language === "eng") {
            i18n.changeLanguage("pol");
        } else {
            i18n.changeLanguage("eng");
        }
        console.log(i18n.language);
    }

    return (
        <header className="app-header">
            <img className="app-logo" src={Logo} alt="LOGO" />
            <div className={`app-language ${i18n.language}`} onClick={changelanguage}>
                <div className={`app-language-over ${i18n.language}`}></div>
            </div>
            <button className="app-sign-out">{t("header.button")}</button>
        </header>
    );
}


export default Header;