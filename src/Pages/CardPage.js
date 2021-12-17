import CardDetails from "../CardDetails";
import { useParams } from "react-router-dom";
import { blogData } from "../DataBase";

const CardPage = () => {
    let { id } = useParams()

    let item = blogData.filter(elt => {
        return elt.id.toString() === id.toString()
    })

    return ( <div className="CardPage">
        {item.map(a=> <CardDetails
            id = {a.id}
            src = {a.img_url}
            title = {a.title}
            author = {a.author}
            description = {a.description}
            published_date = {a.published_date}
            />)}
    </div> );
}
 
export default CardPage;