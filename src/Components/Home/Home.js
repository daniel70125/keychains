import React, { Component } from 'react';
import './Home.scss';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id='container'>
                <h1>Kiera's Keychains</h1>
                <p>Est. 2020©</p>
            </div>
         );
    }
}
 
export default Home;