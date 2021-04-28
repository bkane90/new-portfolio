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
                    {/* <Col className="p-0 d-flex" md={3} sm={12}>
                        <box-icon type='logo' color='blue' name='linkedin-square'></box-icon>
                    </Col>
                    <Col className="p-0 d-flex" md={3} sm={12}>
                        <box-icon type='logo' name='github'></box-icon>
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3} sm={12}>
                    </Col> */}
                </Row>
            </Container>
        </footer>
    )

}

export default Footer;