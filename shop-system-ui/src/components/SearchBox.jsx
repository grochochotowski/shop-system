import React from 'react'

export default function SearchBox(props) {
    return (
        <div className="search-box">
            <input className="search-input" type="text" id="client-search" name="client-search" placeholder="Search for client"/>
            <button className="search-button">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    )
}
