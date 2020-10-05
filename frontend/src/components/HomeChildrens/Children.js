import React from 'react';

import './style/Children.css';
import '../login/styles/LoginForm.css'

import Avatar1 from '../../images/undraw_female_avatar_w3jk.png';
import Avatar2 from '../../images/undraw_male_avatar_323b.png'

class Children extends React.Component {
    
   constructor(props){
        super(props)
        this.data = {
            name_childres: ['Hijo1', 'Hijo2', 'Hijo1', 'Hijo2', 'Hijo1', 'Hijo2']
        }
        this.columns = this.data.name_childres.length;
        this.class = ''
        console.log(this.columns);
    }

    render(){


        {this.columns > 2 ? this.class = "container-fluid style-main style-main-scrool justify-content-center" : this.class = "container-fluid style-main justify-content-center"}
        return (
            <div className={this.class}>
            <div className="row align-items-center d-flex flex-grap">


                {this.data.name_childres.map((name, i) => {
                    {this.columns != 1 ? this.columns = "col-12 col-sm-6 rounded d-flex justify-content-center"
                    : this.columns = "col-12 col-sm-12 rounded d-flex justify-content-center"}
                    return (
                     
                    <div className={this.columns} key={i}>

                        <div className="member shadow p-3 mb-5 bg-light ">
                            <div className="member-img ">
                                <img src={Avatar2} alt="Avatar" />
                            </div>
                            <div className="member-info">
                                <h4>Little programmer 1</h4>
                                <span>{name}</span>
                            </div>
                        </div>
                    </div>
                    )
                })}
                
                
{/*                 <div className="col-12 col-sm-12 rounded d-flex justify-content-center">

                    <div className="member shadow p-3 mb-5 bg-light ">
                        <div className="member-img ">
                            <img src={Avatar2} alt="Avatar" />
                        </div>
                        <div className="member-info">
                            <h4>Little programmer 1</h4>
                            <span>Name programmer</span>
                        </div>
                    </div>
                </div>
 */}


            </div>
        </div>
        )
    }
}

export default Children;