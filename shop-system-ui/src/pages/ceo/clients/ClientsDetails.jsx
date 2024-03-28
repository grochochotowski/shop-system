import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {useTranslation} from "react-i18next";

import "../../../styles/ceo/clients.css"

export default function ClientsDetails() {

    const { t } = useTranslation("global")
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
                console.log(data)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        getUserData();
    }, []);

    return (
        <div className="client-details-container">
            <div className="manage-client">
                <Link to={`/clients`} className="go-back-button">{t("general.go-back-btn")}</Link>
                <Link to={`/clients/edit/${client.id}`} className="edit-button">{t("clients.details.edit-client-btn")}</Link>
                <button className="remove-button">{t("clients.details.remove-client-btn")}</button>
            </div>
            <div className="display-client">
                <div className="client-box glassy">
                    <h1>{client.address ? client.clientName : 'Loading...'}</h1>
                    <h2>ID: {client.address ? client.id : 'Loading...'}</h2>
                    <div className="invoice-info">
                        <h3>{t("clients.details.invoice-txt")}</h3>
                        <div className="line">
                            <h4>{t("clients.details.invoice-type-txt")}:</h4>
                            <p>{client.address ? client.invoiceType : 'Loading...'}</p>
                        </div>
                        <div className="line">
                            <h4>NIP:</h4>
                            <p>{client.address ? client.nip : 'Loading...'}</p>
                        </div>
                    </div>
                </div>
                <div className="address-box glassy">
                    <h1>{t("clients.details.address-txt")}</h1>
                    <div className="layer">
                        <div className="line">
                            <h4>{t("clients.details.country-txt")}:</h4>
                            <p>{client.address ? client.address.country : 'Loading...'}</p>
                        </div>
                        <div className="line">
                            <h4>{t("clients.details.city-txt")}:</h4>
                            <p>{client.address ? client.address.city : 'Loading...'}</p>
                        </div>
                    </div>
                    <div className="layer">
                        <div className="line">
                            <h4>{t("clients.details.postal-code-txt")}:</h4>
                            <p>{client.address ? client.address.postalCode : 'Loading...'}</p>
                        </div>
                        <div className="line">
                            <h4>{t("clients.details.street-txt")}:</h4>
                            <p>{client.address ? client.address.street : 'Loading...'}</p>
                        </div>
                    </div>
                    <div className="layer">
                        <div className="line">
                            <h4>{t("clients.details.place-txt")}: </h4>
                            <p>{client.address ? client.address.building : 'Loading...'}</p>
                            {client.address && client.address.premises && (
                                <>
                                    <p>/</p>
                                    <p>{client.address.premises}</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
