import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';


import './style/Children.css';
import Avatar from '../../images/Card_Children.jpeg'

function Children () {
    
    const [state, setState] = React.useState([])

    React.useEffect (() =>{
        axios.get('http://127.0.0.1:8000/related_students/')
        .then(response  => (
             setState(response.data.students),
            console.log(response.data)           
        ))
        .catch(error => (
            /* crear página para indcar sesión caducada */
            console.log(error)
        ))
    },[])

    let columns = state.length
    let className = ''

        {columns > 2 ? className = "container-fluid d-flex style-main style-main-scrool justify-content-center" : className = "container-fluid style-main d-flex justify-content-center"}
        return (
            
            <div className={className}>
                
                <div className="row align-items-center d-flex flex-grap">                   
                    {console.log(state)}

                    

                    {state ? 
                    state.map((name, i) => {
                        {columns != 1 ? className = "col-12 col-sm-6 col-md-5 mr-5 mt-5 d-flex justify-content-center"
                        : className = "col-12 col-sm-12 col-md-5 mr-1 mt-5 d-flex justify-content-center"}
                        return (
 
                    <div key={i}>
                        <Link to={{pathname:'/progressChildren', state: {id_student: name.id} }} >
                        <div className={className} >
                            <div className="box">
                                <div className="card ">
                                    <div className="imgBx">
                                        <img src={Avatar}
                                            alt="images" />
                                    </div>
                                    <div className="details">
                                        <h2>{`${name.first_name} ${name.last_name}`}<br/><span>Litle Programmer</span></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div> 
                        )
                    }):''}
            </div>
        </div>
        )
    }


export default Children;