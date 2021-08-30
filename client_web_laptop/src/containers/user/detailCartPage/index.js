import React, { Component } from 'react';
import DetailCartContent from './detailCartContent';
import Footer from '../footer';
import Header from '../header';

class DetailCartPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <DetailCartContent />
                <Footer />
            </div>
        );
    }
}

export default DetailCartPage;