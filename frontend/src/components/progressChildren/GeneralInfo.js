import React from 'react';

import './styles/GeneralInfo.css'
import  ImagesProgress from '../../images/Card_Children.jpeg';

function GeneralInfo(){
    return (
        <div className="col-12 col-sm-6  align-items-center mt-5">
                    <div className="container-general">
                        <div className="card-general">
                            <div className="face face1">
                                <div className="content">
                                    <img src={ImagesProgress} />
                                    <h3>General</h3>
                                    <h4>{/* {project.name_project} */} Sammy</h4>
                                </div>
                            </div>
                            <div className="face face2">
                                <div className="content">
                                    <p>{/* {project.proj_description} */} El heladero</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
    )

}

export default GeneralInfo;