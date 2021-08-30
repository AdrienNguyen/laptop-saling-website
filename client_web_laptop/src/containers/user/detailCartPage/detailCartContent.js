import React, { Component } from 'react';
import ListBrand from '../../../components/brand/listBrand';
import UserOrderInfo from './userOrderInfo/userOrderInfo';
import { Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import ListLaptopOrder from './laptopOrder/listLaptopOrder';
import { connect } from 'react-redux';
class DetailCartContent extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="cart-title">
                    <h5>Giỏ hàng của tôi {' '}
                    <Link to="/">
                        <Button color="success" style={{backgroundColor : "#43A892"}} size="sm">Tiếp tục mua hàng</Button>
                    </Link>
                    </h5>
                </div>
                <div className="cart-content">
                    {
                        localStorage.getItem("order")
                        ?
                        <Row>
                            <Col sm="8">
                                <div className="order-info">
                                    <ListLaptopOrder order={JSON.parse(localStorage.getItem("order"))}/>
                                </div>
                            </Col>
                            <Col sm="4">
                                <div className="bill">
                                    <UserOrderInfo />
                                </div>
                            </Col>
                        </Row>
                        :
                        <Row>
                            <Col sm="12">
                                <div className="cart-empty" 
                                    style={{backgroundColor : "#FFFFFF", textAlign : "center", padding : "3.2rem"}}
                                >
                                    <p>Bạn chưa chọn sản phẩm nào vào giỏ hàng</p>
                                </div>
                            </Col>
                        </Row>
                    }
                </div>
                <ListBrand />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    cart : state.cart
});
export default connect(mapStateToProps, null)(DetailCartContent);