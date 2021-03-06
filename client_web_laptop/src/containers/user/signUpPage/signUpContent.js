import React, { Component } from 'react';
import { Row, Button, Modal, ModalBody, ModalFooter, Col, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signUp } from '../../../actions/accountAction';
import ListBrand from '../../../components/brand/listBrand';

class SignUpContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
            email: '',
            name: '',
            address: '',
            phone: '',
            gender: null,
            password: '',
            rePassword: '',
            blankEmail: false,
            blankName: false,
            blankAddress: false,
            blankPhone: false,
            blankPassword: false,
            validPassword: false,
            blankRePassword: false,
            validRePassword: false,
            checkSignUp: false,
            flagModal: false,// Bien de vong lap componentDidMount ko bi maxium loop
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleCheckPassword = this.handleCheckPassword.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.checkSignUp = this.checkSignUp.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    handleChange(input, e) {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            if (input === "email") {
                this.setState({
                    blankEmail: this.state.email.length > 0 ? null : true
                });
            } else if (input === "name") {
                this.setState({
                    blankName: this.state.name.length > 0 ? null : true
                });
            } else if (input === "address") {
                this.setState({
                    blankAddress: this.state.address.length > 0 ? null : true
                });
            } else if (input === "phone") {
                this.setState({
                    phone: this.state.phone.length > 0 ? Number(this.state.phone) : '',
                    blankPhone: this.state.phone.length > 0 ? null : true
                });
            } else if (input === "password") {
                this.setState({
                    blankPassword: this.state.password.length > 0 ? null : true,
                    validPassword: this.state.password.length > 0 ? true : null
                });
            } else if (input === "gender") {
                this.setState({
                    gender: Number(this.state.gender)
                });
            }
        });
    }
    handleCheckPassword(e) {
        this.setState({
            rePassword: e.target.value
        }, () => {
            this.setState({
                blankRePassword: this.state.password !== this.state.rePassword ? true : null,
                validRePassword: this.state.password === this.state.rePassword ? true : null
            })
        });
    }
    checkSignUp() {
        const { blankEmail, blankName, blankAddress, blankPhone, blankPassword, rePassword,
            email, name, address, password, phone } = this.state;
        if (blankEmail === false) {
            this.setState({
                blankEmail: true
            });
        }
        if (blankName === false) {
            this.setState({
                blankName: true
            })
        }
        if (blankAddress === false) {
            this.setState({
                blankAddress: true
            })
        }
        if (blankPhone === false) {
            this.setState({
                blankPhone: true
            })
        }
        if (blankPassword === false) {
            this.setState({
                blankPassword: true
            })
        }
        if (password !== rePassword) {
            this.setState({
                blankRePassword: true
            })
        }
        if (email.length > 0
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
        ) {
            this.setState({
                checkSignUp: true
            })
        }
    }
    async handleSignUp() {
        await this.checkSignUp();
        if (this.state.checkSignUp) {
            const data = {
                email: this.state.email,
                name: this.state.name,
                phone: this.state.phone,
                gender: this.state.gender,
                address: this.state.address,
                password: this.state.password
            }
            this.props.signUp(data);
            this.setState({
                checkSignUp: false
            });
        }
        if (this.state.flagModal === true) {
            this.setState({
                flagModal: false
            })
        }

    }
    componentDidUpdate() {
        if (this.props.account.apiCallDone === true) {
            if (!this.state.flagModal) {
                this.setState({
                    openModal: true,
                    flagModal: true
                });
            }
        }
    }
    closeModal() {
        this.setState({
            openModal: false
        })
        this.props.history.push("/login");
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="signUp-content" style={{ backgroundColor: "#FFFFFF", border: "solid 1px #DDDDDD", padding: "1.5rem 1rem" }}>
                    <Row>
                        <Col sm="2">
                        </Col>
                        <Col sm="8">
                            <legend>T???o t??i kho???n kh??ch h??ng c?? nh??n</legend>
                            <Form>
                                <FormGroup row>
                                    <Label sm="3">Email <span className="error-text">*</span></Label>
                                    <Col sm="9">
                                        <Input
                                            invalid={this.state.blankEmail}
                                            type="email"
                                            name="email"
                                            onChange={(e) => this.handleChange(e.target.name, e)}
                                            value={this.state.email}
                                        />
                                        <FormFeedback>Email kh??ng ???????c ????? tr???ng</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm="3">T??n <span className="error-text">*</span></Label>
                                    <Col sm="9">
                                        <Input
                                            invalid={this.state.blankName}
                                            type="text"
                                            name="name"
                                            onChange={(e) => this.handleChange(e.target.name, e)}
                                            value={this.state.name}
                                        />
                                        <FormFeedback>T??n kh??ng ???????c ????? tr???ng</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm="3">?????a ch??? <span className="error-text">*</span></Label>
                                    <Col sm="9">
                                        <Input
                                            invalid={this.state.blankAddress}
                                            type="text"
                                            name="address"
                                            onChange={(e) => this.handleChange(e.target.name, e)}
                                            value={this.state.address}
                                        />
                                        <FormFeedback>?????a ch??? kh??ng ???????c ????? tr???ng</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm="2">S??? ??i???n tho???i <span className="error-text">*</span></Label>
                                    <Label sm="1" style={{ textAlign: "right" }}>+84</Label>
                                    <Col sm="9">
                                        <Input
                                            invalid={this.state.blankPhone}
                                            type="number"
                                            name="phone"
                                            onChange={(e) => this.handleChange(e.target.name, e)}
                                            value={this.state.phone}
                                        />
                                        <FormFeedback>S??? ??i???n tho???i kh??ng ???????c ????? tr???ng</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm="3">Gi???i t??nh</Label>
                                    <Col sm="9">
                                        <Label style={{ marginLeft: "0.3rem" }} sm="2">
                                            <Input
                                                type="radio"
                                                name="gender"
                                                onChange={(e) => this.handleChange(e.target.name, e)}
                                                value="1"
                                            />
                                            {' '}Nam
                                        </Label>
                                        <Label style={{ marginLeft: "0.3rem" }} sm="2">
                                            <Input
                                                type="radio"
                                                name="gender"
                                                onChange={(e) => this.handleChange(e.target.name, e)}
                                                value="0"
                                            />
                                            {' '}N???
                                        </Label>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm="3">Ng??y sinh</Label>
                                    <Col sm="9">
                                        <Input
                                            type="date"
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm="3">M???t kh???u <span className="error-text">*</span></Label>
                                    <Col sm="9">
                                        <Input
                                            valid={this.state.validPassword}
                                            invalid={this.state.blankPassword}
                                            type="password"
                                            name="password"
                                            onChange={(e) => this.handleChange(e.target.name, e)}
                                            value={this.state.password}
                                        />
                                        <FormFeedback>M???t kh???u kh??ng ???????c ????? tr???ng</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm="3">Nh???p l???i m???t kh???u <span className="error-text">*</span></Label>
                                    <Col sm="9">
                                        <Input
                                            valid={this.state.validRePassword}
                                            invalid={this.state.blankRePassword}
                                            type="password"
                                            name="rePassword"
                                            onChange={this.handleCheckPassword}
                                            value={this.state.rePassword}
                                        />
                                        <FormFeedback>M???t kh???u kh??ng kh???p</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <Row>
                                    <Col sm="3">
                                    </Col>
                                    <Col sm="9">
                                        <Button style={{ backgroundColor: "#43A892" }} onClick={this.handleSignUp}>????ng k??</Button>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: "1rem" }}>
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
                        {this.props.account.success ? "????ng k?? t??i kho???n th??nh c??ng" : "Email ???? t???n t???i. Vui l??ng ????ng k?? l???i"}
                    </ModalBody>
                    <ModalFooter>
                        <Button style={{ backgroundColor: "#43A892" }} onClick={this.closeModal}>Ok</Button>
                    </ModalFooter>
                </Modal>
            </div>

        );
    }
}
const mapStateToProps = (state) => ({
    account: state.account
});
const mapDispatchToProps = (dispatch) => ({
    signUp: (data) => dispatch(signUp(data))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUpContent));