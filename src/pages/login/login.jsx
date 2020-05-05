import React, { Component } from 'react'
import './login.less'
import logo from './images/logo.png'
import RegisterForm from './children/register-form'
import LoginForm from './children/login-form'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

export default class Login extends Component {

    render() {
        return (
            <div className='login'>
                <header className='login-header'>
                    <img src={logo} alt="logo" />
                    <h1>十八里铺</h1>
                </header>
                <BrowserRouter>
                    <Switch>
                        <Route exact strict path='/login' component={LoginForm}/>
                        <Route exact strict path='/login/register' component={RegisterForm}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
