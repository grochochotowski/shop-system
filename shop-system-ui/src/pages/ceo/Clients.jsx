import React, {useState} from 'react'
import "../../styles/ceo/clients.css"

import SearchBox from '../../components/SearchBox'

function Clients() {

    const [opened, setOpened] = useState(false);

    function toggleFilter() {
        setOpened(prev => !prev);
    }

    return (
        <div className="client-container">
            <div className="client-manage">
                <div className="left">
                    <SearchBox name="client"/>
                    <div className="filter-box">
                        <button className="filter-button" onClick={toggleFilter}>Filters</button>
                        <ul className={opened ? "opened" : "closed"}>
                            <li className="closed">Option1</li>
                            <li className="closed">Option2</li>
                            <li className="closed">Option3</li>
                            <li className="closed">Option4</li>
                            <li className="closed">Option5</li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <button className="add-button">Add client</button>    
                </div>                
            </div>
            <div className="client-list">
                <table>
                    <thead>
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
                    </thead>
                    <tbody>
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
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Clients