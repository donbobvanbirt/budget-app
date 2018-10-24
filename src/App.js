import React, { Component } from 'react'
import { compose, withState, withHandlers } from 'recompose'
import styled from 'styled-components'
// import { Button, Icon, Header, Image, Modal, Form } from 'semantic-ui-react'

import './App.css'
import AddItemModal from './components/AddItemModal'
import TableList from './components/TableList'

const TablesContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const TableContainer = styled.div`
  width: 49%;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddItemModal submitNewItem={this.props.addNewItem} />
        <TablesContainer>
          <TableContainer>
            <TableList listItems={this.props.expenses} />
          </TableContainer>

          <TableContainer>
            <TableList listItems={this.props.expenses} />
          </TableContainer>
        </TablesContainer>
      </div>
    )
  }
}

export default compose(
  withState('expenses', 'setExpenses', []),
  withState('income', 'setIncome', []),
  withHandlers({
    addNewItem: props => newItem => {
      console.log('newItem:', newItem)
      if (newItem.type === 'expense') {
        props.setExpenses([...props.expenses, newItem])
      } else {
        props.setIncome([...props.income, newItem])
      }
    }
  })
)(App)
