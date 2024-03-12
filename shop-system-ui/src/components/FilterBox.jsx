import React, {useState} from 'react'

export default function FilterBox({filters, toggleCheck}) {

    const [opened, setOpened] = useState({
        option1: ["Option1", false],
        option2: ["Option1", false],
        option3: ["Option1", false],
        option4: ["Option1", false],
        option5: ["Option1", false]
    });

    function toggleFilter(opt) {
        setOpened(prev => {
            const newOpened = { ...prev };
            Object.keys(newOpened).forEach(key => {
                if (key !== opt) {
                    newOpened[key] = false;
                }
            });

            newOpened[opt] = !newOpened[opt];
            return newOpened;
        });
    }

    function GenerateFilterOptions() {
        return Object.keys(opened).map((key) => (
            <li className={opened[key] ? "opened main" : "closed main"} key={key}>
                <h4 onClick={() => toggleFilter(key)}>Option1</h4>
                <ul className="inside">
                    <GenerateFiltersInOption opt={key}/>
                </ul>
            </li>
        ));
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
        toggleCheck(opt, elementName);
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
