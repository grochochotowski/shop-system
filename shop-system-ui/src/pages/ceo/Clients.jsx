import React, {useState, useEffect} from 'react'
import "../../styles/ceo/clients.css"

import SearchBox from '../../components/SearchBox'
import FilterBox from '../../components/FilterBox'

function Clients() {

    const [clients, setClients] = useState([]);

    const names = {
        option1: "Option1",
        option2: "Option2",
        option3: "Option3",
        option4: "Option4",
        option5: "Option5"
    };

    const [filters, setFilters] = useState({
        option1: [
            { name: "Opt-1-1", checked: false },
            { name: "Opt-1-2", checked: false },
            { name: "Opt-1-3", checked: false },
            { name: "Opt-1-4", checked: false },
            { name: "Opt-1-5", checked: false }
        ],
        option2: [
            { name: "Opt-2-1", checked: false },
            { name: "Opt-2-2", checked: false },
            { name: "Opt-2-3", checked: false },
            { name: "Opt-2-4", checked: false },
            { name: "Opt-2-5", checked: false }
        ],
        option3: [
            { name: "Opt-3-1", checked: false },
            { name: "Opt-3-2", checked: false },
            { name: "Opt-3-3", checked: false },
            { name: "Opt-3-4", checked: false },
            { name: "Opt-3-5", checked: false }
        ],
        option4: [
            { name: "Opt-4-1", checked: false },
            { name: "Opt-4-2", checked: false },
            { name: "Opt-4-3", checked: false },
            { name: "Opt-4-4", checked: false },
            { name: "Opt-4-5", checked: false }
        ],
        option5: [
            { name: "Opt-5-1", checked: false },
            { name: "Opt-5-2", checked: false },
            { name: "Opt-5-3", checked: false },
            { name: "Opt-5-4", checked: false },
            { name: "Opt-5-5", checked: false }
        ]
    });

    function changeChecked(option, elementName) {
        setFilters((prev) => {
            const newFilters = { ...prev };
            newFilters[option] = newFilters[option].map(element => {
                if (element.name === elementName) {
                    return { ...element, checked: !element.checked };
                }
                return element;
            });
            return newFilters;
        });
    }

    function GenerateClientTableBody() {
        console.log(clients)
        return (
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Name invoice</td>
                    <td>Sebastian Marczyński</td>
                    <td></td>
                    <td>Poland, Białystok, 15-345, Zachodnia 15A/45</td>
                    <td></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>NIP Invoice</td>
                    <td>Company CO</td>
                    <td>123456789</td>
                    <td>Poland, Białystok, 15-XXX, Wiejska 47</td>
                    <td>Very real company</td>
                </tr>
            </tbody>
        )
    }

    useEffect(() => {
        async function getUserData() {
            const response = await fetch("https://localhost:7057/api/clients/all");
            const data = await response.json();
            setClients(data);
        }
        getUserData();
    }, []);

    return (
        <div className="client-container">
            <div className="client-manage">
                <div className="left">
                    <SearchBox name="client"/>
                    <h2 className="filter-heading">Filters:</h2>
                    <FilterBox filters={filters} toggleCheck={changeChecked} names={names}/>
                </div>
                <div className="right">
                    <button className="add-button">Add client</button>    
                </div>                
            </div>
            <div className="client-list">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Inovice type</th>
                            <th>Name</th>
                            <th>NIP</th>
                            <th>Address</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <GenerateClientTableBody />
                </table>
            </div>
        </div>
    )
}

export default Clients