import React from "react";
import "../../styles/ceo/dashboard.css";
import DashboardOption from "../../components/DashboardOption";

function Dashboard() {
    return (
        <div>
            <DashboardOption name="name 1" />
            <DashboardOption name="name 2" />
            <DashboardOption name="name 3" />
            <DashboardOption name="name 4" />
            <DashboardOption name="name 5" />
        </div>
    );
}

export default Dashboard;