import React, { Component } from 'react';
import PostCreate from './components/PostCreate'

class App extends Component {
    state = {  }
    render() { 
        return ( <div className="container">
            <PostCreate/>
        </div> );
    }
}
 
export default App;