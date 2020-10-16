import React from 'react';

import './styles/GeneralInfo.css';
/* import './styles/GeneralInfo.css' */
import ImagesProgress from '../../images/Card_Children.jpeg';

function GeneralInfo(props) {
    return (
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 align-items-center">
            {console.log("Information general", props.general)}

            {props.general.actual_project ?

                    <div className="container2 justify-content-center">
                        <div className="card2">
                            <div className="face face1">
                                <div className="content">
                                    <img src={'https://i.ibb.co/tJy6JVR/munten-vangen.png'} />
                                    <h4>{props.general.actual_project}</h4>
                                </div>
                            </div>
                            <div className="face face2">
                                <div className="content">
                                    <p>
                                        <strong>Course:</strong> {props.general.course}<br />
                                        <strong>Project:</strong> {props.general.finished_proj}<br />
                                        <strong>Last logging:</strong> {props.general.last_logging.substring(0, 10)}<br />
                                        <strong>Total projects:</strong> {props.general.total_projs}<br />
                                        <strong>Pending projects:</strong> {props.general.pending_proj}<br />
                                        <strong>Total time:</strong> {props.general.total_time} hours<br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

: ''}
        </div>
    )
}

export default GeneralInfo;



/*



<h5> {props.general.actual_project} </h5>

<p>
<strong>Course:</strong> {props.general.course}<br />
<strong>Project:</strong> {props.general.finished_proj}<br />
<strong>Last logging:</strong> {props.general.last_logging.substring(0, 10)}<br />
<strong>Total projects:</strong> {props.general.total_projs}<br />
<strong>Pending projects:</strong> {props.general.pending_proj}<br />
<strong>Total time:</strong> {props.general.total_time} hours<br />
</p> */