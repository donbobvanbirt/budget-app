import React, { Component } from 'react'
import { compose, withState, withHandlers } from 'recompose'
import styled from 'styled-components'
import { Menu } from 'semantic-ui-react'

import './App.css'
import AddItemModal from './components/AddItemModal'
import TableList from './components/TableList'

const AppContainer = styled.div``

const TablesContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const TablesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TableHeader = styled.div`
  font-size: 1.5em;
  margin: 10px 21px;
  font-weight: bold;
`

const TableContainer = styled.div`
  width: 49%;
`

class App extends Component {
  render() {
    const { activeItem } = this.props

    return (
      <AppContainer>
        <Menu>
          <Menu.Item
            name="summary"
            active={activeItem === 'summary'}
            onClick={() => {}}
          >
            Summary
          </Menu.Item>

          <Menu.Item
            name="transactions"
            active={activeItem === 'transactions'}
            onClick={() => {}}
          >
            Transactions
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item name="logout" onClick={() => {}} />
          </Menu.Menu>
        </Menu>

        <div>
          <TablesHeader>
            <TableHeader>Expenses</TableHeader>
            <AddItemModal submitNewItem={this.props.addNewItem} />
            <TableHeader>Income</TableHeader>
          </TablesHeader>

          <TablesContainer>
            <TableContainer>
              <TableList listItems={this.props.expenses} />
            </TableContainer>

            <TableContainer>
              <TableList listItems={this.props.income} />
            </TableContainer>
          </TablesContainer>
        </div>
      </AppContainer>
    )
  }
}

export default compose(
  withState('expenses', 'setExpenses', []),
  withState('income', 'setIncome', []),
  withState('activeItem', 'setActiveItem', []),
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
