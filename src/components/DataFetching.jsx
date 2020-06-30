import React,{useState,useEffect} from 'react'
import axios from 'axios';
function DataFetching() {
    const[post , setPost] = useState({});
    const[id , setId] = useState(1);
    const[idwithButton , setIdwithButton] = useState(1);
    const handledClick = () => {
        setIdwithButton(id)
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idwithButton}`)
            .then(res => {
                console.log(res);
                setPost(res.data)

            })
            .catch(err => {
                console.log('error');
            })
    },[idwithButton])
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button"  onClick={handledClick}>Fetch Post</button>
            <div>
                {post.title}
            </div>
            {/* <ul>
                {
                    posts.map((post) =><li key={post.id}>{post.title}</li> )
                }
            </ul> */}
            
        </div>
    )
}

export default DataFetching
