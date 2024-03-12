import React, {useState} from 'react'
import "../../styles/ceo/clients.css"

import SearchBox from '../../components/SearchBox'
import FilterBox from '../../components/FilterBox'

function Clients() {

    const [filters, setFilters] = useState({
        option1: {
            opt_1_1: {
                name: "Opt-1-1",
                checked: false
            },
            opt_1_2: {
                name: "Opt-1-2",
                checked: false
            },
            opt_1_3: {
                name: "Opt-1-3",
                checked: false
            },
            opt_1_4: {
                name: "Opt-1-4",
                checked: false
            },
            opt_1_5: {
                name: "Opt-1-5",
                checked: false
            }
        },
        option2: {
            opt_2_1: {
                name: "Opt-2-1",
                checked: false
            },
            opt_2_2: {
                name: "Opt-2-2",
                checked: false
            },
            opt_2_3: {
                name: "Opt-2-3",
                checked: false
            },
            opt_2_4: {
                name: "Opt-2-4",
                checked: false
            },
            opt_2_5: {
                name: "Opt-2-5",
                checked: false
            }
        },
        option3: {
            opt_3_1: {
                name: "Opt-3-1",
                checked: false
            },
            opt_3_2: {
                name: "Opt-3-2",
                checked: false
            },
            opt_3_3: {
                name: "Opt-3-3",
                checked: false
            },
            opt_3_4: {
                name: "Opt-3-4",
                checked: false
            },
            opt_3_5: {
                name: "Opt-3-5",
                checked: false
            }
        },
        option4: {
            opt_4_1: {
                name: "Opt-4-1",
                checked: false
            },
            opt_4_2: {
                name: "Opt-4-2",
                checked: false
            },
            opt_4_3: {
                name: "Opt-4-3",
                checked: false
            },
            opt_4_4: {
                name: "Opt-4-4",
                checked: false
            },
            opt_4_5: {
                name: "Opt-4-5",
                checked: false
            }
        },
        option5: {
            opt_5_1: {
                name: "Opt-5-1",
                checked: false
            },
            opt_5_2: {
                name: "Opt-5-2",
                checked: false
            },
            opt_5_3: {
                name: "Opt-5-3",
                checked: false
            },
            opt_5_4: {
                name: "Opt-5-4",
                checked: false
            },
            opt_5_5: {
                name: "Opt-5-5",
                checked: false
            }
        }
    });

    return (
        <div className="client-container">
            <div className="client-manage">
                <div className="left">
                    <SearchBox name="client"/>
                    <h2 className="filter-heading">Filters:</h2>
                    <FilterBox filters={filters}/>
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