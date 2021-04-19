import React, {Component} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container';

 
class CenterBody extends Component{

    displayResults(){
        return this.props.data;

    }

    render(){
    console.log(this.props.data);
    const listItems = this.props.data.map(d => <li key={d.id}><b>Album: </b>{d.album} - 
                                                        <b>Artist: </b>{d.artist} - 
                                                        <b>Genre: </b>{d.genre} - 
                                                        <b>Release Date: </b>{d.releaseDate} - 
                                                        <b>Title: </b>{d.title}
                                                </li>);

    return(
        <div>
            <Container fluid>   
                <Row>
                    <Col>
                            <ListGroup>
                                <ListGroup.Item>
                                    <p>{listItems}</p>
                                </ListGroup.Item>
                            </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )
    }
}

export default CenterBody;