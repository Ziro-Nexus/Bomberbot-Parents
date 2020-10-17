import React from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';

import ModalProgress from './ModalProgress';
import GeneralInfo from './GeneralInfo';

import './styles/ProgressChildren.css';
import  ImagesProgress from '../../images/Card_Children.jpeg';

export default function ProgressChildren(props){

    let count = 0;
    let classes = '', classScroll = '';

    let location = useLocation();
    let id_student;


    //Save id_studend reload the page
    if(location.state){
        localStorage.setItem('id_student', location.state.id_student);
        id_student = location.state.id_student;
    } else{
        id_student = localStorage.getItem('id_student')
    }

    
    
    /* console.log(location.state.id_student); */

    const [ state, setState ] = React.useState([]);
    const [ general, setGeneral ] = React.useState([]);

/*     React.useEffect(async() => { */
        
    
    React.useEffect(()=>{

        const required = {
                "id_student": [
                    {
                        "id": id_student
                    }
                ]
        };
        axios.post('http://127.0.0.1:8000/progress/', required)
        .then(response =>{
            console.log(response);
            if(response.data.Status === 'OK'){
                axios('http://127.0.0.1:8000/progress/')
                .then(res => (
                    console.log(res.data),
                    console.log(res.data.projects),
                    setState(res.data.projects),
                    setGeneral(res.data.general)
                ))
            }
        })

        .catch(error =>(console.error(error)));

    }, [])
    
    function HandleClickMore(){
        return <ModalProgress />
    }
    if(state.length === 1){
        classes = "col-12 col-sm-6 col-md-6 col-lg-6 align-items-center"
        classScroll = "container-fluid justify-content-center style-main";
    } else if(state.length === 2){
        classes = "col-12 col-sm-6 col-md-4 col-lg-4 align-items-center"
        classScroll = "container-fluid justify-content-center style-main";
    } else {
        classes = "col-12 col-sm-6 col-md-4 col-lg-4 align-items-center"
        classScroll = "container-fluid justify-content-center scroll-page style-main";
    }
    
    return (
        <div className={classScroll}>
            <div className="row card-intern align-items-center justify-content-end">
                
                <GeneralInfo general={general} clas={classes}/> 
                {state ? state.map((project, i) =>{
                    count = count + 1
                return( 
                <div className={classes} key={i}>
                    <div className="container2 justify-content-center">
                        <div className="card2">
                            <div className="face face1">
                                <div className="content">
                                    <img src={project.url_image} />
                                    <h3>Project: {count}</h3>
                                    <h4>{project.name_project}</h4>
                                </div>
                            </div>
                            <div className="face face2">
                                <div className="content">
                                    {/* <p> {project.proj_description.substring(0, 176)}</p> */}
                                    <p>
                                        <strong>Total task:</strong> {project.total_task_proj}<br />
                                        <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Finished task:</strong> {project.finished_tasks}<br />
                                        <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pending task:</strong> {project.pending_task}<br />
                                        <strong>Expiration date:</strong> {project.task_due}<br />
                                        <strong>Days expired:</strong> {project.days_exp_task}<br />
                                    </p>
                                    <a href="#modal1">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 )
                }): ''}  
                <div id="modal1" className="col-12 modalmask">
                            <div className="modalbox movedown">
                                <a href="#close" title="Close" className="close">X</a>
                                <h2>INFORMATION PROJECT 1</h2>
                                <p>In this lesson, students discover how computer games are made and students are introduced to fundamental programming concepts, thinking, and programming terminology.</p>
                                
                            </div>
                </div>

            </div>
                
        </div>

    )
}