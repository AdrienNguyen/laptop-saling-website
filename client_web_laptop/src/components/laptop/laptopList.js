import React, { Component } from 'react';
import LaptopCard from './laptopCard';
import { Row } from 'reactstrap';

class LaptopList extends Component {
    render() {
        const laptops = this.props.laptops;
        return (
            <Row style={{ marginTop: "3rem", marginBottom : "3rem"}}>
                {
                    laptops.map((laptop) => <LaptopCard laptop={laptop} key={laptop.id}/>)
                } 
            </Row>
               
        );
    }
}
export default LaptopList;