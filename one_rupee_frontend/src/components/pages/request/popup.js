import React from "react";
import Popup from "reactjs-popup";
import "./popup.css"
import axios from "axios"
 
export default class RequestPopUp extends React.Component{

  constructor(props){
    super(props)
    this.state={
      title:"",
      category:"AGE CARE",
      short_description:"",
      long_description:"",
      req_amount:"",
      token: this.props.token,
      pk: this.props.pk,
      username:"",
    }
  }
  
  componentDidMount(){
    console.log(this.props)
    const url = "http://localhost:8000/ngo/view-profile/" + this.props.pk + "/"
    axios({url:url,
      headers:{Authorization:"Token "+this.props.token}
    }).then(res=>{
      this.setState({username:res.data.Ngo.username})
      
    }).catch(err=>{
      console.log(err)
    })
  }


  handleChange = (e)=>{
    const value = e.target.value
    const name = e.target.name
     
    this.setState({
      [name]: value
    })
  }

  handleSubmit=()=>{
    const url = "http://localhost:8000/cards/card-create-view/"+this.state.username +"/"
    axios({url,data:{
            title:this.state.title,
            category:this.state.category,
            shortDescription:this.state.short_description,
            longDescription:this.state.long_description,
            Email:this.state.Emailu,
            amount_requested:parseInt(this.state.req_amount),
            ngo:this.state.username
            },method:"post",headers:{Authorization:"Token "+this.state.token}}).then(res => {
                alert("Successfully Requested")
                
            }).catch(err=>{
                
                console.log(err.response.data)
            })
        
  
  }


  render(){
    return(
      <Popup
        trigger = {<div><button className="button">NEW REQUEST</button></div>} modal>
        {close => (
        <div className="modal">
          <a className="close" onClick={close} href>
            &times;
          </a>
          <div className="header"> Make a new request </div>
          <div className="content">
              <div>
                  <span id="headings" >Name : </span> 
                  <input 
                    type="text" 
                    placeholder ="Enter the name of your project" 
                    id="name"  
                    name="title" 
                    onChange={this.handleChange}
                    required>
                  </input>
                  <br></br><br></br>
                  <span id="headings">Category : </span>
                  <select name="category" onChange={this.handleChange} style={{width:"50%"}}>
                            <option value= "AGC" >AGE CARE</option>
                            <option value= "AGR" >AGRICULTURE</option>
                            <option value= "AW">ANIMAL WELFARE</option>
                            <option value= "ANC" >ART AND CRAFT</option>
                            <option value= "CE" >CHILD EDUCATION</option>
                            <option value= "CUD">CITIES/URBAN DEVELOPMENT</option>
                            <option value= "CD">COMMUNITY DEVELOPMENT</option>
                            <option value= "CNH" >CULTURE AND HERITAGE</option>
                            <option value= "D">DISABILITY</option>
                            <option value= "DM">DISASTER MANAGEMENT</option>
                            <option value= "DW">DRINKING WATER</option>
                            <option value= "EDU">EDUCATION</option>
                            <option value= "ENVI">ENVIRONMENTAL ISSUES</option>
                            <option value= "HNH" >HEALTH AND HYGIENE</option>
                            <option value= "HA" >HIV/AIDS</option>
                            <option value= "HS">HOUSING AND SLUMS</option>
                            <option value= "P">POPULATION</option>
                            <option value= "PR">POVERTY REMOVAL</option>
                            <option value= "RD">RURAL DEVELOPMENT</option>
                            <option value= "STD">SCIENCE AND TRECHNOLOGY DEVELOPMENT</option>
                            <option value= "TP">TRIBAL PEOPLE</option>
                            <option value= "WM">WASTE MANAGEMENT</option>
                            <option value= "W">WOMEN</option>
                            <option value= "O">OTHERS</option>
                  </select>
                  <br></br><br></br>
                  <span id="headings">Description :</span>
                  <br></br><br></br>
                  <textarea 
                    id="short" 
                    placeholder="Enter a short description"  
                    name="short_description" 
                    onChange={this.handleChange}
                    required>
                  </textarea>
                  <textarea 
                    id="long" 
                    placeholder="Enter a detailed description"  
                    name="long_description" 
                    onChange={this.handleChange}
                    required>
                  </textarea>
                  <br></br><br></br>
                  <span id="headings">Required Amount : </span>
                  <input 
                    type="text" 
                    id="amount" 
                    name="req_amount" 
                    onChange={this.handleChange}
                    required>
                  </input>
                  <div className="actions">
                      <button
                          type="submit"
                          className="button"
                          onClick={this.handleSubmit}
                      >
                        SUBMIT
                      </button>
                  </div>
              </div>
          </div>
        </div>
      )}
      </Popup>
    )
  }
};
