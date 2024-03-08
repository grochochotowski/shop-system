import React from "react";
import {useTranslation} from "react-i18next";
import "../../styles/ceo/dashboard.css";

/* COMPONENTS */
import DashboardOption from "../../components/DashboardOption";

/* IMAGES */
import clientImg from "../../images/client.jpg"
import storesImg from "../../images/store.jpg"
import clothingImg from "../../images/clothing.jpg"
import employeeImg from "../../images/employee.jpg"
import salesImg from "../../images/sale.jpg"
import companyImg from "../../images/company.jpg"

function Dashboard(props) {

    const [t, i18n] = useTranslation("global")

    return (
        <>
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