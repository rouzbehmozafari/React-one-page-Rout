import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { blogData } from './DataBase';
import Header from './Header';
import Articles from './Articles';
import ArticlesPage from './ArticlesPage';
import Welcome from './Welcome';

class App extends React.Component {
  state = {
    dataBase: blogData
  }
  render() { 
    return (
      <div className="App">
        <div id='firstView' className="firstView">
          <Router>
            <Header/>
            <Routes>
              <Route path = '/' element={<App/>} />
              <Route path = '/ArticlesPage' element = {<ArticlesPage/>} />
            </Routes>
          </Router>
        </div>
        <Router><Welcome/></Router>
        

      </div>
    );
  }
}
 
export default App;

