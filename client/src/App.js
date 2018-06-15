import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StoryDashboard from './containers/StoryDashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route path='/stories' component={StoryDashboard} />
        </div>
      </Router>
    );
  }
}

export default App;

// <div>
//   <NavBar />
//   <Router>
//   <div className="App">
//     <Route path="/" component={App} />
//   </div>
//   </Router>
// </div>
