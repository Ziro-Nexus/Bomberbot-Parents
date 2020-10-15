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
                        "id": "252ffeb5-aedf-4419-ace5-27c18b25e3db"
                    }
                ]
        };
        axios.post('http://127.0.0.1:8000/progress/', required)
        .then(response =>{
            console.log(response);
            if(response.data.Status === 'OK'){
                axios('http://127.0.0.1:8000/progress/')
                .then(res => (
                    console.log(JSON.parse(res.data)),
                    console.log(JSON.parse(res.data).projects),
                    setState(JSON.parse(res.data).projects),
                    setGeneral(JSON.parse(res.data).general)
                ))
            }
        })

        .catch(error =>(console.error(error)));

    }, [])
    
    

    function HandleClickMore(){
        return <ModalProgress />
    }
    

    return (
        <div className="container-fluid justify-content-center style-main">
            <div className="row align-items-center justify-content-end">
                
                
        
                <GeneralInfo general={general}/> 
                {state ? state.map((project, i) =>{
                    count = count + 1
                return( 
                <div className="col-12 col-sm-4 align-items-center mt-5" key={i}>
                    <div className="container2">
                        <div className="card2">
                            <div className="face face1">
                                <div className="content">
                                    <img src={ImagesProgress} />
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