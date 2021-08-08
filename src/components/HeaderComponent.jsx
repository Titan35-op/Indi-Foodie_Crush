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
                <Container fluid className="navigation bg-color">
                    <Navbar light expand="sm">
                        <NavbarBrand href="/">
                            <img src="assets/images/Logo.jpg" height='70' width='70' alt="Indi Foodie Crush" className='mr-5' />
                            {/* <span className='title text-center font-weight-bold'>Indi Foodie Crush</span> */}
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavLink end className='mx-2 my-1 navLinks' to='/home'><i className='fa fa-home fa-lg'></i><span className='mx-2'>Home</span></NavLink>
                                <NavLink end className='mx-2 my-1 navLinks' to='/aboutus'><i className='fa fa-info fa-lg'></i><span className='mx-2'>About Us</span></NavLink>
                                <NavLink end className='mx-2 my-1 navLinks' to='/Recipes'><i className='fa fa-cutlery'></i><span className='mx-2'>Recipes</span></NavLink>
                                <NavLink end className='mx-2 my-1 navLinks' to='/contactus'><i className='fa fa-comments-o fa-lg'></i><span className='mx-2'>Feedback</span></NavLink>
                            </Nav>
                            <Nav className="mx-3 social" navbar>
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