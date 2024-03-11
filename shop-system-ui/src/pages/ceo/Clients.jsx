import React, {useState} from 'react'
import "../../styles/ceo/clients.css"

import SearchBox from '../../components/SearchBox'

function Clients() {

    const [opened, setOpened] = useState({
        opt1: false,
        opt2: false,
        opt3: false,
        opt4: false,
        opt5: false
    });

    function toggleFilter(opt) {
        setOpened(prev => ({
            ...prev,
            [opt]: !prev[opt]
        }));
    }

    return (
        <div className="client-container">
            <div className="client-manage">
                <div className="left">
                    <SearchBox name="client"/>
                    <div className="filter-box">
                        <h2>Filters:</h2>
                        <ul>
                            <li className={opened.option1 ? "opened" : "closed"} onClick={() => toggleFilter("option1")}>Option1</li>
                            <li className={opened.option2 ? "opened" : "closed"} onClick={() => toggleFilter("option2")}>Option2</li>
                            <li className={opened.option3 ? "opened" : "closed"} onClick={() => toggleFilter("option3")}>Option3</li>
                            <li className={opened.option4 ? "opened" : "closed"} onClick={() => toggleFilter("option4")}>Option4</li>
                            <li className={opened.option5 ? "opened" : "closed"} onClick={() => toggleFilter("option5")}>Option5</li>
                        </ul>
                        <button className="filter-button" onClick={console.log("filter")}>Filter</button>
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