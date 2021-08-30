import React, { Component } from 'react';
import { Row, Col, Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import './laptopInfo.css';

class LaptopInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isStoreModal : false,
            isSuperviorModal : false
        }
        this.toggleStoreModal = this.toggleStoreModal.bind(this);
        this.toggleSuperviorModal = this.toggleSuperviorModal.bind(this);
    }
    toggleStoreModal() {
        this.setState((preState) => ({
            isStoreModal : !preState.isStoreModal
        }));
    }
    toggleSuperviorModal() {
        this.setState((preState) => ({
            isSuperviorModal : !preState.isSuperviorModal
        }));
    }
    render() {
        const laptop = this.props.laptop;
        const images = laptop.images;
        return (
            <div className="laptop-info-container" style={{backgroundColor : "#FFFFFF"}}>
                <Row>
                   <Col sm="12">
                        <h4  style={{padding : "1.5rem 1rem"}}>{laptop.name}{' '}
                        ({laptop.cpu}/{laptop.ram}/{laptop.screen})
                        </h4>
                   </Col>
                </Row>
                <Row>
                    <Col sm="4">
                        <div className="latop-info">
                            <div className="laptop-image" style={{margin : "0 1rem"}}>
                                {images  !== undefined ? 
                                <img style={{ 
                                    display : "relative", 
                                    maxWidth : "100%", 
                                    height: "auto", 
                                    padding : "1rem", 
                                    border : "solid 1px #DDDDDD"
                                    }} 
                                    src={images[0].url_image} 
                                    alt="errors" 
                                /> 
                                : ""}                        
                            </div>
                            <div className="laptop-info-summary" style={{marginTop : "2rem"}}>
                                <ul style={{listStyleType : "none", paddingLeft : "1rem"}}>
                                    <li>- Bộ VXL: {laptop.cpu}</li>
                                    <li>- Card đồ họa: {laptop.graphic_card}</li>
                                    <li>- Bộ nhớ: {laptop.ram}</li>
                                    <li>- Ổ cứng/ Đĩa quang: {laptop.storage}</li>
                                    <li>- Màn hình: {laptop.screen}</li>
                                    <li>- Hệ điều hành: {laptop.os}</li>
                                    <li>- Màu sắc: {laptop.color}</li>
                                    <li>- Chất liệu: {laptop.material}</li>
                                    <li><a href="#laptop-detail" style={{textDecoration : "none", color : "#43A892", fontSize : "15px"}}>Xem chi tiết</a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col sm="4">
                        <div className="sale-info" style={{paddingLeft : "1rem"}}>
                            <div className="evaluation-info">
                                <p>Đánh giá: 5 sao | Kho hàng:   
                                    {laptop.quantity !== 0 
                                        ? <span style={{color: "$d42333"}}> hết hàng</span>
                                        : <span style={{color: "#ffa53f"}}> có hàng</span>
                                    }
                                </p>
                            </div>
                            <div className="sale-info-detail" style={{backgroundColor : "#F0F0F0", height : "auto"}}>
                                <p style={{padding : "1rem"}}>Giá bán: {laptop.price} đ</p>
                                <b style={{padding : "1rem"}}>Giá khuyễn mãi: 
                                    <span style={{color : "#d42333", fontSize : "25px"}}> {laptop.price}</span> đ
                                    <span style={{fontSize : "12px", color : "#888"}}> [Giá đã có VAT]</span>
                                </b>
                            </div>
                            <div className="guarantee-info" style={{paddingTop : "1rem"}}>
                                <p>Bảo hành: Chính hãng 12 tháng. Đổi mới 30 ngày</p>
                            </div>
                            <div className="cart-button">
                                <Button color="danger">Mua ngay</Button>{' '}
                                <Button style={{backgroundColor : "#43A892"}}>Thêm vào giỏ</Button>
                            </div>
                            <div className="advertisement" style={{paddingTop : "6rem"}}>
                                <div className="line" style={{borderTop : "solid 1px #ddd", paddingTop : "1rem"}}></div>
                                <div className="advertisement-content">
                                    <h5 style={{color : "#43A892"}}>Ưu đãi và tặng khuyến mãi:</h5>
                                    <p style={{color : "#056bad"}}>
                                        Từ ngày 1/4 đến ngày 30/4, tặng:
                                        <br />
                                        -  Chuột không dây HP Z3700 trị giá 390.000đ
                                        <br />
                                        - Túi chống sốc NAP
                                        <br />
                                        - Balo NAP
                                        <br />
                                        - Bộ vệ sinh laptop cao cấp
                                        <br />
                                        - Giảm 30% khi cặp or balo thời trang Gearmax, DTBG, Coolbell, Tucano…
                                        <br />
                                        - Giảm 5% cho ram laptop, SSD, ổ cứng di động, ổ cứng laptop..
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm="4">
                        <div className="store-info" style={{padding : "0 1rem"}}>
                            <div className="pr-store" style={{border : "solid 1px #aaa", padding : "1rem 2rem"}}>
                                    <h6 style={{ color : "red"}}>YÊN TÂM MUA SẮP TẠI NAP SHOP</h6>
                                    <ul style={{listStyleType : "none", paddingLeft : "0"}}>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <span> Giao hàng miễn phí lên đến 150km</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <span> Thanh toán tiện lợi</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <span> Sản phẩm 100% chính hãng</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <span> Giá cạnh tranh nhất thị trường</span>
                                        </li>
                                    </ul>
                            </div>
                            <div className="go-store" style={{margin : "1rem 2rem"}}>
                                <h6 className="text-hover" style={{cursor : "pointer", color : "#43A892"}} onClick={this.toggleStoreModal}>BẠN MUỐN ĐẾN CỬA HÀNG? 
                                    {' '}<i className="fas fa-caret-down"></i>
                                </h6>
                            </div>
                            <div className="address-store" style={{border : "solid 1px #aaa", padding : "1rem 2rem"}}>
                            <h6 style={{ color : "red"}}>Đang còn hàng tại cửa hàng:</h6>
                                    <ul style={{listStyleType : "none", paddingLeft : "0"}}>
                                       <li>- Yên Vỹ, Hòa Tiến, YP, BN</li>
                                       <li>- Yên Hậu, Hòa Tiến, YP, BN</li>
                                       <li>- Yên Tân, Hòa Tiến, YP, BN</li>
                                       <li>- Yên Diên Lộc, Hòa Tiến, YP, BN</li>
                                    </ul>
                            </div>
                            <div className="go-supervisor" style={{margin : "1rem 2rem"}}>
                                <h6 className="text-hover" style={{cursor : "pointer", color : "#43A892"}} onClick={this.toggleSuperviorModal}>BẠN CẦN CHUYÊN VIÊN TƯ VẤN? 
                                    {' '}<i className="fas fa-caret-down"></i>
                                </h6>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Modal isOpen={this.state.isStoreModal} toggle={this.toggleStoreModal}>
                    <ModalHeader toggle={this.toggleStoreModal}>Danh sách cửa hàng</ModalHeader>
                    <ModalBody>
                        <b>Yên Vỹ, Hòa Tiến, Yên Phong, Bắc Ninh</b>
                        <p>Điện thoại <span style={{color : "red"}}>033 747 9966</span></p>
                        <b>Yên Hậu, Hòa Tiến, Yên Phong, Bắc Ninh</b>
                        <p>Điện thoại <span style={{color : "red"}}>037 210 9881</span></p>
                        <b>Yên Tân, Hòa Tiến, Yên Phong, Bắc Ninh</b>
                        <p>Điện thoại <span style={{color : "red"}}>036 991 6015</span></p>
                        <b>Diên Lộc, Hòa Tiến, Yên Phong, Bắc Ninh</b>
                        <p>Điện thoại <span style={{color : "red"}}>038 463 7238</span></p>
                        <b>Đồng Nhân, Hòa Tiến, Yên Phong, Bắc Ninh</b>
                        <p>Điện thoại <span style={{color : "red"}}>0984 451 087</span></p>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isSuperviorModal} toggle={this.toggleSuperviorModal}>
                    <ModalHeader toggle={this.toggleSuperviorModal}>Chuyên gia tư vấn: 033 747 9966</ModalHeader>
                    <ModalBody>
                        <b style={{color : "red"}}>Sản phẩm Gaming: (Nhánh 1)</b>
                        <p>PC gaming (Nhánh phụ 1)</p>
                        <p>Laptop gaming, màn hình gaming (Nhánh phụ 2)</p>
                        <p>Bàn phím, chuột (Nhánh phụ 3)</p>
                        <b style={{color : "red"}}>Sản phẩm camera: (Nhánh 2)</b>
                        <p>Camera doanh nghiệp (Nhánh phụ 1)</p>
                        <p>Camera nhà thông minh (Nhánh phụ 1)</p>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default LaptopInfo;