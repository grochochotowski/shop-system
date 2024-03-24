import React, {useState, useEffect} from 'react'
import {useTranslation} from "react-i18next";
import "../../styles/ceo/clients.css"

import SearchBox from '../../components/SearchBox'
import FilterBox from '../../components/FilterBox'

function Stores() {

    const { t } = useTranslation("global")

    const [stores, setStores] = useState([]);
    const [filters, setFilters] = useState([])
    const names = [
        t("stores.f-opt-invoice"),
        t("stores.f-opt-name"),
        t("stores.f-opt-nip"),
        t("stores.f-opt-address")
    ];
    const [sort, setSort] = useState(["Code", "asc"]);

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
                                <p>{t("stores.f-opt-invoice")}</p>
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
                                <p>{t("stores.f-opt-name")}</p>
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
                                <p>{t("stores.f-opt-nip")}</p>
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
                                <p>{t("stores.f-opt-address")}</p>
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
                                <p>{t("stores.f-opt-notes")}</p>
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
                    stores.map(s => (
                        <tr key={s.id}>
                            <td>{s.invoiceType === "Company" ? t("stores.t-compamny-invoice") : t("stores.t-name-invoice")}</td>
                            <td>{s.name}</td>
                            <td>{s.nip}</td>
                            <td>{`
                                ${s.address.country},
                                ${s.address.city},
                                ${s.address.postalCode},
                                ${s.address.street} ${c.address.building}
                                    ${s.address.premises ? "/" + s.address.premises : ""}
                            `}</td>
                            <td>{s.notes}</td>
                        </tr>
                    ))
                }</tbody>
            </table>
        )
    }

    useEffect(() => {
        async function getUserData() {
            try {
                const response = await fetch("https://localhost:7057/api/stores/all");
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setStores(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        getUserData();
    }, []);

    return (
        <div className="store-container">
            <div className="store-manage">
                <div className="left">
                    <SearchBox name={t("stores.txt-search-for")}/>
                    <h2 className="filter-heading">{t("stores.txt-filters")}:</h2>
                    <FilterBox filters={filters} toggleCheck={changeChecked} names={names} stores={stores}/>
                </div>
                <div className="right">
                    <button className="add-button">{t("stores.add-btn")}</button>    
                </div>                
            </div>
            <div className="store-list">
                <GenerateStoreTable />
            </div>
        </div>
    )
}

export default Stores