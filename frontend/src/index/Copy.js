import React from 'react';

function Copy(props) {
    const { dataUser } = props;
    const {nombre, apellido } = dataUser;   
     return (
        <div>
            <h1>el pana se llama {nombre}</h1>
            <h1>el apellido es {apellido}</h1>
        </div>
    )
}


export default Copy;
