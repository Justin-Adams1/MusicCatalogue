import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

//import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './Header.css';
    
class Header extends Component{

updateSong(){
    let id = prompt("Please enter the ID of the song you want to update: ");
    let title = prompt("Please enter the new Song Name: ");
    let album = prompt("Please enter the new Album title for this song: ");
    let artist = prompt("Please enter the new Artist name for this song: ");
    let genre = prompt("Please enter the new Genre for this song: ");
    let releaseDate = prompt("Please enter the new Release Date for this song: ");
    const serverSend = axios.put(("http://localhost:3000/api/songs/" + id), { 
            "title": title,
            "album": album,
            "artist": artist,
            "genre": genre,
            "releaseDate": releaseDate
    });
    alert("Updated Song Successfully");
    }
    
deleteSong(){
    let id = prompt("Please enter the ID of the song you want to update: ");
    const serverSend = axios.delete(("http://localhost:3000/api/songs/" + id));
    alert("Deleted Song Successfully");
}

addSong(){
    let title = prompt("Please enter the new Song Name: ");
    let album = prompt("Please enter the new Album title for this song: ");
    let artist = prompt("Please enter the new Artist name for this song: ");
    let genre = prompt("Please enter the new Genre for this song: ");
    let releaseDate = prompt("Please enter the new Release Date for this song: ");
    const serverSend = axios.post(("http://localhost:3000/api/songs/"), { 
            "title": title,
            "album": album,
            "artist": artist,
            "genre": genre,
            "releaseDate": releaseDate
    });
    alert("Added Song Successfully");
    }

render(){
    return(
        <div>
            <Container fluid>
                <Row>
                    <Col className ="header">
                        <h1>Music Catalogue Listing</h1>
                    </Col>
                    <Col>
                        <button className = "header" onClick={() => this.updateSong()}>Update Song</button>
                        <button className = "header" onClick={() => this.addSong()}>Add Song</button>
                        <button className = "header" onClick={() => this.deleteSong()}>Delete Song</button>
                    </Col>
                </Row>
            </Container>
        </div>
        )
    }
}
    
    export default Header;
