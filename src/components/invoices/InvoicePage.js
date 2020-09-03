import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import Table from "../Table"
import { GET } from "../../utils"

export default function InvoicePage() {

  let { invoice_id: id } = useParams()
  const [invoiceInfo, setInfo] = useState(null)

  useEffect(() => {
    GET(`/api/invoices/${id}`)
      .then(data => setInfo(data))
  }, [])


  if (!invoiceInfo) return null
  return (
    <div>
      <Table cols={["Customer", "Discount", "Total"]} config="invoices" rows={[invoiceInfo]} />
    </div>
  )
}
