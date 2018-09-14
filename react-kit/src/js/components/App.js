import React, { Component } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <h4>test</h4>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;