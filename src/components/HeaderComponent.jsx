import { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, NavLink, Button, Container } from 'reactstrap';
import '../css/header.css';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <>
                <Container fluid className="navigation bg-color px-4">
                    <Navbar dark expand="sm">
                        <NavbarBrand href="/">
                            <img src="assets/images/Logo.jpg" height='80' width='80' alt="Indi Foodie Crush"/>
                            {/* <span className='title text-center font-weight-bold'>Indi Foodie Crush</span> */}
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav}/>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavLink className='mx-2 my-1 navLinks text-center' to='/home'><i className='fa fa-home fa-lg mx-2'></i>Home</NavLink>
                                <NavLink className='mx-2 my-1 navLinks text-center' to='/aboutus'><i className='fa fa-info fa-lg mx-2'></i>About Us</NavLink>
                                <NavLink className='mx-2 my-1 navLinks text-center' to='/Recipes'><i className='fa fa-cutlery mx-2'></i>Recipes</NavLink>
                                <NavLink className='mx-2 my-1 navLinks text-center' to='/contactus'><i className='fa fa-comments-o fa-lg mx-2'></i>Feedback</NavLink>
                            </Nav>
                            <Nav className="mx-3 social text-center" navbar>
                                <NavItem>
                                    <Button color="danger" className="rounded-circle">
                                        <span className="fa fa-youtube"></span>
                                    </Button>
                                    <Button color="primary" className="rounded-circle mx-2">
                                        <span className="fa fa-facebook"></span>
                                    </Button>
                                    <Button color="info" className="rounded-circle">
                                        <span className="fa fa-instagram"></span>
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </>
        )
    }
}

export default Header;