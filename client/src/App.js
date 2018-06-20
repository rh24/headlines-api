import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import StoryDashboard from './containers/StoryDashboard';
import KeywordDashboard from './containers/KeywordDashboard';
import CategoryDashboard from './containers/CategoryDashboard';
import Home from './containers/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/stories' component={StoryDashboard} />
            <Route path='/search' component={KeywordDashboard} />
            <Route path='/categories' component={CategoryDashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
