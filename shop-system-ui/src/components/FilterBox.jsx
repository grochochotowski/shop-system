import React, {useState, useEffect} from 'react'
import {useTranslation} from "react-i18next";

export default function FilterBox({filters, toggleCheck, names, filterIds}) {

    const { t } = useTranslation("global")

    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrolledName, setScrolledName] = useState("");
    const [opened, setOpened] = useState(Array(names.length).fill(false));
    
    useEffect(() => {
        function handleClickOutside(event) {
            const filterBox = document.querySelector(".filter-box");
            if (filterBox && !filterBox.contains(event.target)) {
                setOpened(Array(names.length).fill(false));
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [names]);

    function toggleFilter(opt) {
        setOpened(prev => {
            const newOpened = [ ...prev ];
            newOpened.forEach((key, i) => {
                if (i !== opt) {
                    newOpened[i] = false;
                }
            });

            newOpened[opt] = !newOpened[opt];
            return newOpened;
        });
    }

    function filterResults() {
        setOpened(Array(names.length).fill(false));

        
        console.log("filter")
    }

    function GenerateFilterOptions() {
        if (opened.length === 0 || names.length === 0) {
            return <h4>No filters available</h4>;
        }
        return opened.map((isOpen, i) => (
            <li className={isOpen ? "opened main" : "closed main"} key={names[i]}>
                <h4 onClick={() => toggleFilter(i)}>{names[i]}</h4>
                <ul className="inside" id={filterIds[i]}>
                    <GenerateFiltersInOption opt={i} />
                </ul>
            </li>
        ))
    }

    function GenerateFiltersInOption({opt}) {
        if (filters.length === 0) {
            return <h4>Loading filters...</h4>
        }
        else{
            return filters[opt].map((element) => (
                <li className="inside" key={element.name} onClick={() => handleCheckboxChange(opt, element.name)}>
                    <input
                        type="checkbox"
                        name={element.name}
                        id={element.name}
                        checked={element.checked}
                        readOnly
                    />
                    <label htmlFor={element.name}>{element.name}</label>
                </li>
            ));
        }
    }

    function handleCheckboxChange(opt, elementName) {
        setScrollPosition(document.getElementById(filterIds[opt]).scrollTop)
        setScrolledName(filterIds[opt]);
        toggleCheck(opt, elementName);
    }
    
    useEffect(() => {
        const element = document.getElementById(scrolledName);
        if (element) {
            element.scrollTo(0, scrollPosition);
        }
    }, [filters, scrollPosition, scrolledName]);

    return (
        <div className="filter-box">
            <ul className="main">
                <GenerateFilterOptions />
            </ul>
            <button className="filter-button" onClick={filterResults}>{t("general.filter-btn")}</button>
        </div>
    )
}
