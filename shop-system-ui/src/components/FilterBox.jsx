import React, {useState, useEffect, useRef} from 'react'

export default function FilterBox({filters, toggleCheck, names}) {

    var scrollRef = useRef(0);
    var scrolledName = useRef("option1");
    const [opened, setOpened] = useState({
        option1: false,
        option2: false,
        option3: false,
        option4: false,
        option5: false
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

    useEffect(() => {
        document.getElementById(scrolledName.current).scrollTo(0, scrollRef.current);
      }, [filters]);

    function GenerateFilterOptions() {
        return Object.keys(opened).map((key) => (
            <li
                className={opened[key] ? "opened main" : "closed main"} key={key}>
                <h4 onClick={() => toggleFilter(key)}>{names[key]}</h4>
                <ul className="inside" id={key}>
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
        scrollRef.current = document.getElementById(opt).scrollTop
        scrolledName.current = opt;
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
