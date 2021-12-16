import { Link } from "react-router-dom";

const Welcome = () => {
    return ( 
        <div className="welcome">
            <h1>Welcome to my simple Blog</h1>
            <Link to='/ArticlesPage' ><p>Go to Articles</p></Link>
        </div>
     );
}
 
export default Welcome;