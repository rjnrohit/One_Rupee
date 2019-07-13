import React, { Component } from 'react';
import "./profile.css"
import {Link} from "react-router-dom"
import ProfilePic from "./profilePic"
import axios from "axios"

export default class Profile extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"",
            email:"",
            mobile:"",
            // avatar:"",
            // donations:0,
            amountDonated:0,
            token:this.props.token,
            pk:this.props.pk,
        }
    }

    componentDidMount(){
        console.log(this.props)
        const url = "http://localhost:8000/ngo/view-profile/" + this.props.pk + "/"
        axios.get(url,{
            headers:{Authorization:"Token "+this.props.token}
        }).then(res=>{
            console.log(res.data)
            const info = res.data
            this.setState({
                name:info.Ngo.ngo_name,
                email:info.Ngo.Email,
                mobile:info.contact,
                amountCollected:info.amount_collected,
                certificate:info.Ngo.Ngo_certificate,
                website:info.Ngo.Ngo_website,
            })
        }).catch(err=>{
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <div className="header1">
                    <div className="profileimg">
                        <ProfilePic pic={this.props.pic} changePic={this.props.changePic}/>
                    </div>
                    <div className="headerInfo">
                        <span className="name">{this.state.name}</span><br></br>
                        <span className="email">{this.state.email}</span><br></br>
                        <span className="mobile">{this.state.mobile}</span>
                        <span className="certificate">{this.state.certificate}</span>
                        <span className="website">{this.state.website}</span>
                    </div>
                </div>
                <div className="body">
                    <span>You have collected <span style={{color:"red"}}>&#8377;{this.state.amountCollected} in donations</span></span>
                    <br></br> 
                    <span>Click <Link to = "/feed" onClick = {() => this.props.pageHandler(this.props.pages[1]) } > here</Link>  to donate</span><br></br><br></br><br></br>
                    <span>Click <Link to = "/history" onClick = {() => this.props.pageHandler(this.props.pages[4]) } > here</Link>  to view your donation history</span><br></br>
                    <span>Click <Link to = "/leaderboard" onClick = {() => this.props.pageHandler(this.props.pages[3]) } > here</Link>  to view your rank</span><br></br>
                </div>
            </div>
        );
    }
}