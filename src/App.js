import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './pages/login/login.jsx'
import Main from './pages/main/main'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route exact strict path='/' component={Main}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App