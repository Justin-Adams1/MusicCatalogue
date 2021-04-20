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
      textResult: ""
    };
  }
 
  async apiCall(){
    try{
      const result = await axios.get("http://www.devcodecampmusiclibrary.com/api/music/");
      const data = result.data;
      
      this.setState({data});

    }
    catch(error){
      console.log(error);
    }
  }

  textCapture = (event)=> {
    this.setState({
      textResult: event.target.value
    });
    
    console.log(this.state.textResult)
  }

  filterData(){
    

    
  }


  componentDidMount(){
    this.apiCall()
  }

  render(){
    return (
      <div className="mainPage">
        <Container fluid>
          <Row>
            <Col>
              <Header data = {this.state.data}  />
            </Col>
          </Row>
          <br/>
          <Row>
            <Col sm={10}>
              <CenterBody data = {this.state.data}/>
            </Col>
            <Col sm={2}>
              <RightBody data = {this.state.data} textCapture = {this.textCapture}/>
            </Col>
          </Row>
        </Container>
      
      </div>
    );
  }
}

export default App;
