import React, { Component } from 'react';
import { Row, Col, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import './laptopInfo.css';
import { addToCart } from '../../../../actions/cartAction';
import { connect } from 'react-redux';

class LaptopInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isStoreModal: false,
            isSuperviorModal: false,
            openModalLoginSuggestion: false,
            openModalAddToCart: false,

        }
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.closeModalAddToCart = this.closeModalAddToCart.bind(this);
        this.closeModalLoginSuggestion = this.closeModalLoginSuggestion.bind(this)
        this.toggleStoreModal = this.toggleStoreModal.bind(this);
        this.toggleSuperviorModal = this.toggleSuperviorModal.bind(this);
        this.converPrice = this.converPrice.bind(this);
    }
    toggleStoreModal() {
        this.setState((preState) => ({
            isStoreModal: !preState.isStoreModal
        }));
    }
    toggleSuperviorModal() {
        this.setState((preState) => ({
            isSuperviorModal: !preState.isSuperviorModal
        }));
    }
    converPrice(price) {
        price = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return price;
    }

    // kiem tra xem laptop da co trong cart hay chua
    checkCart(order, orderDetail) {
        let result = false;
        order.forEach(element => {
            if (element.laptop.id === orderDetail.laptop.id) {
                result = true
            }
        });
        return result;
    }

    handleAddToCart() {
        if (!localStorage.getItem('signined')) {
            this.setState({
                openModalLoginSuggestion: true
            });
        }
        else {
            this.setState({
                openModalAddToCart: true
            });
            let oldOrder = JSON.parse(localStorage.getItem('order')) || [];
            const laptop = this.props.laptop;
            const orderDetail = {
                laptop: laptop,
                quantity: 1
            }
            if (this.checkCart(oldOrder, orderDetail) === false) {
                oldOrder.push(orderDetail);
                //stringiy de chuyen tu object sang Json... localstorage chi luu json 
                // => mang object => mangjson duoc luu lai
                localStorage.setItem('order', JSON.stringify(oldOrder));
                this.props.addToCart(oldOrder.length + 1);
            } else {
                console.log("trong local co roi")
            }
        }
    }

    closeModalAddToCart() {
        this.setState({
            openModalAddToCart: false,
        });
    }
    closeModalLoginSuggestion() {
        this.setState({
            openModalLoginSuggestion: false
        });
    }

    render() {
        const laptop = this.props.laptop;
        const images = laptop.images;
        return (
            <div className="laptop-info-container" style={{ backgroundColor: "#FFFFFF" }}>
                <Row>
                    <Col sm="12">
                        <h4 style={{ padding: "1.5rem 1rem" }}>{laptop.name}{' '}
                            ({laptop.cpu}/{laptop.ram}/{laptop.screen})
                        </h4>
                    </Col>
                </Row>
                <Row>
                    <Col sm="4">
                        <div className="latop-info">
                            <div className="laptop-image" style={{ margin: "0 1rem" }}>
                                {images !== undefined ?
                                    <img style={{
                                        display: "relative",
                                        maxWidth: "100%",
                                        height: "auto",
                                        padding: "1rem",
                                        border: "solid 1px #DDDDDD"
                                    }}
                                        src={images[0].url_image}
                                        alt="errors"
                                    />
                                    : ""}
                            </div>
                            <div className="laptop-info-summary" style={{ marginTop: "2rem" }}>
                                <ul style={{ listStyleType: "none", paddingLeft: "1rem" }}>
                                    <li>- B??? VXL: {laptop.cpu}</li>
                                    <li>- Card ????? h???a: {laptop.graphic_card}</li>
                                    <li>- B??? nh???: {laptop.ram}</li>
                                    <li>- ??? c???ng/ ????a quang: {laptop.storage}</li>
                                    <li>- M??n h??nh: {laptop.screen}</li>
                                    <li>- H??? ??i???u h??nh: {laptop.os}</li>
                                    <li>- M??u s???c: {laptop.color}</li>
                                    <li>- Ch???t li???u: {laptop.material}</li>
                                    <li><a href="#laptop-detail" style={{ textDecoration: "none", color: "#43A892", fontSize: "15px" }}>Xem chi ti???t</a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col sm="4">
                        <div className="sale-info" style={{ paddingLeft: "1rem" }}>
                            <div className="evaluation-info">
                                <p>????nh gi??: 5 sao | Kho h??ng:
                                    {laptop.quantity === 0
                                        ? <span style={{ color: "#d42333" }}> h???t h??ng</span>
                                        : <span style={{ color: "#43A892" }}> c?? h??ng</span>
                                    }
                                </p>
                            </div>
                            <div className="sale-info-detail" style={{ backgroundColor: "#F0F0F0", height: "auto" }}>
                                <p style={{ padding: "1rem" }}>Gi?? b??n: {this.converPrice(laptop.price)} ??</p>
                                <b style={{ padding: "1rem" }}>Gi?? khuy???n m??i:
                                    <span style={{ color: "#d42333", fontSize: "25px" }}> {this.converPrice(laptop.price)}</span> ??
                                    <span style={{ fontSize: "12px", color: "#888" }}> [Gi?? ???? c?? VAT]</span>
                                </b>
                            </div>
                            <div className="guarantee-info" style={{ paddingTop: "1rem" }}>
                                <p>B???o h??nh: Ch??nh h??ng 12 th??ng. ?????i m???i 30 ng??y</p>
                            </div>
                            <div className="cart-button">
                                <Button color="danger">Mua ngay</Button>{' '}
                                <Button style={{ backgroundColor: "#43A892" }} onClick={this.handleAddToCart}>Th??m v??o gi???</Button>
                            </div>
                            <div className="advertisement" style={{ paddingTop: "6rem" }}>
                                <div className="line" style={{ borderTop: "solid 1px #ddd", paddingTop: "1rem" }}></div>
                                <div className="advertisement-content">
                                    <h5 style={{ color: "#43A892" }}>??u ????i v?? t???ng khuy???n m??i:</h5>
                                    <p style={{ color: "#056bad" }}>
                                        T??? ng??y 1/4 ?????n ng??y 30/4, t???ng:
                                        <br />
                                        -  Chu???t kh??ng d??y HP Z3700 tr??? gi?? 390.000??
                                        <br />
                                        - T??i ch???ng s???c NAP
                                        <br />
                                        - Balo NAP
                                        <br />
                                        - B??? v??? sinh laptop cao c???p
                                        <br />
                                        - Gi???m 30% khi c???p or balo th???i trang Gearmax, DTBG, Coolbell, Tucano???
                                        <br />
                                        - Gi???m 5% cho ram laptop, SSD, ??? c???ng di ?????ng, ??? c???ng laptop..
                                    </p>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm="4">
                        <div className="store-info" style={{ padding: "0 1rem" }}>
                            <div className="pr-store" style={{ border: "solid 1px #aaa", padding: "1rem 2rem" }}>
                                <h6 style={{ color: "red" }}>Y??N T??M MUA S???P T???I NAP SHOP</h6>
                                <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                                    <li>
                                        <i className="fas fa-star"></i>
                                        <span> Giao h??ng mi???n ph?? l??n ?????n 150km</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-star"></i>
                                        <span> Thanh to??n ti???n l???i</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-star"></i>
                                        <span> S???n ph???m 100% ch??nh h??ng</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-star"></i>
                                        <span> Gi?? c???nh tranh nh???t th??? tr?????ng</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="go-store" style={{ margin: "1rem 2rem" }}>
                                <h6 className="text-hover" style={{ cursor: "pointer", color: "#43A892" }} onClick={this.toggleStoreModal}>B???N MU???N ?????N C???A H??NG?
                                    {' '}<i className="fas fa-caret-down"></i>
                                </h6>
                            </div>
                            <div className="address-store" style={{ border: "solid 1px #aaa", padding: "1rem 2rem" }}>
                                <h6 style={{ color: "red" }}>??ang c??n h??ng t???i c???a h??ng:</h6>
                                <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                                    <li>- Y??n V???, H??a Ti???n, YP, BN</li>
                                    <li>- Y??n H???u, H??a Ti???n, YP, BN</li>
                                    <li>- Y??n T??n, H??a Ti???n, YP, BN</li>
                                    <li>- Y??n Di??n L???c, H??a Ti???n, YP, BN</li>
                                </ul>
                            </div>
                            <div className="go-supervisor" style={{ margin: "1rem 2rem" }}>
                                <h6 className="text-hover" style={{ cursor: "pointer", color: "#43A892" }} onClick={this.toggleSuperviorModal}>B???N C???N CHUY??N VI??N T?? V???N?
                                    {' '}<i className="fas fa-caret-down"></i>
                                </h6>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Modal isOpen={this.state.isStoreModal} toggle={this.toggleStoreModal}>
                    <ModalHeader toggle={this.toggleStoreModal}>Danh s??ch c???a h??ng</ModalHeader>
                    <ModalBody>
                        <b>Y??n V???, H??a Ti???n, Y??n Phong, B???c Ninh</b>
                        <p>??i???n tho???i <span style={{ color: "red" }}>033 747 9966</span></p>
                        <b>Y??n H???u, H??a Ti???n, Y??n Phong, B???c Ninh</b>
                        <p>??i???n tho???i <span style={{ color: "red" }}>037 210 9881</span></p>
                        <b>Y??n T??n, H??a Ti???n, Y??n Phong, B???c Ninh</b>
                        <p>??i???n tho???i <span style={{ color: "red" }}>036 991 6015</span></p>
                        <b>Di??n L???c, H??a Ti???n, Y??n Phong, B???c Ninh</b>
                        <p>??i???n tho???i <span style={{ color: "red" }}>038 463 7238</span></p>
                        <b>?????ng Nh??n, H??a Ti???n, Y??n Phong, B???c Ninh</b>
                        <p>??i???n tho???i <span style={{ color: "red" }}>0984 451 087</span></p>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isSuperviorModal} toggle={this.toggleSuperviorModal}>
                    <ModalHeader toggle={this.toggleSuperviorModal}>Chuy??n gia t?? v???n: 033 747 9966</ModalHeader>
                    <ModalBody>
                        <b style={{ color: "red" }}>S???n ph???m Gaming: (Nh??nh 1)</b>
                        <p>PC gaming (Nh??nh ph??? 1)</p>
                        <p>Laptop gaming, m??n h??nh gaming (Nh??nh ph??? 2)</p>
                        <p>B??n ph??m, chu???t (Nh??nh ph??? 3)</p>
                        <b style={{ color: "red" }}>S???n ph???m camera: (Nh??nh 2)</b>
                        <p>Camera doanh nghi???p (Nh??nh ph??? 1)</p>
                        <p>Camera nh?? th??ng minh (Nh??nh ph??? 1)</p>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.openModalAddToCart} toggle={this.closeModalAddToCart}>
                    <ModalBody>???? th??m v??o gi??? h??ng</ModalBody>
                    <ModalFooter>
                        <Button style={{ backgroundColor: "#43A892" }}><Link to="/cart" style={{ color: "#FFFFFF", textDecoration: "none" }}>Gi??? h??ng</Link></Button>
                        <Button style={{ backgroundColor: "#43A892" }} onClick={this.closeModalAddToCart}>OK</Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.openModalLoginSuggestion} toggle={this.closeModalLoginSuggestion}>
                    <ModalBody>B???n c???n ????ng nh???p ?????  mua h??ng!!!</ModalBody>
                    <ModalFooter>
                        <Button style={{ backgroundColor: "#43A892" }}><Link to="/login" style={{ color: "#FFFFFF", textDecoration: "none" }}>????ng nh???p</Link></Button>
                        <Button onClick={this.closeModalLoginSuggestion}>H???y</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (quantity) => dispatch(addToCart(quantity))
});

export default connect(null, mapDispatchToProps)(LaptopInfo);