import React, { useState, useEffect } from 'react'
import { GET } from '../../utils';
import Header from "../Header"
import Table from "../Table"
import Spinner from "react-bootstrap/Spinner"
import Container from "react-bootstrap/Container"


export default function Invoices() {

  const [invoices, setInvoices] = useState(null)

  useEffect(() => {

    GET("api/invoices")
      .catch(err => null)
      .then(data => {
        setInvoices(data)
      })

  }, [])

  const forRender = () => {
    if (!invoices) return <Spinner animation="border" />
    if (invoices.length) {
      return (
        <Table cols={["Customer id", "Discount", "Total"]} rows={invoices} config="invoices" canEdit={true} />
      )
    }
  }

  return (
    <>
      <Container>
      <Header title="Invoices list" link="/invoices/create" />

        {forRender()}
      </Container>
    </>
  )
}
