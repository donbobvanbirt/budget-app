import React, { Component } from 'react'
import { compose, withState } from 'recompose'
// import { Button, Icon, Header, Image, Modal, Form } from 'semantic-ui-react'

import './App.css'
import AddItemModal from './components/AddItemModal'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddItemModal
          submitNewItem={obj => console.log('new item obj:', obj)}
        />
      </div>
    )
  }
}

export default compose(withState('items', 'setItems', []))(App)
