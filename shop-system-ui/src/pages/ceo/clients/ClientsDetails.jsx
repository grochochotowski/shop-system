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
                <Link to={`/clients`} className="go-back-button">Go back</Link>
                <Link to={`/clients/edit/${client.id}`} className="edit-button">Edit client</Link>
                <button className="remove-button">Remove client</button>
            </div>
            <div className="display-client">
                <div className="client-box glassy">
                    <h1>Client name</h1>
                    <h2>Client ID</h2>
                    <div className="invoice-info">
                        <h3>Invoice:</h3>
                        <div className="line">
                            <h4>Invoice type: </h4>
                            <p>exampletext</p>
                        </div>
                        <div className="line">
                            <h4>NIP: </h4>
                            <p>exampletext</p>
                        </div>
                    </div>
                </div>
                <div className="address-box glassy">
                    <h1>Address</h1>
                    <div className="layer">
                        <div className="line">
                            <h4>Country:</h4>
                            <p>exampletext</p>
                        </div>
                        <div className="line">
                            <h4>City:</h4>
                            <p>exampletext</p>
                        </div>
                    </div>
                    <div className="layer">
                        <div className="line">
                            <h4>Postal code:</h4>
                            <p>exampletext</p>
                        </div>
                        <div className="line">
                            <h4>Street:</h4>
                            <p>exampletext</p>
                        </div>
                    </div>
                    <div className="layer">
                        <div className="line">
                            <h4>Place: </h4>
                            <p>buidling</p>
                            <p>/</p>
                            <p>premises</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
