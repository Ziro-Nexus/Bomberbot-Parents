import React from 'react';

import './styles/Loader.css'

function Loader(){

    return (
        <div className="PageLoading">
        <div className="lds-grid">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
        </div>
    )
}

export default Loader;