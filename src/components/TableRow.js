import React from 'react'
import { fields } from "../utils"

export default function TableRow({ obj, config, canEdit }) {
  if (typeof (obj) !== "object") return null

  return (
    <tr data-id={obj.id}>
      {fields[config].map((field, index) => (
        <td
          key={index}
        >{obj[field.input_name]}</td>
      ))}

      {canEdit ? <td><a href={`/${config}/${obj.id}/edit`}>Edit</a></td> : null}
    </tr>
  )
}
