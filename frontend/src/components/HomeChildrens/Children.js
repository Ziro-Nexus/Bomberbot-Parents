import React, {useState, useEffect}  from "react";

import "./style/Children.css";
import "../login/styles/LoginForm.css";
import axios from "axios";

import Avatar from "../../images/Card_Children.jpeg";

class Children extends React.Component {
  constructor(props) {
    super(props);

    this.data = {
            name_childres: this.handleList()

        } 
    /* this.state = { data: {} }; */
    this.columns = this.data.name_childres.length;
    this.class = "";

    /* this.handleNames() */
    
  }

  handleList() {
    let listNames = []
        for (let i=0; i < this.props.data.length; i++) {
       
            let aux = data[i]

            let nameAux = ''
            for (let j in aux) {
                if (j === 'first_name') {
                    nameAux += aux[j]

                }
                if (j === 'last_name') {
                    nameAux += ' ' + aux[j]
                }
            } 
            listNames.push(nameAux)
        }
        console.log(this.props.data)
            return (listNames)
  }

  /*     handleNames(data){
        let listNames = []
        for (let i=0; i < data.length; i++) {
       
            let aux = data[i]

            let nameAux = ''
            for (let j in aux) {
                if (j === 'first_name') {
                    nameAux += aux[j]

                }
                if (j === 'last_name') {
                    nameAux += ' ' + aux[j]
                }
            } 
            listNames.push(nameAux)
        }
            this.setState({
                name_childres: listNames
            })
        } */

  render() {
    /* console.log(this.state.data) */

    /* this.handleNames(this.state.data);

    console.log(this.state.name_childres); */

    {
      this.columns > 2
        ? (this.class =
            "container-fluid style-main style-main-scrool justify-content-center")
        : (this.class = "container-fluid style-main justify-content-center");
    }
    return (
      <div className={this.class}>
        <div className="row align-items-center d-flex flex-grap">
          {/* {this.data.name_childres = this.handleList()} */}
          {this.data.name_childres.map((name, i) => {
            {
              this.columns != 1
                ? (this.columns =
                    "col-12 col-sm-6 col-md-5 mr-1 mt-5 d-flex justify-content-center")
                : (this.columns =
                    "col-12 col-sm-12 col-md-5 mr- mt-5 d-flex justify-content-center");
            }
            return (
              <div className={this.columns} key={i}>
                <div className="box">
                  <div className="card ">
                    <div className="imgBx">
                      <img src={Avatar} alt="images" />
                    </div>
                    <div className="details">
                      <h2>
                        {name}
                        <br />
                        <span>Litle Programmer</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

function listChildren() {
    const [data, setData] = useState({});
    useEffect(async () => {
        const response = await axios('http://127.0.0.1:8000/related_students/', );
      
        setData(response.data)

    },[])
    return (
        <div>
            <Children data={data}/>
        </div>
    )
};

export default listChildren;
