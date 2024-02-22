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
                                <p><b>ID: </b>{user.userId},</p>
                                <p><b>NAME: </b>{user.firstName} {user.secondName} {user.lastName},</p>
                                <p><b>DATA: </b>{user.login} - {user.phoneNumber},</p>
                                <p><b>POSITION: </b>{user.position}</p>
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