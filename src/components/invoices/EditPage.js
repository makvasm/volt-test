import React, { useEffect, useState, createRef } from 'react'
import Container from "react-bootstrap/Container"
import { Form, Button } from "react-bootstrap"
import { GET } from '../../utils'
import { useParams } from 'react-router-dom'
import Table from "react-bootstrap/Table"

export default function EditPage() {
  let thStyle = { position: "sticky", top: "0", backgroundColor: "white" }

  const [invoiceItems, setInvoiceItems] = useState(null)

  const [customers, setCustomers] = useState(null)

  const [products, setProducts] = useState(null)

  const [total, setTotal] = useState(0)

  let { invoice_id: id } = useParams()

  let productsRef = createRef(null)

  useEffect(() => {

    GET("/api/customers")
      .then(data => setCustomers(data))
    GET(`/api/invoices/${id}/items/`)
      .then(data => setInvoiceItems(data))
    GET("/api/products")
      .then(data => setProducts(data))

  }, [])

  if (!customers || !invoiceItems || !products) return null

  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Discount (%)</Form.Label>
          <Form.Control type="number" min="0" max="100" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Customer</Form.Label>

          <Form.Control as="select">
            {customers.map((customer, index) => (
              <option key={index}>
                {customer.name}
              </option>
            ))}
          </Form.Control>

        </Form.Group>

        <Form.Group>
          <Form.Label>Product</Form.Label>

          <Form.Control as="select" ref={productsRef}>
            {products.map((product, index) => (
              <option key={index} data-id={product.id}>
                {product.name}
              </option>
            ))}
          </Form.Control>

          <Button onClick={event => {
            setInvoiceItems([...invoiceItems, products.find(prod => prod.name == productsRef.current.value)])
          }}>Add</Button>
        </Form.Group>
      </Form>

      <div style={{
        maxHeight: "60vh",
        overflowY: "auto"
      }}>
        <Table>
          <thead>
            <tr>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Price</th>
              <th style={thStyle}>Qt</th>
            </tr>
          </thead>
          <tbody>
            {invoiceItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td><input type="number" min="0" defaultValue={1}></input></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div>Total: {total}</div>
    </Container>
  )
}
