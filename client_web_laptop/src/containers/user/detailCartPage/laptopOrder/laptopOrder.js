import React, { Component } from 'react';
import {
    Row, Col, Input, InputGroup, InputGroupAddon,
    InputGroupText, Modal, ModalBody, ModalFooter, Button
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFromCart } from '../../../../actions/cartAction';

class LaptopOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.orderDetail.quantity,
            noticeMinimum: false
        }
        this.setBrand = this.setBrand.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.setQuantityOrderDetail = this.setQuantityOrderDetail.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleDeleteCart = this.handleDeleteCart.bind(this);
    }
    setBrand() {
        localStorage.setItem("brand", this.props.orderDetail.laptop.brand);
        // Khi click vao phai truyen brand qua trang tiep de render theo brand
        // nen truyen bang localStorage
        this.props.history.push("/detailLaptop/" + this.props.orderDetail.laptop.id);
    }
    setQuantityOrderDetail(orderDetail, quantity) {
        let order = JSON.parse(localStorage.getItem('order')) || [];
        order.forEach(element => {
            if (element.laptop.id === orderDetail.laptop.id) {
                element.quantity = quantity
            }
        });
        localStorage.setItem("order", JSON.stringify(order));
        this.props.onChangeTotalPrice();
    }
    handleChange(input, e) {
        if (input === "+") {
            this.setState((preState) => ({
                quantity: preState.quantity + 1
            }), () => {
                this.setQuantityOrderDetail(this.props.orderDetail, this.state.quantity);
            });

            console.log("cong cong")
        } else if (input === "-") {
            if (this.state.quantity === 1) {
                this.setState({
                    noticeMinimum: true
                });
            } else {
                this.setState((preState) => ({
                    quantity: preState.quantity - 1
                }), () => {
                    this.setQuantityOrderDetail(this.props.orderDetail, this.state.quantity);
                });
            }
        }
    }
    closeModal() {
        this.setState((preState) => ({
            noticeMinimum: !preState.noticeMinimum
        }));;
    }
    handleDeleteCart() {
        let orderDetail = this.props.orderDetail
        let order = localStorage.getItem("order") ? JSON.parse(localStorage.getItem("order")) : [];
        order = order.filter(item => item.laptop.id !== orderDetail.laptop.id);
        localStorage.setItem("order", JSON.stringify(order));
        this.props.onChangeTotalPrice();
        this.props.removeFromCart(order.length);
        if (order.length === 0) {
            localStorage.removeItem("order");
        }
    }
    render() {
        const laptop = this.props.orderDetail.laptop;
        const priceLaptop = (laptop.price * this.state.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return (
            <Row style={{ padding: "1rem" }}>
                <Col sm="2">
                    <img
                        onClick={this.setBrand}
                        src={laptop.images[0]?.url_image}
                        style={{
                            width: "4rem",
                            height: "4rem",
                            border: "solid 1px #DDDDDD",
                            cursor: "pointer"
                        }}
                        alt="errors"
                    />
                </Col>
                <Col sm="4">
                    <h5 onClick={this.setBrand} style={{ cursor: "pointer" }}>{laptop.name}</h5>
                </Col>
                <Col sm="3">
                    <p style={{ color: "red" }}>{priceLaptop} vnđ</p>
                </Col>
                <Col sm="2">
                    <div className="control-quantity">
                        <InputGroup>
                            <InputGroupAddon style={{ cursor: "pointer" }} addonType="prepend" onClick={(e) => this.handleChange("-", e)}>
                                <InputGroupText>-</InputGroupText>
                            </InputGroupAddon>
                            <Input type="text" readOnly value={this.state.quantity} />
                            <InputGroupAddon style={{ cursor: "pointer" }} addonType="append" onClick={(e) => this.handleChange("+", e)}>
                                <InputGroupText>+</InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                </Col>
                <Col sm="1">
                    <div className="icon-delete">
                        <img style={{ cursor: "pointer" }} onClick={this.handleDeleteCart} src="https://www.phucanh.vn/media/lib/icon_cart_del.png" alt="errors" />
                    </div>
                </Col>
                <Modal isOpen={this.state.noticeMinimum} toggle={this.closeModal}>
                    <ModalBody>
                        Trong giỏ cần ít nhất 1 sản phẩm này!!!
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.closeModal} style={{ backgroundColor: "#43A892" }}>OK</Button>
                    </ModalFooter>
                </Modal>
            </Row>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (quantity) => dispatch(removeFromCart(quantity))
});
export default withRouter(connect(null, mapDispatchToProps)(LaptopOrder));