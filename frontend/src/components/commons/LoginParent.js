import React from 'react';
import { Link } from 'react-router-dom';


import './styles/LoginParent.css'
import '../login/styles/BodyPage.css'


export default class HomeParents extends React.Component {
    render(){
        return (
        <div className="style-main d-flex flex-column justify-content-center align-items-center">

            <div className="hero d-flex flex-column justify-content-center">
                <h1 className="tracking-in-expand-fwd-top">Bomberbot PARENT</h1>
                <h3>The easiest way to teach and develop digital skills</h3>
                <Link to="/loginParents">
                <div className="begin">
                    Login
                </div>
                </Link>
            </div>

        </div>
        )
    }
}