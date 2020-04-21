import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './pages/login/login.jsx'
import Register from './pages/login/register.jsx'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
        </Switch>
      </BrowserRouter>

    )
  }
}
export default App