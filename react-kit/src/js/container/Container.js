import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          {/* <h4>test</h4> */}
          {this.props.children}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}


