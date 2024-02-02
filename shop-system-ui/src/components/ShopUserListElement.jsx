import React, {useState} from "react";

function ShopUserListElement(props) {

    const [isCollapsed, setIsCollapsed] = useState(props.isCollapsed);

    function GenerateList() {
        if (!isCollapsed) {
            return (
                <ul>
                    <li>User 1</li>
                    <li>User 2</li>
                    <li>User 3</li>
                    <li>User 4</li>
                    <li>User 5</li>
                    <li>User 6</li>
                    <li>User 7</li>
                    <li>User 8</li>
                    <li>User 9</li>
                    <li>User 10</li>
                </ul>
            )
        }
    }
    return (
        <div className="shop-user-element">
            <p>Shop id number</p>
            <GenerateList />
        </div>
    );

}

export default ShopUserListElement;