import React, { useState } from 'react'
import {useTranslation} from "react-i18next";
import { useNavigate, Link } from "react-router-dom";

import "../../../styles/ceo/clients.css"

export default function ClientsAdd() {

    const navigate = useNavigate();
    const { t } = useTranslation("global")

    const [addUserForm, setAddUserForm] = useState ({
        "invoiceType": "Name",
        "clientName": "",
        "nip": "",
        "notes": "",
        "country": "",
        "city": "",
        "street": "",
        "building": "",
        "premises": "",
        "postalCode": ""
    })

    function changeSelect() {
        setAddUserForm(prev => ({
            ...prev,
            "invoiceType": prev.invoiceType === "Name" ? "Company" : "Name",
            "nip" : ""
        }))

        if (addUserForm.invoiceType === "Name") document.getElementById("invoice-type-choice").classList.add("company-invoice-select");
        else document.getElementById("invoice-type-choice").classList.remove("company-invoice-select");
    }
    function updateForm(id) {
        setAddUserForm(prev => ({
            ...prev,
            [id]: document.getElementById(id).value,
        }))
    }

    function validateForm() {
        let isValid = true;

        if(addUserForm.clientName === "") isValid = false;
        if(addUserForm.country === "") isValid = false;
        if(addUserForm.city === "") isValid = false;
        if(addUserForm.postalCode === "") isValid = false;
        if(addUserForm.street === "") isValid = false;
        if(addUserForm.building === "") isValid = false;
        if(addUserForm.invoiceType === "Company" && addUserForm.nip === "") isValid = false;

        if(isValid) {
            createUser()
        }
    }

    async function createUser() {
        try {
            const response = await fetch("https://localhost:7057/api/clients/new", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(addUserForm)
            });
    
            if (!response.ok) {
                alert("Failed to create user");
                throw new Error("Failed to create user");
            }

            if (window.confirm("Client added: navigate to clients page?")) {
                navigate("/clients");
            }

        } catch (error) {
            console.error("Error creating user:", error.message);
            alert("Something went wrong: 500")
        }
    }

    return (
        <div className="add-client-container">
            <div className="user-part glassy">
                <h2>{t("clients.add.user-part.header")}</h2>
                <input
                    name="clientName"
                    id="clientName"
                    type="text"
                    placeholder={t("clients.add.user-part.name")}
                    onChange={() => updateForm("clientName")}
                    value={addUserForm.clientName}
                />
                <div className="invoice-container">
                    <select name="invoice-type" id="invoice-type-choice" onChange={() => changeSelect()}>
                        <option value="Name">{t("clients.add.user-part.select.name-invoice")}</option>
                        <option value="Company">{t("clients.add.user-part.select.company-invoice")}</option>
                    </select>
                    {addUserForm.invoiceType === "Company" ?
                    <input
                        name="nip"
                        id="nip"
                        className="company-invoice-input"
                        type="text"
                        placeholder="NIP"
                        onChange={() => updateForm("nip")}
                        value={addUserForm.nip}
                    />
                    : ""}
                </div>
                <textarea
                    name="notes"
                    id="notes"
                    placeholder={t("clients.add.user-part.notes")}
                    maxLength="500"
                    onChange={() => updateForm("notes")}
                    value={addUserForm.notes}
                />
            </div>
            <div className="address-part glassy">
                <h2>{t("clients.add.address-part.header")}</h2>
                <input
                    name="country"
                    id="country"
                    type="text"
                    placeholder={t("clients.add.address-part.country")}
                    onChange={() => updateForm("country")}
                    value={addUserForm.country}
                />
                <input
                    name="city"
                    id="city"
                    type="text"
                    placeholder={t("clients.add.address-part.city")}
                    onChange={() => updateForm("city")}
                    value={addUserForm.city}
                />
                <input
                    name="postalCode"
                    id="postalCode"
                    type="text"
                    placeholder={t("clients.add.address-part.postal-code")}
                    onChange={() => updateForm("postalCode")}
                    value={addUserForm.postalCode}
                />
                <input
                    name="street"
                    id="street"
                    type="text"
                    placeholder={t("clients.add.address-part.street")}
                    onChange={() => updateForm("street")}
                    value={addUserForm.street}    
                />
                <div className="building-premises-container">
                    <input
                        name="building"
                        id="building"
                        type="text"
                        placeholder={t("clients.add.address-part.building")}
                        onChange={() => updateForm("building")}
                        value={addUserForm.building}    
                    />
                    <p> / </p>
                    <input
                        name="premises"
                        id="premises"
                        type="text"
                        placeholder={t("clients.add.address-part.premises")}
                        onChange={() => updateForm("premises")}
                        value={addUserForm.premises}    
                    />
                </div>
            </div>
            <div className="submit-add-client-button">
                <button className="add-button middle" onClick={() => validateForm()}>{t("clients.add.add-btn")}</button>
                <Link to={`/clients`} className="go-back-button">{t("general.go-back-btn")}</Link>
            </div>
        </div>
    )
}
