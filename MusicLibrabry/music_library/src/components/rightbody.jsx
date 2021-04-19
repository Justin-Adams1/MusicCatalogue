import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function RightBody(props){
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <h3>Choices</h3>
                    </Col>
                </Row>
            </Container>
        </div>
      );
    }
    
    export default RightBody;