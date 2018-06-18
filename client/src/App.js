import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StoryDashboard from './containers/StoryDashboard';
import LocationDashboard from './containers/LocationDashboard';
import CategoryDashboard from './containers/CategoryDashboard';
import Home from './containers/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route path='/' component={Home} />
          <Route path='/stories' component={StoryDashboard} />
          <Route path='/locations' component={LocationDashboard} />
          <Route path='/categories' component={CategoryDashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
