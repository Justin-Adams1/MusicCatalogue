import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

//import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './Header.css';
    
class Header extends Component{
render(){
    return(
        <div className="header">
            <Container fluid>
                <Row>
                    <Col>
                        <h1>Music Catalogue Listing</h1>
                    </Col>
                </Row>
            </Container>
        </div>
        )
    }
}
    
    export default Header;
