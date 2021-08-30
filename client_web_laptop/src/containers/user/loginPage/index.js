import React,  { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import LoginContent from './loginContent';

class LoginPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <LoginContent />
                <Footer />
            </div>  
        );
    }
}

export default LoginPage;