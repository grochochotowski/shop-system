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
    }

    function validateForm() {

    }

    return (
        <div className="container">
            <div className="user-part">
                <input name="client-name" type="text" placeholder="Client name"/>
                <select name="invoice-type" id="invoice-type-input" onChange={() => changeSelect()}>
                    <option value="Name">Name</option>
                    <option value="Company">Company</option>
                </select>
                {addUserForm.invoiceType === "Company" ? <input name="nip" type="text" placeholder="NIP"/> : ""}
                <textarea name="notes" id="notes" cols="30" rows="10" placeholder="Notes" />
            </div>
            <div className="address-part">
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
            <button className="add-button middle" onClick={() => validateForm()}>Add client</button>
        </div>
    )
}
