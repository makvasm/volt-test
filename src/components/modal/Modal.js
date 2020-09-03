import React, { useState } from 'react'
import { Modal, Button } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import { SubmitForm } from "../../utils"


export default function CustomModal({ title, fields, postUrl }) {

  let history = useHistory()
  const [show, toggleShow] = useState(true)

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={() => {
        toggleShow(!show)
        setTimeout(history.goBack, 200)
      }}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form id="modal-form" className="container"
          onSubmit={(event) => {
            event.preventDefault()
            SubmitForm(postUrl, event, fields, "post")
            toggleShow(!show)
            setTimeout(history.goBack, 200)
          }}
        >
          {fields.map((field, index) => {
            return (
              <div key={index}>
                <div>
                  {`${field.name}:`}
                </div>
                <input name={field.input_name} required type={field.type || "text"} style={{ width: "100%" }}></input>
              </div>
            )
          })}
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            toggleShow(!show)
            setTimeout(history.goBack, 200)
          }}
        >Close</Button>
        <Button type="submit" form="modal-form">Save</Button>
      </Modal.Footer>
    </Modal>
  )
}

