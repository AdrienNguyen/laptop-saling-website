import React,  { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, FormFeedback, ModalBody, ModalFooter, Modal } from 'reactstrap';
import { connect } from 'react-redux';
import { addOrder } from '../../../../actions/orderAction';


class UserOrderInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : localStorage.getItem("name"),
            phone : localStorage.getItem("phone"),
            email : localStorage.getItem("email"),
            address : localStorage.getItem("address"),
            blankAddress : false,
            blankEmail : false,
            blankPhone : false,
            blankName : false,
            checkOrder : false,
            openModal : false,
            confirmOrder : false,
            orderSuccess : false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleCheckOrder = this.handleCheckOrder.bind(this);
        this.handleStoreOrder = this.handleStoreOrder.bind(this);
        this.toggleConfirm = this.toggleConfirm.bind(this);
        this.toggleOrderSuccess = this.toggleOrderSuccess.bind(this);
    }

    handleChange(input, e) {
        this.setState({
            [e.target.name] : e.target.value
        }, () => {
            if(input === "name"){
                this.setState({
                    blankName : this.state.name.length > 0 ? null : true
                })
            }
            else if(input === "address"){
                this.setState({
                    blankAddress : this.state.address.length > 0 ? null : true
                })
            }
            else if(input === "email"){
                this.setState({
                    blankEmail : this.state.email.length > 0 ? null : true
                })
            }
            else if(input === "phone"){
                this.setState({
                    phone : this.state.phone.length > 0 ? Number(this.state.phone) : '',
                    blankPhone : this.state.phone.length > 0 ? null : true
                })
            }
        });
    }

    handleCheckOrder() {
        if( this.state.name.length > 0
            && this.state.email.length > 0
            && this.state.phone !== ''
            && this.state.address.length > 0) 
        {
            this.setState({
                checkOrder : true
            })
        }
    }
    
    async handleStoreOrder() {
        await this.handleCheckOrder();
        if(this.state.checkOrder) {
            const order = JSON.parse(localStorage.getItem("order"));
            const laptops = [];
            order.forEach(element => {
                const laptop = {
                    id : element.laptop.id,
                    quantity : element.quantity
                }
                laptops.push(laptop);
            });
            const data = {
                name : this.state.name,
                address : this.state.address,
                phone : this.state.phone,
                laptops : laptops

            }
            this.props.addOrder(data)
            this.setState({
                checkOrder : false
            })
        }
        this.setState({
            confirmOrder : false
        })
    }
    toggleConfirm() {
        this.setState((preState) => ({
            confirmOrder : !preState.confirmOrder
        }));
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.order.success){
            this.setState({
                orderSuccess : true
            });
        }
    }

    toggleOrderSuccess() {
        this.setState({
            orderSuccess : false
        })
        localStorage.removeItem("order");
        window.location.reload();
    }
    render() {
        return (
            <div className="user-order-info" style={{backgroundColor : "#FFFFFF", padding : "1rem"}}>
                <Form>
                    <FormGroup>
                        <Label>Họ tên*</Label>
                        <Input 
                            type="text"
                            value={this.state.name} 
                            onChange={(e) => this.handleChange(e.target.name, e)}
                            name="name"
                            invalid={this.state.blankName}
                        />
                        <FormFeedback>Tên không được để trống</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label>Địa chỉ*</Label>
                        <Input 
                            type="text"
                            value={this.state.address} 
                            onChange={(e) => this.handleChange(e.target.name, e)}
                            name="address"
                            invalid={this.state.blankAddress}
                        />
                        <FormFeedback>Địa chỉ không được để trống</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label>Số điện thoại*</Label>
                        <Input 
                            type="number"
                            value={this.state.phone} 
                            onChange={(e) => this.handleChange(e.target.name, e)}
                            name="phone"
                            invalid={this.state.blankPhone}
                        />
                         <FormFeedback>Số điện thoại không được để trống</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label>Email*</Label>
                        <Input 
                            type="email"
                            value={this.state.email} 
                            onChange={(e) => this.handleChange(e.target.name, e)}
                            name="email"
                            invalid={this.state.blankEmail}
                        />
                         <FormFeedback>Email không được để trống</FormFeedback>
                    </FormGroup>
                    <Button onClick={this.toggleConfirm} style={{backgroundColor : "#43A892"}}>Đặt hàng</Button>
                </Form>
                <Modal isOpen={this.state.confirmOrder} toggle={this.toggleConfirm}>
                    <ModalBody>
                        Bạn có muốn đặt hàng không???
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.handleStoreOrder} style={{backgroundColor : "#43A892"}}>Đặt hàng</Button>
                        <Button color="secondary" onClick={this.toggleConfirm}>Hủy</Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.orderSuccess} toggle={this.toggleOrderSuccess}>
                        <ModalBody>Bạn đã đặt hàng thành công!!!</ModalBody>
                        <ModalFooter>
                            <Button onClick={this.toggleOrderSuccess} style={{ backgroundColor : "#43A892"}}>OK</Button>
                        </ModalFooter>
                </Modal>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    order : state.order
});
const mapDispatchToProps = (dispatch) => ({
    addOrder : (data) => dispatch(addOrder(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserOrderInfo);