import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import { blogData } from './DataBase';
import Header from './Components/Header';
import ArticlesPage from './Pages/ArticlesPage';
import HomePage from './Pages/HomePage'; 
import CardPage from './Pages/CardPage'

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
              <Route path = '/ArticlesPage/:id' element = {<CardPage/>} />
            </Routes>
          </Router>
      </div>
    );
  }
}
 
export default App;

