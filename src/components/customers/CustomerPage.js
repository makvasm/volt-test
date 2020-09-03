import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import Table from "../Table"
import { GET } from "../../utils"

export default function CustomerPage() {

  let { customer_id: id } = useParams()
  const [customerInfo, setInfo] = useState(null)

  useEffect(() => {
    GET(`/api/customers/${id}`)
      .then(data => setInfo(data))
  }, [])


  if (!customerInfo) return null
  return (
    <div>
      <Table cols={["Name", "Address", "Phone"]} config="customers" rows={[customerInfo]} />
    </div>
  )
}
