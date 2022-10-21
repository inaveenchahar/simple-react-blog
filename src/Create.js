import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Create = () => {

    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [isPending, setIsPending] = useState(false);
    const [author, setAuthor] = useState("Jon Doe");



    const addBlog = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        setIsPending(true);

        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
            .then(() => {
                setIsPending(false);
                navigate("/")
            })

    }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={(e)=> {addBlog(e)}}>
                <label>Title: </label>
                <input required value={title} type="text" onChange={(e) => setTitle(e.target.value)}/>
                <label>Body: </label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)} />
                <label>Author: </label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Jon Doe">Jon Doe</option>
                    <option value="Richard Harrison">Richard Harrison</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled >Add Blog ...</button> }
            </form>
        </div>
    )
}

export default Create;