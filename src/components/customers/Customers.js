import React, { useState, useEffect } from "react"
import Table from "../Table"
import Header from "../Header"
import { GET } from "../../utils"
import Spinner from "react-bootstrap/Spinner"
import Container from "react-bootstrap/Container"


export default function Customers() {

  const [customers, setCustomers] = useState(null);

  useEffect(() => {

    GET("api/customers")
      .catch(err => null)
      .then(data => {
        setCustomers(data)
      })

  }, [])

  const forRender = () => {
    if (!customers) return <Spinner animation="border" />
    if (customers.length) {
      return (
        <Table cols={["Name", "Phone", "Address"]} rows={customers} config="customers" />
      )
    }
  }

  return (
    <>
      <Container>
      <Header title="Customers list" link="/customers/create" />

        {forRender()}
      </Container>
    </>
  )
}


