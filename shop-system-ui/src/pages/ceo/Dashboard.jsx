import React from "react";
import "../../styles/ceo/dashboard.css";
import DashboardOption from "../../components/DashboardOption";
import AppHeader from "../../components/AppHeader";

function Dashboard() {
    return (
        <>
            <AppHeader />
            <div className="dashboard-container">
                <DashboardOption name="name 1" img="https://picsum.photos/1000/300" />
                <DashboardOption name="name 2" img="https://picsum.photos/1000/300" />
                <DashboardOption name="name 3" img="https://picsum.photos/1000/300" />
                <DashboardOption name="name 4" img="https://picsum.photos/1000/300" />
                <DashboardOption name="name 5" img="https://picsum.photos/1000/300" />
                <DashboardOption name="name 6" img="https://picsum.photos/1000/300" />
            </div>
        </>
    );
}

export default Dashboard;