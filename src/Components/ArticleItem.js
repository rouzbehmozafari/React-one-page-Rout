import React from 'react';
import { Link } from 'react-router-dom';

const ArticleItem = (props) => {
    return ( 
        <div className="ArticleItem">
                <img src={props.src} alt="pet" />
                <p>{props.title}</p>
                <Link to={`/ArticlesPage/${props.id}`} ><p className='readMore'>Read More</p></Link>
        </div>
     );
}
 
export default ArticleItem;