import React from "react"
import "./request.css"
// import { border } from "@material-ui/system";

class Popup extends React.Component
{
    render()
    {
        return(
            <div className='popup'>
                <div className='popup_inner'>
                    
                    <b id ="a1">Register your new project request here:</b>
                    <form>
                        <label><h2><b> Project Name :</b></h2></label><input type="text" placeholder ="Enter the name of your project" ></input>
                        <label><h2><b>Category of your Project:</b></h2></label>
                        <select name="cars">
                            <option value= "Educational">Educational</option>
                            <option value= "Health">Health</option>
                            <option value= "Charity">Charity</option>
                            <option value= "Other">Other</option>
                        </select>
                        <label><h2><b>Description</b></h2></label>
                        <input type="textarea"/>
                        <label><h2><b> Expected Amount :</b></h2></label><input type="text" ></input>
                        <br/><br/>
                        <button type = "Submit">Submit</button> 
                        <button onClick={this.props.closePopup} id="closebtn"> Cancel</button>
                    </form>
                </div>
            </div>
            )
    }
}
export default Popup