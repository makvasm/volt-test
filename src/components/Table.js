import React from 'react'
import TableRow from './TableRow'
import { Table as BtTable } from "react-bootstrap"

export default function Table({ cols, rows, config, canEdit = false }) {

  return (
    <BtTable striped bordered hover>
      <thead>
        <tr>
          {cols.map((col, index) => (
            <th key={index}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <TableRow obj={row} key={index} config={config} canEdit={canEdit} />
        ))}
      </tbody>
    </BtTable>
  )
}
