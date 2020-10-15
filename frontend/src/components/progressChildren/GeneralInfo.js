import React from 'react';

import './styles/GeneralInfo.css'
import  ImagesProgress from '../../images/Card_Children.jpeg';

function GeneralInfo(props){
    return (
        <div className="col-12 col-sm-4  align-items-center mt-5">
            {console.log("Information general", props.general)}

            {props.general.actual_project ? 
                    <div className="container-general">
                        <div className="card-general">
                            <div className="face face1">
                                <div className="content">
                                    {/* <img src={ImagesProgress} /> */}
                                    <h5> {props.general.actual_project} </h5>
                                        <p>
                                        <strong>Course:</strong> {props.general.course}<br />
                                        <strong>Project:</strong> {props.general.finished_proj}<br />
                                        <strong>Last logging:</strong> {props.general.last_logging.substring(0, 10)}<br />
                                        <strong>Pending proj:</strong> {props.general.pending_proj}<br />
                                        <strong>Total projs:</strong> {props.general.total_projs}<br />
                                        <strong>Total time:</strong> {props.general.total_time} hours<br />
                                    </p>
                                </div>
                            </div>
                            <div className="face face2">
                                <div className="content">
                                    <p>{/* {project.proj_description} */} El heladero</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    : ''}
                </div>
            
    )

}

export default GeneralInfo;


