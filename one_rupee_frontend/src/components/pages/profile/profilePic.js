import React, { Component } from 'react'
import "./profile.css"

class ProfilePic extends Component{

    fileChangeHandler = e=>{
        const file = e.target.files[0]
        const path= (window.URL || window.webkitURL).createObjectURL(file)
        this.props.changePic(path)
    }

    render(){
        return(
            <div>
                <img 
                    className = "profileimg"
                    src={this.props.pic} 
                    alt='avatar'
                />
                <label style={{fontSize:"25px"}}>
                    <span role="img" aria-label="sheep">&#128247;</span>
                    <input type="file" onChange={this.fileChangeHandler} style={{visibility: "hidden"}}/>
                </label>
            </div>
        )
    }
}

export default ProfilePic