import React, { Component } from 'react';
import Footer from '../footer';
import Header from '../header';
import HomeContent from './homeContent';

class HomeAdminPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <HomeContent />
                <Footer />
            </div>      
        );
    }
}

export default HomeAdminPage;