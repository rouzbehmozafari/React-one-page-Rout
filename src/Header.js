import React, { Component } from 'react';
import {Link} from "react-router-dom";
class Header extends React.Component {
    state = {
        insideB : false
    }
    // rem = ()=>{
    //     let firstView = document.getElementById('firstView')
    //     firstView.classList.remove('firstView')
    //     console.log('h')
    // }
    render() { 
        return (
            <div className="Header">
                <p>My Life</p>
                <div className="navItems">
                    <Link to={'/App'}><p>Home</p></Link>
                    <Link to={'/ArticlesPage'}><p  >Blog</p></Link>
                </div>
            </div>
            );
    }
}
 
export default Header;