import React, {useState} from "react";

function ShopUserListElement(props) {

    const [isCollapsed, setIsCollapsed] = useState(props.isCollapsed);

    function GenerateList() {
        if (isCollapsed) {
            return (
                <ul>
                    {props.elements.map((user) => {
                        return (
                            <li key={props.userId}>
                                {props.checkedBoxes.idCheck && <p><b>ID: </b>{user.userId},</p>}
                                {props.checkedBoxes.positionCheck && <p><b>POSITION: </b>{user.position}</p>}
                                {(props.checkedBoxes.firstNameCheck ||
                                props.checkedBoxes.secondNameCheck ||
                                props.checkedBoxes.lastNameCheck) &&
                                    <p><b>NAME: </b>
                                        {props.checkedBoxes.firstNameCheck && user.firstName}
                                        {props.checkedBoxes.secondNameCheck && user.secondName}
                                        {props.checkedBoxes.lastNameCheck && user.lastName}
                                    ,</p>}
                                {(props.checkedBoxes.loginCheck ||
                                props.checkedBoxes.phoneNumberCheck) &&
                                    <p><b>INFO: </b>
                                        {props.checkedBoxes.loginCheck && user.login},
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