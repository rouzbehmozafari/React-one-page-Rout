import { Link } from "react-router-dom";
const CardDetails = (props) => {
    return ( <div className="CardDetails">
        <Link to='/ArticlesPage'><p>Back</p></Link>
        <img src={props.src} alt="pic" />
        <h2>{props.title}</h2>
        <h3>{props.published_date}</h3>
        <p>{props.description}</p>
        <p>{props.author}</p>
    </div> );
}
 
export default CardDetails;