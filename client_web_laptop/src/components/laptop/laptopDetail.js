import React, { Component } from 'react';
import { Table } from 'reactstrap';
class LaptopDetail extends Component {
    render() {
        const laptop = this.props.laptop
        return (
            <div id="laptop-detail" style={{ backgroundColor: "#FFFFFF", marginTop: "2rem" }}>
                <div className="title-characteristic" style={{ textAlign: "center", padding: "1rem" }}><b>ĐẶC ĐIỂM NỔI BẬT</b></div>
                <div className="line" style={{ borderTop: "solid 1px #DDD" }}></div>
                <div className="latop-detail-content" style={{ padding: "1rem" }}>
                    <div className="laptop-name"><b>{laptop.name}</b></div>
                    <div className="laptop-description">{laptop.description}</div>
                    <div className="laptop-image" style={{ textAlign: "center" }}>
                        {
                            laptop.images !== undefined
                                ?
                                <img src={laptop.images[0]?.url_image} alt="errors"
                                    style={{
                                        height: "16rem",
                                        margin: "auto"
                                    }}
                                />
                                :
                                ""
                        }
                    </div>
                    <div className="laptop-detail-info">
                        <b>CHI TIẾT THÔNG SỐ</b>
                        <Table size="sm">
                            <tbody>
                                <tr>
                                    <th scope="row">Tên hãng</th>
                                    <td>{laptop.brand}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Bộ vi xử lý</th>
                                    <td>{laptop.cpu}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Cạc đồ họa</th>
                                    <td>{laptop.graphic_card}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Bộ nhớ</th>
                                    <td>{laptop.ram}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Ổ cứng</th>
                                    <td>{laptop.storage}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Pin</th>
                                    <td>{laptop.pin}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Màu sắc</th>
                                    <td>{laptop.color}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Màn hình</th>
                                    <td>{laptop.screen}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Chất liệu</th>
                                    <td>{laptop.material}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}

export default LaptopDetail;