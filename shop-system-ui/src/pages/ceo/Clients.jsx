import React, {useState, useEffect} from 'react'
import {useTranslation} from "react-i18next";
import "../../styles/ceo/clients.css"

import SearchBox from '../../components/SearchBox'
import FilterBox from '../../components/FilterBox'

function Clients() {

    const { t } = useTranslation("global")

    const [clients, setClients] = useState([]);
    const [filters, setFilters] = useState([])
    const names = [
        t("clients.f-opt-invoice"),
        t("clients.f-opt-name"),
        t("clients.f-opt-nip"),
        t("clients.f-opt-address")
    ];

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

    function GenerateClientTable() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>{t("clients.f-opt-invoice")}</th>
                        <th>{t("clients.f-opt-name")}</th>
                        <th>{t("clients.f-opt-nip")}</th>
                        <th>{t("clients.f-opt-address")}</th>
                        <th>{t("clients.f-opt-notes")}</th>
                    </tr>
                </thead>
                <tbody>{
                    clients.map(c => (
                        <tr key={c.id}>
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
                    <SearchBox name={t("clients.txt-search-for")}/>
                    <h2 className="filter-heading">{t("clients.txt-filters")}:</h2>
                    <FilterBox filters={filters} toggleCheck={changeChecked} names={names} clients={clients}/>
                </div>
                <div className="right">
                    <button className="add-button">{t("clients.add-btn")}</button>    
                </div>                
            </div>
            <div className="client-list">
                <GenerateClientTable />
            </div>
        </div>
    )
}

export default Clients