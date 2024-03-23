import React from 'react'
import {useTranslation} from "react-i18next";

export default function SearchBox(props) {

    const { t } = useTranslation("global")
    
    return (
        <div className="search-box">
            <input
                className="search-input"
                type="text"
                id={`${props.name}-search`}
                name={`${props.name}-search`}
                placeholder={`Search for ${props.name}`}/>
            <button className="search-button">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    )
}
