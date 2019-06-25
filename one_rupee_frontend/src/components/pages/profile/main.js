import React from "react"
import "./profile.css"
class Main extends React.Component
{
    constructor()
    {
        super()
        this.state ={
            image:"",
            name :"[name]",
            email:"ulhaqshayan786@gmail.com",
            mobNo:"[ph no.]",
            numDonations:3,
            myNGOs:["NGO1","NGO2","NGO3"],
        }
    }
    render()
    {
        return(
            <div>
            <div className="profile">
             <img
            className="profileimg"
            alt="https://docs.atlassian.com/aui/8.3.1/docs/images/avatar-person.svg"
            src="https://docs.atlassian.com/aui/8.3.1/docs/images/avatar-person.svg"
            height="200"
            width="200"
            />  
            <h1>Hey, {this.state.name}</h1>
            </div>
            <div id="card">
                <h2><b>Name :</b> {this.state.name}</h2>
                <h2><b>Email :</b> {this.state.email}</h2>
                <h2><strong>Mobile no. :</strong> {this.state.mobNo}</h2>
                <h3>You have made {this.state.numDonations} donations so far...</h3>
                <h4>Click <a href="./">here</a> to check your donations.</h4>
                {/*to be done after router work*/}
            </div>
            
            </div>

        )
    }
}
export default Main;