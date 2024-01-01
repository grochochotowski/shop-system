import React from "react";

function Header(props) {

    return (
        <header>
            <ul>
                <li className={props.selected === "option-1"? "selected" : ""}>Option 1</li>
                <li className={props.selected === "option-2"? "selected" : ""}>Option 2</li>
                <li className={props.selected === "option-3"? "selected" : ""}>Option 3</li>
                <li className={props.selected === "option-4"? "selected" : ""}>Option 4</li>
                <li className={props.selected === "option-5"? "selected" : ""}>Option 5</li>
                <li className={props.selected === "option-6"? "selected" : ""}>Option 6</li>
                <li className={props.selected === "option-7"? "selected" : ""}>Option 7</li>
                <li className={props.selected === "option-8"? "selected" : ""}>Option 8</li>
                <li className={props.selected === "option-9"? "selected" : ""}>Option 9</li>
                <li className={props.selected === "create-user"? "selected" : ""}>CreateUser</li>
            </ul>
        </header>
    );

}

export default Header;