import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './pages/login/login.jsx'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login}/>
        </Switch>
      </BrowserRouter>

    )
  }
}
export default App