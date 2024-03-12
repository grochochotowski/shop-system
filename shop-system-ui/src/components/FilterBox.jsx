import React, {useState} from 'react'

export default function FilterBox({filters}) {

    const [opened, setOpened] = useState({
        option1: false,
        option2: false,
        option3: false,
        option4: false,
        option5: false
    });

    function toggleFilter(opt) {
        setOpened(prev => ({
            ...prev,
            [opt]: !prev[opt]
        }));
        console.log(opened);
    }

    function GenerateFilterOptions() {
        return opened.map((element) => (
            <li className={element ? "opened main" : "closed main"}>
                <h4 onClick={() => toggleFilter(element)}>Option1</h4>
                <ul className="inside">
                    <GenerateFiltersInOption opt={element}/>
                </ul>
            </li>
        ));
    }
    function GenerateFiltersInOption({opt}) {
        return filters[opt].map((element) => (
            <li className="inside">
                <input type="checkbox" name={element.name} id={element.name} checked={element.checked}/>
                <label htmlFor={element.name}>{element.name}</label>
            </li>
        ));
    }

    return (
        <div className="filter-box">
            <ul className="main">
                <GenerateFilterOptions />
            </ul>
            <button className="filter-button">Filter</button>
        </div>
    )
}
