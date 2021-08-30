import React, { Component } from 'react';
import { Col, Card, CardBody, CardTitle, CardImg, CardSubtitle, Button, CardText, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { addToCart } from '../../actions/cartAction';
import { connect } from 'react-redux';

class LaptopCard extends Component {
    constructor(props){
        super(props);
        this.setBrand = this.setBrand.bind(this);
        this.state = {
            openModalLoginSuggestion : false,
            openModalAddToCart : false
        }
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.closeModalAddToCart = this.closeModalAddToCart.bind(this);
        this.closeModalLoginSuggestion = this.closeModalLoginSuggestion.bind(this)
    }
    convertToSlug(Text) {
        return Text
            .toLowerCase()
            .replace(/ /g,'-')
            .replace(/[^\w-]+/g,'')
            ;
    }
    setBrand() {
        localStorage.setItem("brand", this.props.laptop.brand);
        // Khi click vao phai truyen brand qua trang tiep de render theo brand
        // nen truyen bang localStorage
        var nameLaptop = this.convertToSlug(this.props.laptop.name);
        this.props.history.push("/" + this.props.laptop.id + "/" + nameLaptop);
        window.location.reload();
    }
    // kiem tra xem laptop da co trong cart hay chua
    checkCart(order, orderDetail) {
        let result = false;
        order.forEach(element => {
            if(element.laptop.id === orderDetail.laptop.id){
                result =  true
            }
        });
        return result;
    }
    handleAddToCart() {
        if(!localStorage.getItem('signined')) {
            this.setState({
               openModalLoginSuggestion : true 
            });
        }
        else {
            this.setState({
                openModalAddToCart : true
            });
            let oldOrder = JSON.parse(localStorage.getItem('order')) || [];
            const laptop = this.props.laptop;
            const orderDetail = {
                laptop : laptop,
                quantity : 1
            }
            if(this.checkCart(oldOrder, orderDetail) === false){
                oldOrder.push(orderDetail);
                //stringiy de chuyen tu object sang Json... localstorage chi luu json 
                // => mang object => mangjson duoc luu lai
                localStorage.setItem('order', JSON.stringify(oldOrder));
                this.props.addToCart(oldOrder.length + 1);
            }  else {
                console.log("trong local co roi")
            }
        }
    }
    closeModalAddToCart() {
        this.setState({
            openModalAddToCart : false,
        });
    }
    closeModalLoginSuggestion() {
        this.setState({
            openModalLoginSuggestion : false
        });
    }
    render() {
        const laptop = this.props.laptop;
        const images = laptop.images;
        let price = laptop.price;
        price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        const name = laptop.name
        return (
            <Col sm="3">
                <Card style={{ height : "28rem"}}>
                    <CardBody>
                        <CardImg 
                            onClick={this.setBrand} 
                            style={{ display : "relative", height: "13rem", cursor : "pointer"}} 
                            src={images[0].url_image} alt="errors"
                        />
                        <CardTitle>
                            {name}
                        </CardTitle>
                        <CardSubtitle tag="b">
                            {price}đ
                        </CardSubtitle>
                        <CardText>
                         <i className="icons icon-star star5"></i>
                        </CardText>
                        <div style={{ marginTop : "3rem"}}>
                            <Button color="light" style={{border : "solid 1px #DDDDDD"}}><Link to="" style={{ textDecoration : "none", color : "#43A892" }} onClick={this.setBrand}>Chi tiết</Link></Button>{' '}
                            <Button style={{ backgroundColor : "#43A892"}} onClick={this.handleAddToCart}>Thêm vào giỏ</Button>
                        </div>
                    </CardBody>
                </Card>
                <Modal isOpen={this.state.openModalAddToCart} toggle={this.closeModalAddToCart}>
                    <ModalBody>Đã thêm vào giỏ hàng</ModalBody>
                    <ModalFooter>
                        <Button style={{backgroundColor : "#43A892"}}><Link to="/cart" style={{color : "#FFFFFF", textDecoration : "none"}}>Giỏ hàng</Link></Button>
                        <Button style={{backgroundColor : "#43A892"}} onClick={this.closeModalAddToCart}>OK</Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.openModalLoginSuggestion} toggle={this.closeModalLoginSuggestion}>
                    <ModalBody>Bạn cần đăng nhập để  mua hàng!!!</ModalBody>
                    <ModalFooter>
                        <Button style={{backgroundColor : "#43A892"}}><Link to="/login" style={{color : "#FFFFFF", textDecoration : "none"}}>Đăng nhập</Link></Button>
                        <Button onClick={this.closeModalLoginSuggestion}>Hủy</Button>
                    </ModalFooter>
                </Modal>
            </Col>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToCart : (quantity) => dispatch(addToCart(quantity))
});

export default  withRouter(connect(null, mapDispatchToProps)(LaptopCard));