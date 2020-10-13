import React from 'react';

import './style/Children.css';
import '../login/styles/LoginForm.css';
import axios from 'axios';

import Avatar from '../../images/Card_Children.jpeg'

function Children () {
    
    const [state, setState] = React.useState([])

    React.useEffect (() =>{
        let aux = {}
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

    let columns = 2
    let classx = ''

        {columns > 2 ? classx = "container-fluid style-main style-main-scrool justify-content-center" : classx = "container-fluid style-main justify-content-center"}
        return (
            
            <div className={classx}>
                
                <div className="row align-items-center d-flex flex-grap">                   
                    {console.log(state)}

                    


                    {state ? 
                    state.map((name, i) => {
                        {columns != 1 ? columns = "col-12 col-sm-6 col-md-5 mr-1 mt-5 d-flex justify-content-center"
                        : columns = "col-12 col-sm-12 col-md-5 mr- mt-5 d-flex justify-content-center"}
                        return (
                        
                        <div className={columns} key={i}>
                            <div className="box">
                                <div className="card ">
                                    <div className="imgBx">
                                        <img src={Avatar}
                                            alt="images" />
                                    </div>
                                    <div className="details">
                                        <h2>{name.first_name + ' ' + name.first_name}<br/><span>Litle Programmer</span></h2>
                                    </div>
                                </div>
                            </div>
                    </div>

                        )
                    }):''}
            </div>
        </div>
        )
    }


export default Children;