import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container';

 
class CenterBody extends React.Component{
    render(){

        // const results = this.state;
        // console.log(results)

    return(
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <ListGroup>
                            <ListGroup.Item>
                            {/* {results.map((track, index) => (
                                <p key={track.id}>{track.artist}, {track.album}, {track.title}, {track.releaseDate}, {track.genre}</p>
                             ))} */}
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