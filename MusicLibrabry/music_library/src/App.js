import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import CenterBody from './components/centerbody';
import RightBody from './components/rightbody';
import HeaderObject from './components/header';
//import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      result: [],
    };
  }
 
  async apiCall(){
    try{
      const result = await axios.get("http://www.devcodecampmusiclibrary.com/api/music/");
      
      //result = result.map.keys(result.data);
      const data = result.data;
      console.log(data);
      //console.log.(data[0]);
      this.setState({data});
      console.log(this.state.data[0]);
    }
    catch(error){
      console.log(error);
    }
  }

  componentDidMount(){
    this.apiCall();
  }

  render(){
    return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              <HeaderObject />
            </Col>
          </Row>
          <Row>
            <Col sm={8}>
              <CenterBody />
            </Col>
            <Col sm={4}>
              <RightBody />
            </Col>
          </Row>
        </Container>
      
      </div>
    );
  }
}

export default App;
