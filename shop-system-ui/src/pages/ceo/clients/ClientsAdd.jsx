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

  return (
    <div className="container">
        <div className="user-part">
            <input name="client-name" type="text" placeholder="Client name"/>
            <select name="invoice-type" id="invoice-type-input">
                <option value="Name">Name</option>
                <option value="Company">Company</option>
            </select>
            {addUserForm.invoiceType === "Company" ? <input name="nip" type="text" placeholder="NIP"/> : ""}
            <textarea name="notes" id="notes" cols="30" rows="10" placeholder="Notes" />
        </div>
    </div>
  )
}
