import React, {useState} from "react";

function ShopUserListElement(props) {

    const [isCollapsed, setIsCollapsed] = useState(props.isCollapsed);

    function GenerateList() {
        if (isCollapsed) {
            return (
                <ul>
                    {props.elements.map((user) => {
                        return (
                            <li key={user.userId}>
                                {props.checkedBoxes.idCheck && <p><b>ID: </b>{user.userId}</p>}
                                {props.checkedBoxes.positionCheck && <p><b>POSITION: </b>{user.position}</p>}
                                {props.checkedBoxes.loginCheck && <p><b>LOGIN: </b>{user.login}</p>}
                                {(props.checkedBoxes.firstNameCheck ||
                                (props.checkedBoxes.secondNameCheck && user.secondName) ||
                                props.checkedBoxes.lastNameCheck) &&
                                    <p><b>NAME: </b>
                                        {props.checkedBoxes.firstNameCheck && <span>{user.firstName}&nbsp;</span>}
                                        {(props.checkedBoxes.secondNameCheck && user.secondName) && <span>{user.secondName}&nbsp;</span>}
                                        {props.checkedBoxes.lastNameCheck && user.lastName}
                                    </p>}
                                {(props.checkedBoxes.emailCheck ||
                                props.checkedBoxes.phoneNumberCheck) &&
                                    <p><b>CONTANCT: </b>
                                        {props.checkedBoxes.emailCheck && user.email}
                                        {props.checkedBoxes.phoneNumberCheck && props.checkedBoxes.emailCheck && <span>&nbsp; - &nbsp;</span>}
                                        {props.checkedBoxes.phoneNumberCheck && user.phoneNumber}
                                    </p>}
                            </li>
                        );
                    })}
                </ul>
            )
        }
    }
    function handleClick() {
        setIsCollapsed((prev) => !prev);
    }

    return (
        <div className={`shop-user-element ${isCollapsed ? "not-collapsed" : "collapsed"}`}>
            <p className="shopP" onClick={handleClick}>{props.title}</p>
            <GenerateList />
        </div>
    );

}

export default ShopUserListElement;