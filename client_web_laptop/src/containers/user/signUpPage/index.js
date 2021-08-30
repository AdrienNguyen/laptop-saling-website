import React,  { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import SignUpContent from '../signUpPage/signUpContent';

class SignUpPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <SignUpContent />
                <Footer />
            </div>  
        );
    }
}

export default SignUpPage;