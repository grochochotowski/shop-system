import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useTranslation} from "react-i18next";

export default function ClientsAdd() {

    const { t } = useTranslation("global")

    const [addUserForm, setAddUserForm] = useState ({
        "invoiceType": "Name",
        "name": "",
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
            "invoiceType": prev.invoiceType === "Name" ? "Company" : "Name"
        }))

        if (addUserForm.invoiceType === "Name") document.getElementById("invoice-type-choice").classList.add("company-invoice-select");
        else document.getElementById("invoice-type-choice").classList.remove("company-invoice-select");
    }

    function validateForm() {

    }

    return (
        <div className="add-client-container">
            <div className="user-part glassy">
                <h2>{t("clients.add.user-part.header")}</h2>
                <input name="client-name" type="text" placeholder={t("clients.add.user-part.name")}/>
                <div className="invoice-container">
                    <select name="invoice-type" id="invoice-type-choice" onChange={() => changeSelect()}>
                        <option value="Name">{t("clients.add.user-part.select.name-invoice")}</option>
                        <option value="Company">{t("clients.add.user-part.select.company-invoice")}</option>
                    </select>
                    {addUserForm.invoiceType === "Company" ? <input name="nip" className="company-invoice-input" type="text" placeholder="NIP"/> : ""}
                </div>
                <textarea name="notes" id="notes" placeholder={t("clients.add.user-part.notes")} maxLength="500"/>
            </div>
            <div className="address-part glassy">
                <h2>{t("clients.add.address-part.header")}</h2>
                <input name="country" type="text" placeholder={t("clients.add.address-part.country")}/>
                <input name="city" type="text" placeholder={t("clients.add.address-part.city")}/>
                <input name="postal-code" type="text" placeholder={t("clients.add.address-part.postal-code")}/>
                <input name="street" type="text" placeholder={t("clients.add.address-part.street")}/>
                <div className="building-premises-container">
                    <input name="buidling" type="text" placeholder={t("clients.add.address-part.building")}/>
                    <p> / </p>
                    <input name="premises" type="text" placeholder={t("clients.add.address-part.premises")}/>
                </div>
            </div>
            <div className="submit-add-client-button">
                <button className="add-button middle" onClick={() => validateForm()}>{t("clients.add.add-btn")}</button>
            </div>
        </div>
    )
}
