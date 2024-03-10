import React from 'react'
import "../../styles/ceo/clients.css"

import SearchBox from '../../components/SearchBox'

function Clients() {
    return (
        <div className="main-container">
            <div className="options">
                <input className="search-box" type="text" id="client-search" name="client-search" placeholder="Search for client"/>
                <SearchBox name="client"/>
            </div>
            <div className="client-list">
                <table>
                    <tr>
                        <th rowSpan="2">Inovice type</th>
                        <th colSpan="3">Name</th>
                        <th rowSpan="2">NIP</th>
                    </tr>
                    <tr>
                        <th>First name</th>
                        <th>Second name</th>
                        <th>Last name</th>
                    </tr>
                    <tr>
                        <td>Name invoice</td>
                        <td>John</td>
                        <td></td>
                        <td>Smith</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>NIP invoice</td>
                        <td colSpan="3">Work CO.</td>
                        <td>12345678</td>
                    </tr>

                </table>
            </div>
        </div>
    )
}

export default Clients