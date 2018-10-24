import React from 'react'
import { Table } from 'semantic-ui-react'

const TableList = ({ listItems }) => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Amount</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>Categroy</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {listItems.map((item, i) => (
        <Table.Row key={i}>
          <Table.Cell>{item.date}</Table.Cell>
          <Table.Cell>{item.amount}</Table.Cell>
          <Table.Cell>{item.name}</Table.Cell>
          <Table.Cell>{item.description}</Table.Cell>
          <Table.Cell>{item.category}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
)

export default TableList
