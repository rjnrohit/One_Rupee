import React, { Component } from 'react';
import "./profile.css"
import {Link} from "react-router-dom"
const sample = {
    name: "Shubham Bhagat",
    email: "sbhagat@iitk.ac.in",
    mobile: "6387302924",
    avatar: "https://docs.atlassian.com/aui/8.3.1/docs/images/avatar-person.svg",
    donations: 3,
    amountDonated: 10,
} 

export default class Profile extends Component {
    constructor(){
        super()
        this.state={
        }
    }

    componentDidMount(){
        // fetch
        this.setState(sample)
    }

    render() {
        return (
            <div>
                <div className="header1">
                    <img 
                        className="profileimg"
                        src={this.state.avatar} 
                        alt='avatar'
                    />
                    <div className="headerInfo">
                        <span className="name">{this.state.name}</span><br></br>
                        <span className="email">{this.state.email}</span><br></br>
                        <span className="mobile">{this.state.mobile}</span>
                    </div>
                </div>
                <div className="body">
                    <span>You have donated <span style={{color:"red"}}>&#8377;{this.state.amountDonated}</span> in  {this.state.donations} donations</span> 
                    <br></br> 
                    <span>Click <Link to = "/feed" onClick = {() => this.props.pageHandler(this.props.pages[1]) } > here</Link>  to donate more....</span><br></br><br></br><br></br>
                    <span>Click <Link to = "/history" onClick = {() => this.props.pageHandler(this.props.pages[4]) } > here</Link>  to view your donation history</span><br></br>
                    <span>Click <Link to = "/leaderboard" onClick = {() => this.props.pageHandler(this.props.pages[3]) } > here</Link>  to view your rank</span><br></br>
                </div>
            </div>
        );
    }
}