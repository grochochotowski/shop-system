import React from "react";

function Header(props) {

    return (
        <header>
            <ul>
                <li className={props.selected? "selected" : ""}>Option 1</li>
                <li className={props.selected? "selected" : ""}>Option 2</li>
                <li className={props.selected? "selected" : ""}>Option 3</li>
                <li className={props.selected? "selected" : ""}>Option 4</li>
                <li className={props.selected? "selected" : ""}>Option 5</li>
                <li className={props.selected? "selected" : ""}>Option 6</li>
                <li className={props.selected? "selected" : ""}>Option 7</li>
                <li className={props.selected? "selected" : ""}>Option 8</li>
                <li className={props.selected? "selected" : ""}>Option 9</li>
                <li className={props.selected? "selected" : ""}>CreateUser</li>
            </ul>
        </header>
    );

}

export default Header;