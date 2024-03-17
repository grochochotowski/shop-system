import React, {useState, useEffect} from 'react'

export default function FilterBox({filters, toggleCheck, names, clients}) {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrolledName, setScrolledName] = useState("");

    const [opened, setOpened] = useState([
        false,
        false,
        false,
        false
    ]);

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
        setOpened(prev => {
            const closeAll = [ ...prev ];
            closeAll.forEach(key => {
                closeAll[key] = false;
            })
            return closeAll;
        });

        
        console.log("filter")
    }

    function GenerateFilterOptions() {
        if (opened.length === 0 || names.length === 0) {
            return <h4>No filters available</h4>;
        }
        return opened.map((isOpen, i) => (
            <li className={isOpen ? "opened main" : "closed main"} key={names[i]}>
                <h4 onClick={() => toggleFilter(i)}>{names[i]}</h4>
                <ul className="inside" id={names[i]}>
                    <GenerateFiltersInOption opt={i} />
                </ul>
            </li>
        ))
    }

    function GenerateFiltersInOption({opt}) {
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

    function handleCheckboxChange(opt, elementName) {
        setScrollPosition(document.getElementById(names[opt]).scrollTop)
        setScrolledName(names[opt]);
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
            <button className="filter-button" onClick={filterResults}>Filter</button>
        </div>
    )
}
