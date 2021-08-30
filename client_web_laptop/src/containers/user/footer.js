import React, { Component } from 'react';
import { Row, Col, InputGroup, Input, InputGroupAddon, InputGroupText} from 'reactstrap';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className="container-fluid" style={{backgroundColor : "#E0E0E0", paddingBottom : "1rem"}}>
                <Row style={{paddingTop : "1rem"}}>
                    <Col sm="4">
                        <h5>Truy cập nhanh</h5>
                        <ul style={{listStyleType : "none", padding: "0px"}}>
                            <li><Link to="/">Trang chủ</Link></li>
                            <li><Link to="/admin">Giỏ hàng</Link></li>
                            <li><Link to="/admin">Liên hệ</Link></li>
                        </ul>
                    </Col>
                    <Col sm="4">
                        <h5>Địa chỉ cửa hàng</h5>
                        <strong>NAP Showroom Center</strong>
                        <p>Yên Vỹ - Hòa Tiến - Yên Phong - Bắc Ninh</p>
                        <strong>Điện thoại: 0337479966</strong>
                    </Col>
                    <Col sm="4">
                        <h5>Nhận thông tin</h5>
                        <p>Đăng ký để nhận thông tin mới nhất từ cửa hàng</p>
                        <InputGroup>
                            <Input placeholder="phuonga1k51@gmail.com" />
                            <InputGroupAddon addonType="append">
                            <InputGroupText style={{cursor : "pointer"}}>Đăng ký</InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Footer;

