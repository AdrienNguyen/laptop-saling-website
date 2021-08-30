import React, { Component} from 'react';
import { Input, NavbarToggler, Navbar, Nav, NavItem, NavLink, NavbarBrand,
    Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, InputGroup,
    InputGroupAddon, InputGroupText, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen : false,
            quantityLaptop : localStorage.getItem("order") ? JSON.parse(localStorage.getItem("order")).length : 0
        };
        this.toggle = this.toggle.bind(this);
        this.handleSignOut = this.handleSignOut.bind(this);
    }
    toggle()  {
        this.setState((state) => ({
            isOpen : !state.isOpen
        }));
    }
    handleSignOut() {
        localStorage.clear();
        this.props.history.push('/');
        window.location.reload();
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.cart !== this.props.cart){
            this.setState({
                quantityLaptop : localStorage.getItem("order") ? JSON.parse(localStorage.getItem("order")).length : 0
            })
        }
    }
    render() {
        console.log(this.props.cart)
        return (
            <div className="header" id="header">
                <div className="container-fluid" style={{backgroundColor : "#FFFFFF"}}>  
                    <Navbar light  expand="md">
                        <NavbarBrand href="/">
                            <img src="https://fptshop.com.vn/uploads/originals//fpt-shop-tuyen-nhieu-vi-tri-lam-viec-tai-cac-shop-ha-noi-id27942.png" 
                            alt="image_errors" style={{ width : "180px", height : "50px"}} 
                            />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav  className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="/" active>Trang chủ</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/" active>Bảng tin</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/" active>Liên hệ</NavLink>
                                </NavItem>
                                <NavItem style={{marginLeft : "3rem"}}>
                                    <InputGroup>
                                        <Input type="search" placeholder="Nhập tên laptop" />
                                        <InputGroupAddon addonType="append">
                                            <InputGroupText> <i className="fas fa-search" style={{cursor : "pointer", fontSize : "20px"}}></i></InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </NavItem>
                            </Nav>
                            <div>
                                <i className="fas fa-phone-volume" style={{cursor : "pointer", fontSize : "20px", marginRight : "0.5rem"}}></i>
                                <span style={{marginRight : "3rem"}}><strong>0337479966</strong></span>
                            </div>
                            <Nav>
                                <NavItem>
                                    <Link to="/cart" style={{color : "#43A892"}}>
                                        <i className="fas fa-shopping-cart" 
                                            style={{ fontSize : "28px", cursor : "pointer", marginRight : "1rem"}}>
                                             {
                                                this.state.quantityLaptop === 0
                                                ?
                                                ""
                                                :
                                                <b style={{
                                                    fontSize: "15px", 
                                                    position : "relative", 
                                                    color : "#FFFFFF",
                                                    top : "-9px",
                                                    right : "16px",
                                                    zIndex : "1"
                                                }}>
                                                {
                                                    this.state.quantityLaptop
                                                }
                                                </b> 
                                            }
                                        </i>
                                       
                                    </Link>
                                </NavItem>
                            </Nav>       
                            {
                                localStorage.getItem("signined") ? 
                                <UncontrolledDropdown>
                                <DropdownToggle style={{ backgroundColor : "#43A892"}}>
                                    {localStorage.getItem("name")}
                                </DropdownToggle> 
                                <DropdownMenu>
                                    <DropdownItem>Hồ sơ</DropdownItem>
                                    <DropdownItem>Lịch sử </DropdownItem>
                                    <DropdownItem  onClick={this.handleSignOut}>Đăng xuất</DropdownItem>
                                </DropdownMenu>
                                </UncontrolledDropdown>    
                                :  
                                <UncontrolledDropdown>
                                <DropdownToggle style={{ backgroundColor : "#43A892"}}>
                                    Tài khoản
                                </DropdownToggle> 
                                <DropdownMenu>
                                    <DropdownItem tag="a" href="/login">Đăng nhập</DropdownItem>
                                    <DropdownItem  tag="a" href='/signUp'>Đăng ký</DropdownItem>
                                </DropdownMenu>
                                </UncontrolledDropdown>       
                            }                   
                          
                        </Collapse> 
                    </Navbar>
                </div>
                <div style={{marginTop : "1rem"}} className="container-fluid">
                    <Breadcrumb style={{ backgroundColor : "white"}}>
                        <BreadcrumbItem><Link to="/">Trang chủ</Link></BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    cart : state.cart
});

export default withRouter(connect(mapStateToProps, null)(Header));