import React from "react";
import { Link } from "react-router-dom";

function DashboardOption (props) {
    const styling = {
        backgroundImage: `url(${props.img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }

    return (
        <Link className="option" style={styling} to={`/${props.path}`}>
            <h1>{props.name}</h1>
        </Link>
    );
}

export default DashboardOption;
