import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { blogData } from './DataBase';
import Header from './Components/Header';
import Articles from './Components/Articles';
import ArticlesPage from './Pages/ArticlesPage';
import Welcome from './Welcome';
import Home from './Components/Home';
import HomePage from './Pages/HomePage'; 

class App extends React.Component {
  state = {
    dataBase: blogData
  }
  render() { 
    return (
      <div className="App">
        
          <Router>
            <Header/>
            <Routes>
              <Route path = '/' element={<HomePage/>} />
              <Route path = '/ArticlesPage' element = {<ArticlesPage/>} />
            </Routes>
          </Router>
      </div>
    );
  }
}
 
export default App;

