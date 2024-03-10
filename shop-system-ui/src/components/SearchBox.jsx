import React from 'react'

export default function SearchBox(props) {
    return (
        <div className="search-box">
            <input
                className="search-input"
                type="text"
                id={`${props.name}-search`}
                name={`${props.name}-search`}
                placeholder={`Search for ${props.name}`}/>
            <button className="search-button">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    )
}
