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

  componentDidMount(){
    this.apiCall()
  }

  render(){
    return (
      <div className="mainPage">
        <Container fluid>
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>
          <br/>
          <Row>
            <Col sm={8}>
              <CenterBody data = {this.state.data} />
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
