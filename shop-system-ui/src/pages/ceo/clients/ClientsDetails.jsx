import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

export default function ClientsDetails() {

  const { id } = useParams();
  const [client, setClient] = useState({});


  useEffect(() => {
    async function getUserData() {
        try {
            const response = await fetch(`https://localhost:7057/api/clients/details/client-${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data - ', response.status);
            }
            const data = await response.json();
            setClient(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    getUserData();
}, []);

  return (
    <div>ClientsDetails {id}</div>
  )
}
