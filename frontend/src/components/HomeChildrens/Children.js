import React from 'react';

import './style/Children.css';
import '../login/styles/LoginForm.css'

import Avatar from '../../images/Card_Children.jpeg'




class Children extends React.Component {
    
   constructor(props){
        super(props)

        this.data = {
            name_childres: this.handleList()
        }
        this.columns = this.data.name_childres.length;
        this.class = ''
    }
    

    handleList(){
        let name_children = [];
        for (let name of this.props.data.data) {
                name_children.push(name.first_name + ' ' + name.last_name)
            }
        return name_children;
    }

    render(){
        
        
        {this.columns > 2 ? this.class = "container-fluid style-main style-main-scrool justify-content-center" : this.class = "container-fluid style-main justify-content-center"}
        return (
            <div className={this.class}>
            <div className="row align-items-center d-flex flex-grap">
            

                {/* {this.data.name_childres = this.handleList()} */}
                {this.data.name_childres.map((name, i) => {
                    {this.columns != 1 ? this.columns = "col-12 col-sm-6 col-md-5 mr-1 mt-5 d-flex justify-content-center"
                    : this.columns = "col-12 col-sm-12 col-md-5 mr-1 mt-5 d-flex justify-content-center"}
                    return (
                     
                    <div className={this.columns} key={i}>
                        <div className="box">
                            <div className="card ">
                                <div className="imgBx">
                                    <img src={Avatar}
                                        alt="images" />
                                </div>
                                <div className="details">
                                    <h2>{name}<br/><span>Litle Programmer</span></h2>
                                </div>
                            </div>
                        </div>
                </div>

                    )
                })}
           </div>
        </div>
        )
    }
}

export default Children;