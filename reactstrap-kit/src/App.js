import React, { Component } from 'react';
// import logo from './logo.svg';
import {Bar} from 'react-chartjs-2';
import { Container, Row, Col, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
          label: "My First dataset",
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45],
        }]
      }
    }
  }
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col xs='6'>
              <Bar data={this.state.data} />
            </Col>
            <Col xs='6'>
              <Button color="primary">primary</Button>{' '}
              <Button color="secondary">secondary</Button>{' '}
              <Button color="success">success</Button>{' '}
              <Button color="info">info</Button>{' '}
              <Button color="warning">warning</Button>{' '}
              <Button color="danger">danger</Button>{' '}
              <Button color="link">link</Button>


              <Breadcrumb>
                <BreadcrumbItem active>Home</BreadcrumbItem>
              </Breadcrumb>
              <Breadcrumb>
                <BreadcrumbItem><a onClick={() => {}} href="javascript.void(0)">Home</a></BreadcrumbItem>
                <BreadcrumbItem active>Library</BreadcrumbItem>
              </Breadcrumb>
              <Breadcrumb>
                <BreadcrumbItem><a onClick={() => {}} href="javascript.void(0)">Home</a></BreadcrumbItem>
                <BreadcrumbItem><a onClick={() => {}} href="javascript.void(0)">Library</a></BreadcrumbItem>
                <BreadcrumbItem active>Data</BreadcrumbItem>
              </Breadcrumb>
              </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
