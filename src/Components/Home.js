import React, { Component } from 'react';
import {  BrowserRouter as Router,  Routes,  Route,  Link} from "react-router-dom";
import '../App.css';
import { blogData } from '../DataBase';
import Header from './Header';
import Articles from './Articles';
import ArticlesPage from '../Pages/ArticlesPage';
import Welcome from '../Welcome';

class Home extends React.Component {
  state = {
    dataBase: blogData
  }
  render() { 
    return (
      <div className="Home">
          <div id='firstView' className="firstView">
              
          </div>
          <Welcome/>

      </div>
    );
  }
}
 
export default Home;