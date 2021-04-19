import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

//import Button from 'react-bootstrap/Button';
import './CenterBody.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container';
 
class CenterBody extends Component{

    render(){
    const listItems = this.props.data.map(d => <li key={d.id}>  <b>Album: </b>{d.album} - 
                                                                <b>Artist: </b>{d.artist} - 
                                                                <b>Genre: </b>{d.genre} - 
                                                                <b>Release Date: </b>{d.releaseDate} - 
                                                                <b>Title: </b>{d.title}
                                                </li>);

    return(
        <div className="centerBody">
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