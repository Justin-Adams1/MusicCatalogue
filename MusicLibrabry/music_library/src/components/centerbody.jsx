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
    const listItems = this.props.data.map(d => <Row>
                                                    <Col  sm={1} className ="ColumnID">{d.id}</Col>
                                                    <Col  sm={2}>{d.artist}</Col>
                                                    <Col  sm={2}>{d.album}</Col>
                                                    <Col  sm={3}>{d.title}</Col>
                                                    <Col  sm={2} className ="ColumnID">{d.releaseDate}</Col>
                                                    <Col  sm={2}>{d.genre}</Col>
                                                </Row>);

    return(
        <div>
            <Container fluid className ="centerBody">   
                <Row>
                    <Col sm={1} className ="headerColumnid"><h3>ID</h3></Col>
                    <Col sm={2} className ="headerColumn"><h3>Artist</h3></Col>
                    <Col sm={2} className ="headerColumn"><h3>Album</h3></Col>
                    <Col sm={3} className ="headerColumn"><h3>Title</h3></Col>
                    <Col sm={2} className ="headerColumn"><h3>Release Date</h3></Col>
                    <Col sm={2} className ="headerColumn"><h3>Genre</h3></Col>
                </Row>
                <Row>
                    <Col>
                        <p>{listItems}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
    }
}

export default CenterBody;