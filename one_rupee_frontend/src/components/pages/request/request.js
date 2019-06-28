import React from "react"
import Popup from "./popup.js"
import "./request.css"
class Request extends React.Component
{
    constructor()
    {
        super()
        this.state={
            showPopup:false
        };
    }
    togglePopup() 
    {
        this.setState({
          showPopup: !this.state.showPopup
        });
    }   
    render()
    {
        return(
            <div>
                <button  onClick={this.togglePopup.bind(this)}>
                    Request for Donation !
                </button>
                {this.state.showPopup ? <Popup closePopup = {this.togglePopup.bind(this)}/>:null}
            </div>
        )
    }
}
export default Request