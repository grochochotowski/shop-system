import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useTranslation} from "react-i18next";
import "../../../styles/ceo/clients.css"

import SearchBox from '../../../components/SearchBox'
import FilterBox from '../../../components/FilterBox'

function Clients() {

    const { t } = useTranslation("global")

    const [clients, setClients] = useState([]);
    const [filters, setFilters] = useState([])
    const names = [
        t("clients.main.f-opt-invoice"),
        t("clients.main.f-opt-name"),
        t("clients.main.f-opt-nip"),
        t("clients.main.f-opt-address")
    ];
    const [sort, setSort] = useState(["invoice-type", "asc"]);

    useEffect(() => {
        var filterValues = {
            InvoiceType: new Set(),
            Name: new Set(),
            Nip: new Set(),
            Address: new Set()
        };
    
        filterValues.Nip.add('none');

        clients.forEach(client => {
            filterValues.InvoiceType.add(client.invoiceType);
            filterValues.Name.add(client.name);
            filterValues.Nip.add(client.nip);
            filterValues.Address.add(`${client.address.country}, ${client.address.city}, ${client.address.postalCode}, ${client.address.street} ${client.address.building}`);
        });
    
        var newFilters = Object.keys(filterValues).map(key => {
            return [...filterValues[key]].filter(Boolean).sort().map(value => {
                return { name: value, checked: false };
            });
        });

        setFilters(newFilters);
    }, [clients]);

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

    function changeSortDirection(column) {
        setSort(prev => {
            if (prev[0] === column) {
                if (prev[1] === "asc") return [column, "dsc"]
                if (prev[1] === "dsc") return [column, "asc"]
            }
            return [column, "asc"]
        })
    }

    function GenerateClientTable() {
        return (
            <table>
                <thead>
                    <tr>
                        <th onClick={() => changeSortDirection("invoice-type")}>
                            <div className="header-content">
                                <p>{t("clients.main.f-opt-invoice")}</p>
                                {
                                sort[0] === "invoice-type" && <div className="sortInfo">
                                {
                                    sort[1] === "asc"
                                        ? <i className="fa-solid fa-arrow-down-a-z"></i>
                                        : <i className="fa-solid fa-arrow-up-a-z"></i>
                                }
                                </div>
                            }
                            </div>
                        </th>
                        <th onClick={() => changeSortDirection("name")}>
                            <div className="header-content">
                                <p>{t("clients.main.f-opt-name")}</p>
                                {
                                sort[0] === "name" && <div className="sortInfo">
                                {
                                    sort[1] === "asc"
                                        ? <i className="fa-solid fa-arrow-down-a-z"></i>
                                        : <i className="fa-solid fa-arrow-up-a-z"></i>
                                }
                                </div>
                            }
                            </div>
                        </th>
                        <th onClick={() => changeSortDirection("nip")}>
                            <div className="header-content">
                                <p>{t("clients.main.f-opt-nip")}</p>
                                {
                                sort[0] === "nip" && <div className="sortInfo">
                                {
                                    sort[1] === "asc"
                                        ? <i className="fa-solid fa-arrow-down-a-z"></i>
                                        : <i className="fa-solid fa-arrow-up-a-z"></i>
                                }
                                </div>
                            }
                            </div>
                        </th>
                        <th onClick={() => changeSortDirection("address")}>
                            <div className="header-content">
                                <p>{t("clients.main.f-opt-address")}</p>
                                {
                                sort[0] === "address" && <div className="sortInfo">
                                {
                                    sort[1] === "asc"
                                        ? <i className="fa-solid fa-arrow-down-a-z"></i>
                                        : <i className="fa-solid fa-arrow-up-a-z"></i>
                                }
                                </div>
                            }
                            </div>
                        </th>
                        <th onClick={() => changeSortDirection("notes")}>
                            <div className="header-content">
                                <p>{t("clients.main.f-opt-notes")}</p>
                                {
                                sort[0] === "notes" && <div className="sortInfo">
                                {
                                    sort[1] === "asc"
                                        ? <i className="fa-solid fa-arrow-down-a-z"></i>
                                        : <i className="fa-solid fa-arrow-up-a-z"></i>
                                }
                                </div>
                            }
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>{
                    clients.map(c => (
                        <tr key={c.id}>
                            <td>{c.invoiceType === "Company" ? t("clients.main.t-compamny-invoice") : t("clients.main.t-name-invoice")}</td>
                            <td>{c.clientName}</td>
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
            try {
                const response = await fetch("https://localhost:7057/api/clients/all");
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setClients(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        getUserData();
    }, []);

    return (
        <div className="client-container">
            <div className="client-manage">
                <div className="left">
                    <SearchBox name={t("clients.main.txt-search-for")}/>
                    <h2 className="filter-heading">{t("clients.main.txt-filters")}:</h2>
                    <FilterBox filters={filters} toggleCheck={changeChecked} names={names} clients={clients}/>
                </div>
                <div className="right">
                    <Link to="add" className="add-button">{t("clients.main.add-btn")}</Link>    
                </div>                
            </div>
            <div className="list">
                <GenerateClientTable />
            </div>
        </div>
    )
}

export default Clients