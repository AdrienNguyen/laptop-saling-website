import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import DetailLaptopContent from './detailLaptopContent';


class DetailLaptopPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <DetailLaptopContent /> 
                <Footer />
            </div>
        );
    }
}
export default DetailLaptopPage;