import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
class ListBrand extends Component {
    render() {
        return(
            <div style={{ margin : "1rem 0", backgroundColor : "#FFFFFF", border : "solid 1px #DDDDDD"}}>
                <Row >
                    <Col sm="1">
                    </Col>
                    <Col sm="10" id="list-brand"> 
                        <h4 style={{ display: "block", textAlign : "center", marginTop : "0.5rem"}}>Khách hàng đối tác</h4>       
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
        );
    }
}

export default ListBrand