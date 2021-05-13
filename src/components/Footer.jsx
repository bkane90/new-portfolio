import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'boxicons/css/boxicons.css';




function Footer() {

    return (
        <footer className="mt-5 pt-5" bg="light" variant="light">
            <Container fluid={true}>
                <Row className="border-top p-3">
                    <Col className="p-0 d-flex justify-content-center">
                        Robert Kane, Jr. © 2021
                    </Col>
                </Row>
            </Container>
        </footer>
    )

}

export default Footer;