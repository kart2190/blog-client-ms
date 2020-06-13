import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {

    const [posts, setPosts] = useState({})
    const fetchPosts = async () => {
        const result = await axios.get('http://localhost:4000/posts');
        setPosts(result.data);
    }

    useEffect(() => {
        fetchPosts();
    },[])

    console.log(posts)

    return <div />
}