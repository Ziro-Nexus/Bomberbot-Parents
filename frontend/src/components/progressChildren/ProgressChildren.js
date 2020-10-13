import React from 'react';
 import { useLocation } from "react-router-dom";

import './styles/ProgressChildren.css';
import  ImagesProgress from '../../images/Card_Children.jpeg';

export default function ProgressChildren(props){

    const location = useLocation();
    console.log(location.state)
    return (
        
        <div className="container-fluid bg-primary justify-content-center style-main">
            <div className="row  bg-alert align-items-center justify-content-end">

                <div className="col-12 col-sm-12  col-lg-12 align-items-center mt-5">
                    <div className="container2">
                        <div className="card2">
                            <div className="face face1">
                                <div className="content">
                                    <img src={ImagesProgress} />
                                    <h3>Project: 3</h3>
                                    <h4>name of project</h4>
                                </div>
                            </div>
                            <div className="face face2">
                                <div className="content">
                                    <p>Lorem ipsum dolor sit amet consecteturQuas cumque minus iste veritatis provident
                                        at.</p>
                                    <a href="/">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>

        </div>

    )
}