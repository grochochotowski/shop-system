import React from "react";
import "../../styles/ceo/dashboard.css";
import DashboardOption from "../../components/DashboardOption";

function Dashboard() {
    return (
        <div className="dashboard-container">
            <DashboardOption name="name 1" img="https://picsum.photos/200/300" />
            <DashboardOption name="name 2" img="https://picsum.photos/200/300" />
            <DashboardOption name="name 3" img="https://picsum.photos/200/300" />
            <DashboardOption name="name 4" img="https://picsum.photos/200/300" />
            <DashboardOption name="name 5" img="https://picsum.photos/200/300" />
            <DashboardOption name="name 6" img="https://picsum.photos/200/300" />
        </div>
    );
}

export default Dashboard;