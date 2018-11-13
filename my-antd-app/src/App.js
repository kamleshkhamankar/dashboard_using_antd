import React, { Component } from 'react';
import './App.css';
import LayoutDesign from './components/layout/LayoutDesign';

class App extends Component {
  render() {
    return (
      <div className="Main">
        <LayoutDesign />
      </div>
    );
  }
}

export default App;