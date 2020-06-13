import React, { useState } from 'react';
import axios from 'axios';

export default(props) => {
    const [content,setContent] = useState('')

    const onSubmit = async (event) => {
        event.preventDefault();
        console.log(props.postId)
        await axios.post(`http://localhost:4001/posts/${props.postId}/comments`, {
            content
        }).then((res) => {
            console.log(res)
            console.log(content)
        });

        setContent('');

    }

    return(<div>
        <form onSubmit={onSubmit}>
            <label>New Comment</label>
            <div className="form-group"> 
            <input className="form-control" value={content} onChange={e => setContent(e.target.value)}/></div>
            <button className="btn btn-primary">Submit</button>
        </form>

    </div>);

}