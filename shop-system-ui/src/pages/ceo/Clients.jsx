import React, {useState} from 'react'
import "../../styles/ceo/clients.css"

import SearchBox from '../../components/SearchBox'

function Clients() {

    const [opened, setOpened] = useState({
        option1: false,
        option2: false,
        option3: false,
        option4: false,
        option5: false
    });

    function toggleFilter(opt) {
        setOpened(prev => ({
            ...prev,
            [opt]: !prev[opt]
        }));
        console.log(opened);
    }

    return (
        <div className="client-container">
            <div className="client-manage">
                <div className="left">
                    <SearchBox name="client"/>
                    <h2 className="filter-heading">Filters:</h2>
                    <div className="filter-box">
                        <ul className="main">
                            <li className="main">
                                <h4 onClick={() => toggleFilter("option1")}>Option1</h4>
                                <ul className={opened.option1 ? "opened inside" : "closed inside"}>
                                    <li className="inside"><input type="checkbox" name="opt-1-1" id="opt-1-1" />
                                        <label htmlFor="opt-1-1">opt-1-1</label>
                                    </li>
                                    <li className="inside"><input type="checkbox" name="opt-1-2" id="opt-1-2" />
                                        <label htmlFor="opt-1-2">opt-1-1</label>
                                    </li>
                                    <li className="inside"><input type="checkbox" name="opt-1-3" id="opt-1-3" />
                                        <label htmlFor="opt-1-3">opt-1-1</label>
                                    </li>
                                    <li className="inside"><input type="checkbox" name="opt-1-4" id="opt-1-4" />
                                        <label htmlFor="opt-1-4">opt-1-1</label>
                                    </li>
                                    <li className="inside"><input type="checkbox" name="opt-1-5" id="opt-1-5" />
                                        <label htmlFor="opt-1-5">opt-1-1</label>
                                    </li>
                                </ul>
                            </li>
                            <li className={opened.option2 ? "opened main" : "closed main"} onClick={() => toggleFilter("option2")}>Option2</li>
                            <li className={opened.option3 ? "opened main" : "closed main"} onClick={() => toggleFilter("option3")}>Option3</li>
                            <li className={opened.option4 ? "opened main" : "closed main"} onClick={() => toggleFilter("option4")}>Option4</li>
                            <li className={opened.option5 ? "opened main" : "closed main"} onClick={() => toggleFilter("option5")}>Option5</li>
                        </ul>
                        <button className="filter-button">Filter</button>
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