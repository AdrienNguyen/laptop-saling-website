import React, { Component } from 'react';
import LaptopCard from './laptopCard';
import { Row } from 'reactstrap';

class LaptopSuggestionList extends Component {
    render() {
        const laptopSuggestions = this.props.laptopSuggestions;
        const laptops = laptopSuggestions.slice(0, 4);
        return (
            <div className="laptop-suggestions" style={{backgroundColor : "#FFFFFF", marginTop : "2rem", padding : "1rem"}}>
                <div className="laptop-suggestions-label" style={{textAlign : "center"}}>
                    <h5>SẢN PHẨM TƯƠNG ĐƯƠNG</h5>
                </div>
                <Row>
                    {
                        laptopSuggestions.length > 0 ? 
                        laptops.map((laptop) => 
                            <LaptopCard 
                                laptop={laptop}
                                key={laptop.id}
                            />
                        )
                        : ""
                    }
                </Row>
            </div>
        );
    }
}

export default LaptopSuggestionList;