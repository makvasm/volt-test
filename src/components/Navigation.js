import React from 'react'
import { routes } from "../utils"
import {Link} from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">InvoiceApp</Navbar.Brand>
      <Nav className="mr-auto">
        {routes.map((route, index) => {
          return (
            <Link to={route.path} className="nav-link" key={index}>
              {route.name}
            </Link>
          )
        })}
      </Nav>
    </Navbar>
  )
}
