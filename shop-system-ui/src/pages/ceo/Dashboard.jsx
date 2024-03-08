import React from "react";
import "../../styles/ceo/dashboard.css";
/*Components*/
import DashboardOption from "../../components/DashboardOption";
import AppHeader from "../../components/AppHeader";
/*Images*/
import clientImg from "../../images/client.jpg"
import clothingImg from "../../images/clothing.jpg"
import companyImg from "../../images/company.jpg"

function Dashboard() {
    return (
        <>
            <AppHeader />
            <div className="dashboard-container">
                <DashboardOption name="Clients" img={clientImg} />
                <DashboardOption name="Clothing" img={clothingImg}  />
                <DashboardOption name="name 3" img="https://picsum.photos/1000/300" />
                <DashboardOption name="name 4" img="https://picsum.photos/1000/300" />
                <DashboardOption name="name 5" img="https://picsum.photos/1000/300" />
                <DashboardOption name="Company" img={companyImg} />
            </div>
        </>
    );
}

export default Dashboard;