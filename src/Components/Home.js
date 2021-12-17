import React from 'react';
import '../App.css';
import { blogData } from '../DataBase';
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