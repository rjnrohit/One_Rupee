import React from "react";
import Popup from "reactjs-popup";
import "./popup.css"
 
function handleSubmit(){

}

export default () => (
    <Popup
      trigger = {<div><button className="button">NEW REQUEST</button></div>} modal>
      {close => (
      <div className="modal">
        <a className="close" onClick={close} href>
          &times;
        </a>
        <div className="header"> Make a new request </div>
        <div className="content">
            <form>
                <span id="headings">Name : </span> 
                <input type="text" placeholder ="Enter the name of your project" id="name"></input>
                <br></br>
                <span id="headings">Category : </span>
                <select name="category">
                    <option value= "EDUCATIONAL">EDUCATIONAL</option>
                    <option value= "HEALTH">HEALTH</option>
                    <option value= "CHARITY">CHARITY</option>
                    <option value= "MISCELLANEOUS">MISCELLANEOUS</option>
                </select>
                <br></br><br></br>
                <span id="headings">Description :</span>
                <br></br><br></br>
                <textarea id="short" placeholder="Enter a short description" ></textarea>
                <textarea id="long" placeholder="Enter a detailed description" ></textarea>
                <br></br><br></br>
                <span id="headings">Required Amount : </span>
                <input type="text" id="amount"></input>
            </form>
        <div className="actions">
            <button
                className="button"
                onClick={() => handleSubmit()}
            >
            SUBMIT
            </button>
        </div>
        </div>
      </div>
    )}
    </Popup>
);
