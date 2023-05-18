import React from 'react';
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { PrimaryButton } from '../buttons';

export function TopMenu() {
    return (
        <div className="container-fluid">
            <Navbar bg="light" expand="lg" collapseOnSelect>
                <LinkContainer to="/">
                    <Navbar.Brand>React App</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" style={{ justifyContent: 'space-between' }}>

                    <Nav className="mr-auto">
                        <LinkContainer to="/about">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <div className='d-flex flex-row'>
                        <Nav className="ml-auto">
                            <Form className='me-2'>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            </Form>

                            {/* <LinkContainer to="/login"> */}
                            {/* <Nav.Link>Login</Nav.Link> */}
                            <PrimaryButton className={'px-4 me-2'} title={'Log in'}
                                style={{ background: '#E9EBF2', border: 0, color: '#000000', borderRadius: '10px', }} />
                            {/* </LinkContainer> */}
                            {/* <LinkContainer to="/logout"> */}
                            {/* <Nav.Link>Logout</Nav.Link> */}
                            <PrimaryButton className={'px-4'} title={'Sign up'}
                                style={{ background: '#FF5A00', border: 0, color: '#FFFFFF', borderRadius: '10px', }} />
                            {/* </LinkContainer> */}
                        </Nav>
                    </div>
                </Navbar.Collapse>

            </Navbar>
        </div>
    );
}

