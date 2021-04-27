import axios from 'axios';
import CenterBody from './components/centerbody';
import RightBody from './components/rightbody';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';

//import Button from 'react-bootstrap/Button';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      titleCapture: "",
      artistCapture: "",
      genreCapture: "",
      albumCapture: "",
      releaseYearCapture: ""
    };
  }
 
  async apiCall(){
    try{
      const result = await axios.get("http://localhost:3000/api/songs");
      const data = result.data;
      
      this.setState({data});

    }
    catch(error){
      console.log(error);
    }
  }

  componentDidMount(){
    this.apiCall()
  }

  titleCapture = (event)=> {
    this.setState({
      titleCapture: event.target.value
    });
  }
  albumCapture = (event)=> {
    this.setState({
      albumCapture: event.target.value
    });
  }
  genreCapture = (event)=> {
    this.setState({
      genreCapture: event.target.value
    });
  }
  artistCapture = (event)=> {
    this.setState({
      artistCapture: event.target.value
    });
  }
  releaseYearCapture = (event)=> {
    this.setState({
      releaseYearCapture: event.target.value
    });
  }


  filterTitle(){ // I can't figure out how to run this search by more than one key, so im going to have to do it individually. 
                  // its not ideal, because its not that versatile.
    let result = this.state.data.filter(search => {
      return search.title.toLowerCase().includes(this.state.titleCapture.toLowerCase())
    });
    return result;
  }
  filterAlbum(){
    let result = this.state.data.filter(search => {
    return search.album.toLowerCase().includes(this.state.albumCapture.toLowerCase())
    });
    return result;
    }
filterArtist(){
    let result = this.state.data.filter(search => {
    return search.artist.toLowerCase().includes(this.state.artistCapture.toLowerCase())
    });
    return result;
    }
filterGenre(){
    let result = this.state.data.filter(search => {
    return search.genre.toLowerCase().includes(this.state.genreCapture.toLowerCase())
    });
    return result;
    }

  checkFilter(){
    let result =[];
    if(this.state.titleCapture !== ""){
      result = this.filterTitle();
      return result;
    }
    if(this.state.albumCapture !== ""){
      result = this.filterAlbum();
      return result;
    }
    if(this.state.artistCapture !== ""){
      result = this.filterArtist();
      return result;
    }
    if(this.state.filterCapture !== ""){
      result = this.filterGenre();
      return result;
    }
  }

  render(){
    let result = this.state.data;

    result = this.checkFilter();
    
    return (
      <div className="mainPage">
        <Container fluid>
          <Row>
            <Col>
              <Header data = {result}  />
            </Col>
          </Row>
          <br/>
          <Row>
            <Col sm={10}>
              <CenterBody data = {result}/>
            </Col>
            <Col sm={2}>
              <RightBody data = {this.state.data}   
                          titleCapture = {this.titleCapture}
                          artistCapture = {this.artistCapture}
                          genreCapture = {this.genreCapture}
                          albumCapture = {this.albumCapture}
                          releaseYearCapture = {this.releaseYearCapture}
              
              
              />
            </Col>
          </Row>
        </Container>
      
      </div>
    );
  }
}

export default App;
