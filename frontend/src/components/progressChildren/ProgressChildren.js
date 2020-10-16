import React from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';

import ModalProgress from './ModalProgress';
import GeneralInfo from './GeneralInfo';

import './styles/ProgressChildren.css';
import  ImagesProgress from '../../images/Card_Children.jpeg';

export default function ProgressChildren(props){

    let count = 0;
    const location = useLocation();
    /* console.log(location.state.id_student); */

    const [ state, setState ] = React.useState([]);
    const [ general, setGeneral ] = React.useState([]);

/*     React.useEffect(async() => { */
        
    
    React.useEffect(()=>{

        const required = {
                "id_student": [
                    {
                        "id": location.state.id_student
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
    
    return (
        <div className="container-fluid  justify-content-center style-main">
            <div className="row card-intern align-items-center justify-content-end">
                
                <GeneralInfo general={general}/> 
                {state ? state.map((project, i) =>{
                    count = count + 1
                return( 
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 align-items-center" key={i}>
                    <div className="container2 justify-content-center">
                        <div className="card2">
                            <div className="face face1">
                                <div className="content">
                                    <img src={'https://i.ibb.co/tJy6JVR/munten-vangen.png'} />
                                    <h3>Project: {count}</h3>
                                    <h4>{project.name_project}</h4>
                                </div>
                            </div>
                            <div className="face face2">
                                <div className="content">
                                    <p> {project.proj_description.substring(0, 175)}</p>
                                    <a href="#modal1">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 )
                }): ''}  
                

            </div>
                <div id="modal1" className="col-12 modalmask">
                            <div className="modalbox movedown">
                                <a href="#close" title="Close" className="close">X</a>
                                <h2>INFORMATION PROJECT 1</h2>
                                <p>In this lesson, students discover how computer games are made and students are introduced to fundamental programming concepts, thinking, and programming terminology.</p>
                                
                            </div>
                </div>
                
        </div>

    )
}