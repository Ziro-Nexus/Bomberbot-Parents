import React, { Component } from 'react';
import Copy from './Copy'

class App extends Component {
    render() {
        const data = {'nombre': 'marlon', 'apellido' : 'garcia'}
        return (
            <div>
                <Copy dataUser={data}/>
            </div>
        )
    }
}


export default App;
