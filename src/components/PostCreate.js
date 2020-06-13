import React, { useState } from 'react';
import axios from 'axios'

//functional component
export default () => {

    const onSubmit = () => {
        axios.post('/posts/',{
            
        })
    }
    
    return(
        <div>
            <form onSubmit={onSubmit}>
                <h1>Create Post</h1>
                <div className="form-group">
                <label> Title </label>
                <input className="form-control"></input>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}