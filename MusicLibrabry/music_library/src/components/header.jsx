import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Header(props){
return (
    <div>
        <Container fluid>
            <Row>
                <Col>Header
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Header;
