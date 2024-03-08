import React from "react";
import "../../styles/ceo/dashboard.css";
/*Components*/
import DashboardOption from "../../components/DashboardOption";
import AppHeader from "../../components/AppHeader";
/*Images*/
import clientImg from "../../images/client.jpg"
import storesImg from "../../images/store.jpg"
import clothingImg from "../../images/clothing.jpg"
import employeeImg from "../../images/employee.jpg"
import salesImg from "../../images/sale.jpg"
import companyImg from "../../images/company.jpg"

function Dashboard() {
    return (
        <>
            <AppHeader />
            <div className="dashboard-container">
                <DashboardOption name="Clients" img={clientImg} />
                <DashboardOption name="Stores" img={storesImg} />
                <DashboardOption name="Clothing" img={clothingImg}  />
                <DashboardOption name="Employees" img={employeeImg} />
                <DashboardOption name="Sales" img={salesImg} />
                <DashboardOption name="Company" img={companyImg} />
            </div>
        </>
    );
}

export default Dashboard;