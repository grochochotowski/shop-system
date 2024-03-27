import React from 'react'
import { useParams } from "react-router-dom";

export default function ClientsDetails() {

  const { id } = useParams();

  return (
    <div>ClientsDetails {id}</div>
  )
}
