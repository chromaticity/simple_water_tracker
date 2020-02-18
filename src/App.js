import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/navigation_bar/NavigationBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Navigation bar component. */}
        <NavigationBar/>
      </div>
    );
  }
}

export default App;
