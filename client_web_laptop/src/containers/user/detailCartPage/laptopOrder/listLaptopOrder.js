import React, { Component } from 'react';
import LaptopOrder from './laptopOrder';
import {Row, Col} from 'reactstrap';

class ListLaptopOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order : this.props.order
        }
        this.onChangeTotalPrice = this.onChangeTotalPrice.bind(this);
    }
    onChangeTotalPrice() {
        this.setState({
            order : JSON.parse(localStorage.getItem("order"))
        })
    }
    render() {
        const order = this.state.order;
        let totalPrice = 0
        this.state.order.map((orderDetail) => {
            totalPrice += orderDetail.laptop.price * orderDetail.quantity
        });
        totalPrice = totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return (
            <div>
                <div className="order-detail" style={{backgroundColor : "#FFFFFF"}}>
                    {
                        order.map((orderDetail) =>
                            <LaptopOrder 
                                orderDetail={orderDetail} 
                                key={orderDetail.laptop.id}
                                onChangeTotalPrice={this.onChangeTotalPrice}
                            />
                        )
                    }
                </div>
                <div className="total-price" style={{marginTop : "1rem", backgroundColor : "#FFFFFF"}}>
                    <Row style={{padding : "1rem"}}>
                        <Col sm="2">
                        </Col>
                        <Col sm="4">
                            <p style={{textAlign : "center"}}>Tổng tiền:</p>
                        </Col>
                        <Col sm="3">
                            <b style={{color : "red", fontSize : "30px"}}>
                                {
                                    totalPrice
                                }
                                vnđ
                            </b>
                        </Col>
                        <Col sm="2">
                        </Col>
                        <Col sm="1">
                        </Col>
                    </Row>        
                </div>
            </div>
        );
    }
}

export default ListLaptopOrder;