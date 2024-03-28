import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import "../../../styles/ceo/clients.css"

export default function ClientsDetails() {
    const { id } = useParams();
    const [client, setClient] = useState({});

    useEffect(() => {
        async function getUserData() {
        try {
            const response = await fetch(
            `https://localhost:7057/api/clients/details/client-${id}`
            );
            if (!response.ok) {
            throw new Error("Failed to fetch data - ", response.status);
            }
            const data = await response.json();
            setClient(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        }
        getUserData();
    }, []);

    return (
        <div className="client-details-container">
            <div className="manage-client">
                <Link to={`/clients/edit/${client.id}`} className="edit-button">Edit client</Link>
                <button className="remove-button">Remove client</button>
            </div>
            <div className="display-client">
                <div className="client-box glassy">
                    <h1>Client ID and name</h1>
                    <div className="invoice-info">
                        <p>invoiceType</p>
                        <p>nip</p>
                    </div>
                </div>
                <div className="address-box glassy">
                    <div className="layer">
                        <p>country</p>
                        <p>city</p>
                    </div>
                    <div className="layer">
                        <p>postalCode</p>
                        <p>street</p>
                    </div>
                    <div className="layer">
                        <p>buidling</p>
                        <p>/</p>
                        <p>premises</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
