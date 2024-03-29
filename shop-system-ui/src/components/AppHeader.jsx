import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "../styles/appHeader.css";
import Logo from "../images/logo.svg";

function Header() {  

    const [headerPos, setHeaderPos] = useState(0); // 1-open, 0-close
    const [t, i18n] = useTranslation("global")

    useEffect(() => {
        function handleClickOutside(event) {
            const header = document.querySelector(".app-header");
            if (header && !header.contains(event.target)) {
                setHeaderPos(0);
            }
        }
        
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    function changelanguage() {
        if (i18n.language === "eng") {
            i18n.changeLanguage("pol");
        } else {
            i18n.changeLanguage("eng");
        }
    }

    function toggleHeaderPos() {
        setHeaderPos(prev => {
            if (prev === 1) return 0
            return 1
        })
    }

    return (
        <header className={headerPos === 1 ? "app-header" : "app-header hidden"}>
            <Link className="app-logo" to="/dashboard">
                <img className="app-logo" src={Logo} alt="LOGO" />
            </Link>
            <div className={`app-language ${i18n.language}`} onClick={changelanguage}>
                <div className={`app-language-over ${i18n.language}`}></div>
            </div>
            <button className="button app-sign-out">{t("header.button")}</button>
            <div className="toggle" onClick={() => toggleHeaderPos()}>
                {headerPos === 1 ? <i className="fa-solid fa-chevron-up toggle-icon"></i> : <i className="fa-solid fa-chevron-down toggle-icon"></i>}
            </div>
        </header>
    );
}


export default Header;