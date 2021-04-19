import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function RightBody(props){
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <h3>Filter By:</h3>
                        <h4>
                            <Form action="/action_page.php">
                                <label>
                                    Album: 
                                    <input type="text" name="searchCriteria" /><br/>
                                </label>
                                <label>
                                    Artist: 
                                    <input type="text" name="searchCriteria" /><br/>
                                </label>
                                <label>
                                    Song Title:
                                    <input type="text" name="searchCriteria"  /><br/>
                                </label>
                                <label>
                                    Release Year:
                                    <input type="text" name="searchCriteria"  /><br/><br/>
                                </label>
                                <input type="submit" value="Submit"></input>
                                <input type="reset" value= "Reset"></input>
                            </Form>
                        </h4>
                    </Col>
                </Row>
            </Container>
        </div>
      );
    }
    
    export default RightBody;