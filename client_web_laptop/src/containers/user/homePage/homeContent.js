import React, { Component } from 'react';
import { Row, Col, Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import './homePage.css';
import LaptopList from '../../../components/laptop/laptopList';
import { getAllLaptop } from '../../../actions/laptopAction';
import Carousel from '../../../components/carousel/carousel';
import  { connect } from 'react-redux';
class HomePage extends Component {
    componentWillMount() {
        this.props.getAllLaptop();
    }
    render() {
        return (
            <div className="container-fluid">
                <Row>
                    <Col sm="12">
                        <Carousel />
                    </Col>
                </Row>
                <div style={{ marginTop : "1rem", backgroundColor : "#FFFFFF", border : "solid 1px #DDDDDD"}}>
                    <Row >
                        <Col sm="1">
                        </Col>
                        <Col sm="10" id="list-brand"> 
                            <h4 style={{ display: "block", textAlign : "center", marginTop : "0.5rem"}}>Thương hiệu laptop</h4>       
                            <span className="item">
                                <a href="/"><img src="https://phucanhcdn.com/media/brand/asus.png" alt="Asus"/>
                                </a>
                            </span>
                            <span className="item">
                                <a href="/"><img src="https://phucanhcdn.com/media/brand/acer.png" alt="Asus"/>
                                </a>
                            </span>
                            <span className="item">
                                <a href="/"><img src="https://phucanhcdn.com/media/brand/apple.png" alt="Asus"/>
                                </a>
                            </span>
                            <span className="item">
                                <a href="/"><img src="https://phucanhcdn.com/media/brand/lenovo.png" alt="Asus"/>
                                </a>
                            </span>
                            <span className="item">
                                <a href="/"><img src="https://phucanhcdn.com/media/brand/msi.png" alt="Asus"/>
                                </a>
                            </span>
                            <span className="item">
                                <a href="/"><img src="https://phucanhcdn.com/media/brand/dell.png" alt="Asus"/>
                                </a>
                            </span>      
                        </Col>
                        <Col sm="1">
                        </Col>
                    </Row>
                </div>
                <div className="list-laptop">
                    <LaptopList laptops={this.props.laptop.laptops}/>
                </div>
                <div className="home-pagination">
                    <Pagination aria-label="Page navigation example">
                        <PaginationItem>
                            <PaginationLink first href="/" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink previous href="/" />
                        </PaginationItem>
                        <PaginationItem active>
                            <PaginationLink href="/">
                            1
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="/">
                            2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="/">
                            3
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="/">
                            4
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="/">
                            5
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink next href="/" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink last href="/" />
                        </PaginationItem>
                    </Pagination>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    laptop : state.laptop
})

const mapDispatchToProps = (dispatch) => ({
    getAllLaptop : () => dispatch(getAllLaptop())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);