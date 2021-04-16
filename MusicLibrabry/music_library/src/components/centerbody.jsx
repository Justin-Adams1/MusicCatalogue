import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container';

 
class CenterBody extends React.Component{
    render(){

    return(
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <ListGroup>
                            <ListGroup.Item>
                               
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
    }
}

export default CenterBody;