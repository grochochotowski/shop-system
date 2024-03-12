import React, {useState} from 'react'
import "../../styles/ceo/clients.css"

import SearchBox from '../../components/SearchBox'
import FilterBox from '../../components/FilterBox'

function Clients() {

    const [opened, setOpened] = useState({
        option1: false,
        option2: false,
        option3: false,
        option4: false,
        option5: false
    });

    const [filters, setFilters] = useState({
        option1: {
            opt_1_1: false,
            opt_1_2: false,
            opt_1_3: false,
            opt_1_4: false,
            opt_1_5: false,
        },
        option2: {
            opt_2_1: false,
            opt_2_2: false,
            opt_2_3: false,
            opt_2_4: false,
            opt_2_5: false,
        },
        option3: {
            opt_3_1: false,
            opt_3_2: false,
            opt_3_3: false,
            opt_3_4: false,
            opt_3_5: false,
        },
        option4: {
            opt_4_1: false,
            opt_4_2: false,
            opt_4_3: false,
            opt_4_4: false,
            opt_4_5: false,
        },
        option5: {
            opt_5_1: false,
            opt_5_2: false,
            opt_5_3: false,
            opt_5_4: false,
            opt_5_5: false,
        },
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
                    <FilterBox filters={filters} opened={opened} toggleFilter={toggleFilter}/>
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