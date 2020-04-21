import React, { Component } from 'react'
import './register.less'
import logo from './images/logo.png'

export default class Register extends Component{

    render(){
        return(
            <div className="register">
                <header className='register-header'>
                    <img src={logo} alt="logo" />
                    <h1>登陆</h1>
                </header>
                <section className='register-section'>
                    <h1>登陆</h1>
                    
                </section>
            </div>
        )
    }
}