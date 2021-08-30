import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Row, Col, Button, Modal, ModalBody, ModalFooter, FormFeedback } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { login } from '../../../actions/accountAction';
import ListBrand from '../../../components/brand/listBrand';

class LoginContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : '',
            blankEmail : false,
            blankPassword : false,
            openModal : false,
            accountError : false // bien nay de check khi tai khoan sai
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    handleChange(input, e) {
        this.setState({
            [e.target.name] : e.target.value
            // String trong mang se tro thanh bien va nhan gia tri e.target.value
        }, () => {
            if(input === "email"){
                this.setState({
                    blankEmail : this.state.email.length > 0 ? null : true
                });
            } else if (input === "password") {
                this.setState({
                    blankPassword : this.state.password.length > 0 ? null : true
                });
            }
        });
    }
    handleLogin() {
        if(this.state.blankEmail === false){
            this.setState({
                blankEmail : true
            });
        }
        if(this.state.blankPassword === false){
            this.setState({
                blankPassword : true
            })
        }
        if(this.state.email.length > 0 && this.state.password.length > 0){
            const data = {
                email : this.state.email,
                password : this.state.password
            }
            this.props.login(data);   
        }
        if(this.state.accountError === true){
            this.setState({
                accountError : false
            })
        }
       
    }
    closeModal() {
        this.setState({
            openModal : false,
        });
    }
    componentDidUpdate() {
        console.log("Vao vao vao")
        console.log(this.props.account);
        if(this.props.account.apiCallDone) {
            if(this.props.account.success) {  
                localStorage.setItem("signined", this.props.account.success);
                localStorage.setItem("token", this.props.account.token);
                localStorage.setItem("name", this.props.account.data.name);
                localStorage.setItem("role", this.props.account.data.role);
                localStorage.setItem("phone", this.props.account.data.phone);
                localStorage.setItem("address", this.props.account.data.address);
                console.log(this.props.account.data.role);
                localStorage.setItem("id", this.props.account.data.id);
                localStorage.setItem("email", this.props.account.data.email);
                if(localStorage.getItem("signined") && Number(localStorage.getItem("role")) === 0) {
                    this.props.history.push("/");
                }else if(localStorage.getItem("signined") && Number(localStorage.getItem("role")) === 1){
                    this.props.history.push("/admin");
                }
            } else {
                if(!this.state.accountError){
                    this.setState({
                        openModal : true,
                        accountError : true
                    })
                }
              
            }
        }
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="login-content"  style={{backgroundColor : "#FFFFFF", border : "solid 1px #DDDDDD", padding : "1.5rem 1rem"}}>
                    <Row>
                        <Col sm="6">
                            <Form>
                                <Label tag="b" style={{ fontSize : "13px", color : "#888888", marginBottom : "1rem", display : "block"}}>Thông tin khách hàng đăng nhập hệ thống.</Label>
                                <FormGroup row>
                                    <Label sm="2">Email</Label>
                                    <Col sm="10">
                                        <Input 
                                            invalid={this.state.blankEmail}
                                            name="email" 
                                            type="email" 
                                            onChange={(e) => this.handleChange(e.target.name, e)} 
                                            value={this.state.email}
                                        />
                                         <FormFeedback>Email không được để trống</FormFeedback>
                                    </Col>
                                    
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm="2">Mật khẩu</Label>
                                    <Col sm="10">
                                        <Input 
                                            invalid={this.state.blankPassword}
                                            name="password" 
                                            type="password" 
                                            onChange={(e) => this.handleChange(e.target.name, e)} 
                                            value={this.state.password}
                                        />
                                         <FormFeedback>Mật khẩu không được để trống</FormFeedback>
                                    </Col>    
                                </FormGroup>
                                <Row>
                                    <Col sm="2">
                                    </Col>
                                    <Col sm="10">
                                        <Button onClick={this.handleLogin} style={{backgroundColor : "#43A892"}}>Đăng nhập</Button>
                                        <span style={{paddingLeft : "0.5rem"}}>Quên mật khẩu?</span>
                                    </Col>
                                </Row>
                            </Form>

                        </Col>
                        <Col sm="6">
                            <div>
                                <b style={{ fontSize : "13px", color : "#888888", marginBottom : "1rem", display : "block"}}>   
                                    Bạn chưa là thành viên?
                                </b>
                            </div>                
                            <div style={{marginBottom : "1rem"}}>
                                Đăng ký là thành viên để hưởng nhiều lợi ích và đặt mua hàng dễ dàng hơn.
                            </div>
                            <Link to="/signUp" style={{ color : "rgb(1, 172, 241)", textDecoration : "none"}}>Đăng ký tài khoản</Link>
                        </Col>
                    </Row>
                    <Row style={{ marginTop : "1rem"}}>
                        <Col>
                            <a href="/login"><img src="https://www.phucanh.vn/template/2019/images/log-in-with-google.jpg" alt="error"/></a>{' '}
                            <a href="/login"><img src="https://www.phucanh.vn/template/2019/images/log-in-with-facebook.jpg" alt="error"/></a> 
                        </Col>
                    </Row>
                </div>
                <ListBrand />
                <Modal isOpen={this.state.openModal} toggle={this.closeModal}>
                    <ModalBody>
                        Tài khoản hoặc mật khẩu không chính xác
                    </ModalBody>
                    <ModalFooter>
                        <Button style={{backgroundColor : "#43A892"}} onClick={this.closeModal}>Ok</Button>
                    </ModalFooter>
                </Modal>
            </div>
            
        );
    }
}
const mapStateToProps = (state) => ({
    account : state.account
});
const mapDispatchToProps = (dispatch) => ({
    login : (data) => dispatch(login(data))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContent));