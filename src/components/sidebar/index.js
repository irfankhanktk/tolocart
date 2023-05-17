import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Sidebar = () => {
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
            <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
        </Nav>
    );
};

export default Sidebar;
