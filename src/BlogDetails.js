import {useParams, useNavigate, Link} from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {data:blog, isPending, error} = useFetch(" http://localhost:8000/blogs/" + id)

    const handleClick = () => {
        fetch("http://localhost:8000/blogs/" + id, {
            method: "DELETE"
        })
            .then(() =>{
                navigate("/");
            })
        }

    return (
        <div className="blog-details">
            <Link to="/" style={{textDecoration: "none"}}> &#8592; &nbsp; Back</Link>
            {isPending && <div> <br/><br/> Loading...</div>}
            {error && <div>Error : {error}</div>}
            {blog &&
                <article>
                    <h1>{blog.title}</h1>
                    <p>Written by: {blog.author}</p>
                    <p>{blog.body}</p>
                    <button type="button" onClick={handleClick}>Delete blog</button>
                </article>
            }
        </div>
    )
}

export default BlogDetails;