import { Component } from "react";
import { Navbar, NavbarBrand, NavbarText, Nav, NavbarToggler, Collapse, NavItem, Button, Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';

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
                <Container fluid className="navigation bg-color px-4 f4">
                    <Navbar light expand="sm">
                        <NavbarBrand href="/">
                            <img src="assets/images/Logo.jpg" height='80' width='80' alt="Indi Foodie Crush" className='d-none d-sm-flex' />
                            <NavbarText className="h1 d-flex d-sm-none my-auto p-0 mobile-logo f3">
                                IndiFoodieCrush
                            </NavbarText>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} className='my-2' />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavLink className='mx-2 my-1 navLinks text-center' to='/home'><i className='fa fa-home fa-lg mx-2'></i>Home</NavLink>
                                <NavLink className='mx-2 my-1 navLinks text-center' to='/Recipes'><i className='fa fa-cutlery mx-2'></i>Recipes</NavLink>
                                <NavLink className='mx-2 my-1 navLinks text-center' to='/aboutus'><i className='fa fa-info fa-lg mx-2'></i>About Us</NavLink>
                                <NavLink className='mx-2 my-1 navLinks text-center' to='/feedback'><i className='fa fa-comments-o fa-lg mx-2'></i>Feedback</NavLink>
                            </Nav>
                            <Nav className="mx-3 social text-center" navbar>
                                <NavItem>
                                    <a href="https://www.youtube.com/channel/UCi1pJfPGVnlUUS1t0AZkq6Q" target="_blank" rel="noreferrer">
                                        <Button color="danger" className="rounded-circle">
                                            <span className="fa fa-youtube"></span>
                                        </Button>
                                    </a>
                                    <a href="https://m.facebook.com/indifoodiecrush/" target="_blank" rel="noreferrer">
                                    <Button color="primary" className="rounded-circle mx-2">
                                        <span className="fa fa-facebook"></span>
                                    </Button> 
                                    </a>
                                    <a href="https://www.instagram.com/indifoodiecrush/" target="_blank" rel="noreferrer">
                                        <Button color="info" className="rounded-circle">
                                            <span className="fa fa-instagram"></span>
                                        </Button>
                                    </a>
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