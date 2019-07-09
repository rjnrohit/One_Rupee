import React from "react"
import {Redirect} from "react-router-dom"
import axios from "axios"
export default class Registration extends React.Component
{
    constructor()
    {
        super();
        this.state={
            usernameu:"",
            passwordu:"",
            cpasswordu:"",
            first_name:"",
            last_name:"",
            Emailu:"",
            mob_nou:"",
            ngo_name:"",
            Emailn:"",
            usernamen:"",
            passwordn:"",
            cpasswordn:"",
            category:"",
            Ngo_certificate:"",
            Ngo_website:"",
            mob_non:"",
            isSignedUp:false
        };
    }

    handleChange = (event) =>
    {
        const {name,value} = event.target
        this.setState({
            [name]:value
        })
    }
    submitu = () =>
    {
        console.log(this.state)
        axios.post("http://localhost:8000/users/register/",{
            first_name:this.state.first_name,
            last_name:this.state.last_name,
            username:this.state.usernameu,
            password:this.state.passwordu,
            Email:this.state.Emailu,
            mob_no:parseInt(this.state.mob_nou)
        }).then(res => {
            alert("success")
            this.setState({isSignedUp:true})
        }).catch(err=>{
            alert(err);
            console.log(err.response.data)
        })
    }
    submitn = () =>
    {
        console.log(this.state)
        axios.post("http://localhost:8000/users/register/",{
            ngo_name:this.state.ngo_name,
            username:this.state.usernamen,
            password:this.state.passwordn,
            Email:this.state.Emailn,
            category:this.state.category,
            Ngo_certificate:this.state.Ngo_certificate,
            Ngo_website:this.state.Ngo_website,
            mob_no:parseInt(this.state.mob_non)
        }).then(res => {
            alert("success")
            this.setState({isSignedUp:true})
        }).catch(err=>{
            alert(err.response.data);
            console.log(err.response.data)
        })
    }
    render()
    {
        if(this.state.isSignedUp === false)
        return(
            <div>
                <header>
                    <h1 style ={{textAlign:"center"}}>Join Us Now</h1>
                    <div  style={{marginLeft:"20%",marginRight:"20%",textAlign:"justify",padding:"2% 3%",fontSize:"20px",backgroundColor:"skyblue",borderRadius:"15px"}}>
                        <h3 style={{textAlign:"center",marginTop:"0%"}}>Register as user</h3>
                        <b style={{width:"20%"}}>Name   </b>
                        <input type= "text"  onChange={this.handleChange} value={this.state.first_name} name="first_name" placeholder="First Name" style={{padding:"1%",width:"30%",borderRadius:"5px", marginLeft:"7%"}} required/>
                        <input type= "text"   onChange={this.handleChange} value={this.state.last_name}name="last_name" placeholder="Last Name" style={{padding:"1%",width:"30%",borderRadius:"5px", marginLeft:"7%"}} required/><br/><br/>
                        <b style={{width:"20%"}}>Username </b>
                        <input type= "text"  name ="usernameu" value={this.state.usernameu}  onChange={this.handleChange} placeholder ="Username"style={{padding:"1%",width:"80%",borderRadius:"5px", marginLeft:"6.5%"}} required/><br/><br/>
                        <b style={{width:"20%"}}>E-Mail </b>
                        <input type= "email"  name ="Emailu" value={this.state.Emailu}  onChange={this.handleChange} placeholder ="E-Mail"style={{padding:"1%",width:"80%",borderRadius:"5px", marginLeft:"6.5%"}} required/><br/><br/>
                        <b style={{width:"20%"}}>Mobile   </b>
                        <input type = "text"  name = "mob_nou" value ={this.state.mob_nou}  onChange={this.handleChange} placeholder="Mobile No." style={{padding:"1%",width:"80%",borderRadius:"5px", marginLeft:"6%"}} required/><br/><br/>
                        <b style={{width:"20%"}}>Password </b>
                        <input type = "password"  name="passwordu" value={this.state.passwordu}  onChange={this.handleChange} placeholder = "Enter your password" style={{padding:"1%",width:"80%",borderRadius:"5px", marginLeft:"3.3%"}} required/><br/><br/>
                        <b style={{width:"20%"}}> Confirm Password </b>
                        <input type = "password"  name="cpasswordu" value ={this.state.cpasswordu} onChange={this.handleChange}  placeholder = "Confirm your password" style={{padding:"1%",width:"70%",borderRadius:"5px", marginLeft:"3.3%"}} required/><br/><br/>
                        <button onClick ={this.submitu} value ="Register"style={{color :"white",backgroundColor:"blue",border:"none",padding:"1% 2%",borderRadius:"5px",fontSize:"20px",textAlign:"center",marginLeft:"40%",marginRight:"40%",marginTop:""}} >Register</button>
                    </div>
                    <br/><center>OR</center>  <br/>
                    <div style={{marginLeft:"20%",marginRight:"20%",marginBottom:"5%",textAlign:"justify",padding:"2% 3%",fontSize:"20px",backgroundColor:"skyblue",borderRadius:"15px"}}>
                        <h3 style={{textAlign:"center",marginTop:"0%"}}>Register as NGO</h3>
                        <b style={{width:"20%"}}>Name </b><input  type= "text" onChange={this.handleChange}  value={this.state.ngo_name} name="ngo_name" placeholder="Name of NGO" style={{padding:"1%",width:"80%",borderRadius:"5px", marginLeft:"7%"}} required/><br/><br/>
                        <b style={{width:"20%"}}>Category   </b>
                        <select  onChange={this.handleChange} name="category" value={this.state.category} style={{padding:"1%",width:"50%",borderRadius:"5px", marginLeft:"3.5%"}} required>
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
                        </select><br/><br/>
                        <b style={{width:"20%"}}>Username </b>
                        <input type= "text"   onChange={this.handleChange} value={this.state.usernamen} name ="usernamen" placeholder ="Username"style={{padding:"1%",width:"80%",borderRadius:"5px", marginLeft:"6.5%"}} required/><br/><br/>    
                        <b style={{width:"20%"}}>E-Mail   </b><input type= "email"  value={this.state.Emailn} onChange={this.handleChange} name ="Emailn" placeholder ="E-Mail" style={{padding:"1%",width:"80%",borderRadius:"5px", marginLeft:"6.5%"}} required/><br/><br/>
                        <b style={{width:"20%"}}>Mobile   </b><input type = "text"  onChange={this.handleChange}  value={this.state.mob_non} name = "mob_non" placeholder="Mobile No." style={{padding:"1%",width:"80%",borderRadius:"5px", marginLeft:"6%"}} required/><br/><br/>
                        <b style={{width:"20%"}}>Password   </b><input type = "password"   onChange={this.handleChange} value={this.state.passwordn} name="passwordn" placeholder = "Enter your password" style={{padding:"1%",width:"80%",borderRadius:"5px", marginLeft:"3.3%"}} required/><br/><br/>
                        <b style={{width:"20%"}}> Confirm Password </b>
                        <input type = "password"   onChange={this.handleChange} value ={this.state.cpasswordn} name="cpasswordn" placeholder = "Confirm your password" style={{padding:"1%",width:"70%",borderRadius:"5px", marginLeft:"3.3%"}} required/><br/><br/>
                       
                        <b style={{width:"20%"}}>NGO Certificate</b>
                        <input type= "url"  name ="Ngo_certificate" value ={this.state.Ngo_certificate} onChange={this.handleChange} placeholder ="NGO Certificate"style={{padding:"1%",width:"70%",borderRadius:"5px", marginLeft:"6.5%"}} required/><br/><br/>
                        <b style={{width:"20%"}}>NGO website</b>
                        <input type= "url"  name ="Ngo_website" value={this.state.Ngo_website}  onChange={this.handleChange} placeholder ="NGO website"style={{padding:"1%",width:"70%",borderRadius:"5px", marginLeft:"6.5%"}} required/><br/><br/>
                        <button  onClick={this.submitn} value ="Register"style={{color :"white",backgroundColor:"blue",border:"none",padding:"1% 2%",borderRadius:"5px",fontSize:"20px",textAlign:"center",marginLeft:"40%",marginRight:"40%"}} >Register</button>
                    </div>
                </header>
            </div>

        )
        else
        {
            return(
                <Redirect to = {{pathname:"/"}}/>
            )
        }
    }
}