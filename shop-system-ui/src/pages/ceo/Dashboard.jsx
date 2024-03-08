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

function Dashboard() {

    const { t } = useTranslation("global")

    return (
        <div className="dashboard-container">
            <DashboardOption path="clients" name={t("dashboard.opt-client")} img={clientImg} />
            <DashboardOption path="stores" name={t("dashboard.opt-store")} img={storesImg} />
            <DashboardOption path="clothing" name={t("dashboard.opt-clothing")} img={clothingImg}  />
            <DashboardOption path="employees" name={t("dashboard.opt-employee")} img={employeeImg} />
            <DashboardOption path="sales" name={t("dashboard.opt-sale")} img={salesImg} />
            <DashboardOption path="company" name={t("dashboard.opt-company")} img={companyImg} />
        </div>
    );
}

export default Dashboard;