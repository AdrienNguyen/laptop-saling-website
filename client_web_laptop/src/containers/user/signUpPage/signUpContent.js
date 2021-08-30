import React, { Component } from 'react';
import { Row, Button, Modal, ModalBody, ModalFooter, Col, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signUp } from '../../../actions/accountAction';
import ListBrand from '../../../components/brand/listBrand';

class SignUpContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            openModal : false,
            email : '',
            name : '',
            address : '',
            phone : '',
            gender : null,
            password : '',
            rePassword : '',
            blankEmail : false,
            blankName : false,
            blankAddress : false,
            blankPhone : false,
            blankPassword : false,
            validPassword : false,
            blankRePassword : false,
            validRePassword : false,
            checkSignUp : false,
            flagModal : false,// Bien de vong lap componentDidMount ko bi maxium loop
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleCheckPassword = this.handleCheckPassword.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.checkSignUp = this.checkSignUp.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    handleChange(input, e) {
        this.setState({
            [e.target.name] : e.target.value
        }, () => {
            if(input === "email"){
                this.setState({
                    blankEmail : this.state.email.length > 0 ? null : true
                });
            }else if(input === "name"){
                this.setState({
                    blankName : this.state.name.length > 0 ? null : true
                });
            }else if(input === "address"){
                this.setState({
                    blankAddress : this.state.address.length > 0 ? null : true
                });
            }else if(input === "phone"){
                this.setState({
                    phone : this.state.phone.length > 0 ? Number(this.state.phone) : '',
                    blankPhone : this.state.phone.length > 0 ? null : true
                });
            }else if(input === "password"){
                this.setState({
                    blankPassword : this.state.password.length > 0 ? null : true,
                    validPassword : this.state.password.length > 0 ? true : null
                });
            }else if(input === "gender"){
                this.setState({
                    gender : Number(this.state.gender)
                });
            }
        });
    }
    handleCheckPassword(e) {
        this.setState({
            rePassword : e.target.value 
        }, () => {
            this.setState({
                blankRePassword : this.state.password !== this.state.rePassword ? true : null,
                validRePassword : this.state.password === this.state.rePassword ? true : null
            })
        });
    }
    checkSignUp() {
        const {blankEmail, blankName, blankAddress, blankPhone, blankPassword, rePassword,
            email, name, address, password, phone} = this.state;
        if(blankEmail === false){
            this.setState({
                blankEmail : true
            });
        }
        if(blankName === false){
            this.setState({
                blankName : true
            })
        }
        if(blankAddress === false){
            this.setState({
                blankAddress : true
            })
        }
        if(blankPhone === false){
            this.setState({
                blankPhone : true
            })
        }
        if(blankPassword === false){
            this.setState({
                blankPassword : true
            })
        }
        if(password !== rePassword){
            this.setState({
                blankRePassword : true
            })
        }
        if( email.length > 0
            &&
            name.length > 0
            &&
            address.length > 0
            &&
            phone !== ''
            &&
            password.length > 0
            &&
            password === rePassword
        ){
            this.setState({
                checkSignUp : true
            })
        }
    }
    async handleSignUp() {
        await this.checkSignUp();
        if(this.state.checkSignUp){
            const data = {
                email : this.state.email,
                name : this.state.name,
                phone : this.state.phone,
                gender : this.state.gender,
                address : this.state.address,
                password : this.state.password
            }
            this.props.signUp(data);
            this.setState({
                checkSignUp : false 
            });
        }
        if(this.state.flagModal === true){
            this.setState({
                flagModal : false
            })
        }
    }
    componentDidUpdate() {
        if(this.props.account.apiCallDone === true){
            if(!this.state.flagModal){
                this.setState({
                    openModal : true,
                    flagModal : true
                });
            }
        }
    }
    closeModal() {
        this.setState({
            openModal : false
        })
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="signUp-content"  style={{backgroundColor : "#FFFFFF", border : "solid 1px #DDDDDD", padding : "1.5rem 1rem"}}>
                    <Row>
                        <Col sm="2">
                        </Col>
                        <Col sm="8">
                            <legend>Tạo tài khoản khách hàng cá nhân</legend>
                            <Form>
                                <FormGroup row>
                                    <Label sm="3">Email*</Label>
                                    <Col sm="9">
                                        <Input
                                            invalid={this.state.blankEmail}
                                            type="email"
                                            name="email" 
                                            onChange={(e) => this.handleChange(e.target.name, e)}
                                            value={this.state.email}
                                        />
                                        <FormFeedback>Email không được để trống</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm="3">Tên*</Label>
                                    <Col sm="9">
                                        <Input
                                            invalid={this.state.blankName}
                                            type="text" 
                                            name="name"
                                            onChange={(e) => this.handleChange(e.target.name, e)}
                                            value={this.state.name}
                                        />
                                        <FormFeedback>Tên không được để trống</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm="3">Địa chỉ*</Label>
                                    <Col sm="9">
                                        <Input
                                            invalid={this.state.blankAddress}
                                            type="text" 
                                            name="address"
                                            onChange={(e) => this.handleChange(e.target.name, e)}
                                            value={this.state.address}
                                        />
                                         <FormFeedback>Địa chỉ không được để trống</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm="2">Số điện thoại* </Label>
                                    <Label sm="1" style={{textAlign : "right"}}>+84</Label>
                                    <Col sm="9">
                                        <Input
                                            invalid={this.state.blankPhone}
                                            type="number"
                                            name="phone"
                                            onChange={(e) => this.handleChange(e.target.name, e)}
                                            value={this.state.phone}
                                        />
                                        <FormFeedback>Số điện thoại không được để trống</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm="3">Giới tính</Label>
                                    <Col sm="9">
                                        <Label style={{marginLeft: "0.3rem"}} sm="2">
                                            <Input
                                                type="radio" 
                                                name="gender"
                                                onChange={(e) => this.handleChange(e.target.name, e)}
                                                value="1"
                                            />
                                            {' '}Nam
                                        </Label>
                                        <Label style={{marginLeft: "0.3rem"}} sm="2">
                                            <Input
                                                type="radio" 
                                                name="gender"
                                                onChange={(e) => this.handleChange(e.target.name, e)}
                                                value="0"
                                            />
                                            {' '}Nữ
                                        </Label>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm="3">Ngày sinh</Label>
                                    <Col sm="9">
                                        <Input
                                            type="date"
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm="3">Mật khẩu*</Label>
                                    <Col sm="9">
                                        <Input
                                            valid={this.state.validPassword}
                                            invalid={this.state.blankPassword}
                                            type="password" 
                                            name="password"
                                            onChange={(e) => this.handleChange(e.target.name, e)}
                                            value={this.state.password}
                                        />
                                        <FormFeedback>Mật khẩu không được để trống</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm="3">Nhập lại mật khẩu*</Label>
                                    <Col sm="9">
                                        <Input
                                            valid={this.state.validRePassword}
                                            invalid={this.state.blankRePassword}
                                            type="password" 
                                            name="rePassword"
                                            onChange={this.handleCheckPassword}
                                            value={this.state.rePassword}
                                        />
                                        <FormFeedback>Mật khẩu không khớp</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <Row>
                                    <Col sm="3">
                                    </Col>
                                    <Col sm="9">
                                        <Button style={{backgroundColor : "#43A892"}} onClick={this.handleSignUp}>Đăng ký</Button>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop : "1rem"}}>
                                    <Col sm="3">
                                    </Col>
                                    <Col sm="9">
                                        <a href="/signUp"><img src="https://www.phucanh.vn/template/2017/images/img_signup_go.jpg" alt="error" /></a>{' '}
                                        <a href="/signUp"><img src="https://www.phucanh.vn/template/2017/images/img_signup_fb.jpg" alt="error" /></a>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                        <Col sm="2">
                        </Col>
                    </Row>
                </div>
                <ListBrand />
                <Modal isOpen={this.state.openModal} toggle={this.closeModal}>
                    <ModalBody>
                        {this.props.account.success ? "Đăng ký tài khoản thành công" : "Email đã tồn tại. Vui lòng đăng ký lại"}
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
    signUp : (data) => dispatch(signUp(data))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUpContent));