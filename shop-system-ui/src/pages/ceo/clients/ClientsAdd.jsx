import React, { useState } from 'react'

export default function ClientsAdd() {

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
                <h2>Client details</h2>
                <input name="client-name" type="text" placeholder="Client name"/>
                <div className="invoice-container">
                    <select name="invoice-type" id="invoice-type-choice" onChange={() => changeSelect()}>
                        <option value="Name">Name</option>
                        <option value="Company">Company</option>
                    </select>
                    {addUserForm.invoiceType === "Company" ? <input name="nip" className="company-invoice-input" type="text" placeholder="NIP"/> : ""}
                </div>
                <textarea name="notes" id="notes" cols="30" rows="10" placeholder="Notes" maxLength="500"/>
            </div>
            <div className="address-part glassy">
                <h2>Address details</h2>
                <input name="country" type="text" placeholder="Country"/>
                <input name="city" type="text" placeholder="City"/>
                <input name="postal-code" type="text" placeholder="Postal code"/>
                <input name="street" type="text" placeholder="Street"/>
                <div className="building-premises-container">
                    <input name="buidling" type="text" placeholder="Building"/>
                    <p> / </p>
                    <input name="premises" type="text" placeholder="Premises"/>
                </div>
            </div>
            <div className="submit-add-client-button">
                <button className="add-button middle" onClick={() => validateForm()}>Add client</button>
            </div>
        </div>
    )
}
