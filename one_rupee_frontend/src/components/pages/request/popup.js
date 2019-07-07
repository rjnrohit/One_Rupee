import React from "react";
import Popup from "reactjs-popup";
import "./popup.css"
 
export default class RequestPopUp extends React.Component{

  constructor(){
    super()
    this.state={}
  }

  handleSubmit(){
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
              <form action = "" method="POST">
                  <span id="headings">Name : </span> 
                  <input type="text" placeholder ="Enter the name of your project" id="name"  required></input>
                  <br></br><br></br>
                  <span id="headings">Category : </span>
                  <select name="category" style={{width:"50%"}}>
                      <option value= "AGRICULTURE" >AGRICULTURE</option>
                      <option value= "ANIMAL WELFARE">ANIMAL WELFARE</option>
                      <option value= "ART AND CRAFT" >ART AND CRAFT</option>
                      <option value= "CHILD EDUCATION" >CHILD EDUCATION</option>
                      <option value= "CITIES/URBAN DEVELOPMENT">CITIES/URBAN DEVELOPMENT</option>
                      <option value= "COMMUNITY DEVELOPMENT">COMMUNITY DEVELOPMENT</option>
                      <option value= "CULTURE AND HERITAGE" >CULTURE AND HERITAGE</option>
                      <option value= "DISABILITY">DISABILITY</option>
                      <option value= "DISASTER MANAGEMENT">DISASTER MANAGEMENT</option>
                      <option value= "DRINKING WATER">DRINKING WATER</option>
                      <option value= "EDUCATION">EDUCATION</option>
                      <option value= "ENVIRONMENTAL ISSUES">ENVIRONMENTAL ISSUES</option>
                      <option value= "HEALTH AND HYGIENE" >HEALTH AND HYGIENE</option>
                      <option value= "HIV/AIDS" >HIV/AIDS</option>
                      <option value= "HOUSING AND SLUMS">HOUSING AND SLUMS</option>
                      <option value= "POPULATION">POPULATION</option>
                      <option value= "POVERTY REMOVAL">POVERTY REMOVAL</option>
                      <option value= "RURAL DEVELOPMENT">RURAL DEVELOPMENT</option>
                      <option value= "SCIENCE AND TRECHNOLOGY DEVELOPMENT">SCIENCE AND TRECHNOLOGY DEVELOPMENT</option>
                      <option value= "TRIBAL PEOPLE">TRIBAL PEOPLE</option>
                      <option value= "WASTE MANAGEMENT">WASTE MANAGEMENT</option>
                      <option value= "WOMEN">WOMEN</option>
                      <option value= "OTHERS">OTHERS</option>
                  </select>
                  <br></br><br></br>
                  <span id="headings">Description :</span>
                  <br></br><br></br>
                  <textarea id="short" placeholder="Enter a short description"  required></textarea>
                  <textarea id="long" placeholder="Enter a detailed description"  required></textarea>
                  <br></br><br></br>
                  <span id="headings">Required Amount : </span>
                  <input type="text" id="amount" required></input>
                  <div className="actions">
                      <button
                          type="submit"
                          className="button"
                          onClick={()=>this.handleSubmit()}
                      >
                        SUBMIT
                      </button>
                  </div>
              </form>
          </div>
        </div>
      )}
      </Popup>
    )
  }
};
