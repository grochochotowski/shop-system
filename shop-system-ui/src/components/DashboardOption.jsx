import React from "react";

function DashboardOption (props) {
    const styling = {
        backgroundImage: `url(${props.img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }

    return (
        <div className="option" style={styling}>
            <h1>{props.name}</h1>
        </div>
    );
}

export default DashboardOption;
