import React from 'react'
import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

export default function Header({ title, link }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "left",
      alignItems: "center",
      gap: "10px"
    }}>
      <h1 style={{ margin: "0" }}>
        {title}
      </h1>
      <Link to={link}>
        <Button variant="primary">Create</Button>
      </Link>
    </div>
  )
}
