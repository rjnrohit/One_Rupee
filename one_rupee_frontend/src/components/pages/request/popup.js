import React from "react"
import "./request.css"

class Popup extends React.Component
{
    render()
    {
        return(
            <div className='popup'>
                <div className='popup_inner'>
                    <button onClick={this.props.closePopup} id="closebtn"> Cancel</button>
                    Register your new project request here:
                    <form>
                        <label><b> Project Name :</b></label><input type="text" placeholder ="Enter the name of your project" ></input>
                        <label><b>Category of your Project:</b></label>
                        <select name="cars">
                            <option value= "Educational">Educational</option>
                            <option value= "Health">Health</option>
                            <option value= "Charity">Charity</option>
                            <option value= "Other">Other</option>
                        </select>
                        <label><b>Description</b></label>
                        <input type="textarea"/>
                        <label><b> Expected Amount :</b></label><input type="text" ></input>
                        <button type = "Submit">Submit</button> 
                    </form>
                </div>
            </div>
            )
    }
}
export default Popup