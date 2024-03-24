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