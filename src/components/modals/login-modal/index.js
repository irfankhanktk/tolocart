import React, { useState } from 'react';
import { Button, Modal, Nav, Tab, Form, Row, Col } from 'react-bootstrap';

const LoginModal = () => {
    const [showModal, setShowModal] = useState(false);

    const handleModalOpen = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <div>
            <Button variant="primary" onClick={handleModalOpen}>Open Modal</Button>

            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tab.Container defaultActiveKey="email">
                        <Nav variant="tabs" className="mb-3">
                            <Nav.Item>
                                <Nav.Link eventKey="email">Email/Password</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="phone">Phone Number</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="email">
                                <Form>
                                    <Form.Group controlId="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter password" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">Login</Button>
                                    <a href="/forgot-password">Forgot password?</a>
                                </Form>
                            </Tab.Pane>
                            <Tab.Pane eventKey="phone">
                                <Form>
                                    <Form.Group controlId="phone">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="tel" placeholder="Enter phone number" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">Login</Button>
                                </Form>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>Close</Button>
                    <Button variant="primary" onClick={handleModalClose}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default LoginModal;
