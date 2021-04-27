import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import './RightBody.css';
//import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class RightBody extends Component{
    render() {

        return(
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <h3 className="rightHeader">Filter By: <br/>
                            <input type="text" name="albumSearchCriteria" placeholder="Song Title" className="inputButton" onChange={this.props.titleCapture}/><br/>
                            <input type="text" name="albumSearchCriteria" placeholder="Artist" className="inputButton" onChange={this.props.artistCapture}/><br/>
                            <input type="text" name="albumSearchCriteria" placeholder="Genre" className="inputButton" onChange={this.props.genreCapture}/><br/>
                            <input type="text" name="albumSearchCriteria" placeholder="Album" className="inputButton" onChange={this.props.albumCapture}/><br/>
                        </h3>
                    </Col>
                </Row>
            </Container>
        </div>
        )
    }
}
    
    export default RightBody;