import React, { Component } from 'react';
import Copy from './Copy'

class App extends Component {
    render() {
        const data = {'edad': '35', 'estatura' : '1.78'}
        return (
            <div>
                <Copy dataUser={data}/>
            </div>
        )
    }
}


export default App;
