import React, { Component } from 'react';

const ArticleItem = (props) => {
    return ( 
        <div className="ArticleItem">
                <img src={props.src} alt="pet" />
                <p>{props.title}</p>
                <p className='readMore'>Read More</p>
        </div>
     );
}
 
export default ArticleItem;