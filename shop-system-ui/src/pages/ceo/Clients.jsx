import React, {useState, useEffect} from 'react'
import "../../styles/ceo/clients.css"

import SearchBox from '../../components/SearchBox'
import FilterBox from '../../components/FilterBox'

function Clients() {

    const [clients, setClients] = useState([]);
    const [filters, setFilters] = useState([]);

    const names = [
        "Invoice Type",
        "Name",
        "NIP",
        "Address"
        ];

        /*[
            { name: "Opt-1-1", checked: false },
            { name: "Opt-1-2", checked: false },
            { name: "Opt-1-3", checked: false },
            { name: "Opt-1-4", checked: false },
            { name: "Opt-1-5", checked: false }
        ],
        [
            { name: "Opt-2-1", checked: false },
            { name: "Opt-2-2", checked: false },
            { name: "Opt-2-3", checked: false },
            { name: "Opt-2-4", checked: false },
            { name: "Opt-2-5", checked: false }
        ],
        [
            { name: "Opt-3-1", checked: false },
            { name: "Opt-3-2", checked: false },
            { name: "Opt-3-3", checked: false },
            { name: "Opt-3-4", checked: false },
            { name: "Opt-3-5", checked: false }
        ],
        [
            { name: "Opt-4-1", checked: false },
            { name: "Opt-4-2", checked: false },
            { name: "Opt-4-3", checked: false },
            { name: "Opt-4-4", checked: false },
            { name: "Opt-4-5", checked: false }
        ]
    ]);*/

    function setClientsForFilters() {
        
    }

    function changeChecked(opt, elementName) {
        setFilters((prev) => {
            const newFilters = [ ...prev ];
            newFilters[opt] = newFilters[opt].map(element => {
                if (element.name === elementName) {
                    return { ...element, checked: !element.checked };
                }
                return element;
            });
            return newFilters;
        });
    }

    function GenerateClientTable() {
        return (
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
                <tbody>{
                    clients.map(c => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.invoiceType}</td>
                            <td>{c.name}</td>
                            <td>{c.nip}</td>
                            <td>{`
                                ${c.address.country},
                                ${c.address.city},
                                ${c.address.postalCode},
                                ${c.address.street} ${c.address.building}
                                    ${c.address.premises ? "/" + c.address.premises : ""}
                            `}</td>
                            <td>{c.notes}</td>
                        </tr>
                    ))
                }</tbody>
            </table>
        )
    }

    useEffect(() => {
        async function getUserData() {
            const response = await fetch("https://localhost:7057/api/clients/all");
            const data = await response.json();
            setClients(data);
        }
        getUserData();
        setClientsForFilters();
    }, []);

    return (
        <div className="client-container">
            <div className="client-manage">
                <div className="left">
                    <SearchBox name="client"/>
                    <h2 className="filter-heading">Filters:</h2>
                    <FilterBox filters={filters} toggleCheck={changeChecked} names={names} clients={clients}/>
                </div>
                <div className="right">
                    <button className="add-button">Add client</button>    
                </div>                
            </div>
            <div className="client-list">
                <GenerateClientTable />
            </div>
        </div>
    )
}

export default Clients