import React, { useState, useEffect } from "react"

import Header from "../Header"
import Table from "../Table"
import Spinner from "react-bootstrap/Spinner"
import Container from "react-bootstrap/Container"

import { GET } from "../../utils"

export default function Products() {

  const [products, setProducts] = useState(null);

  useEffect(() => {
    GET("api/products")
      .catch(err => null)
      .then(data => {
        setProducts(data)
      })
  }, [])


  const forRender = () => {
    if (!products) return <Spinner animation="border" />
    if (products.length) {
      return (
        <Table cols={["Name", "Price"]} rows={products} config="products" />
      )
    }
  }


  return (
    <>
      <Container>
      <Header title="Products list" link="/products/create"  />

        {forRender()}
      </Container>

    </>
  )
}
