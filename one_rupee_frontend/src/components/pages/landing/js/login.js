import React from "react"
import "../css/login.css"
import {Link,Redirect} from "react-router-dom"
import axios from "axios";
class Login extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            userType:"user",
            username:"",
            password:"",
            islogIn:false,
            isError:false,
        }
    }
     loginHandler = (type) =>
    {
        this.setState({userType:type})
    }
    changeHandler = (event) =>
    {
        const {name,value} =event.target;
        this.setState({
            [name]:value
        })
    }
    Submit = () =>
    {
        axios.post('http://localhost:8000/login/',{
            username:this.state.username,
            password:this.state.password,
            
        }).then(res=>{
            this.setState({islogIn:true})
        }).catch(err=>{
          this.setState({isError:true})
        })
    }
    render()
    {
        if(this.state.islogIn === false)
        return(
            <div className="bg-img">
                
                <div className="container">
                    <div>  
                        <button 
                            className={"btn" + (this.state.userType==="user" ? " active": "")}
                            onClick={()=>this.loginHandler("user")}>
                            <h3>Login as a user</h3>
                        </button> 
                        <button 
                            className={"btn" + (this.state.userType==="NGO" ? " active": "")}
                            onClick={()=>this.loginHandler("NGO")}>
                            <h3>Login as a NGO</h3>
                        </button>
                    </div>
                    
                    {/* <h4 className="loginText">Signing in as {this.state.userType}</h4>*/}
                    {this.state.isError ===true?<h5 style={{color:"red"}}>! Username or Password incorrect</h5>:<br/>}
                    <label><b>Username</b></label>
                    <input type="text" placeholder="Enter your Username" name="username" onChange={this.changeHandler} value={this.state.username} required/>
                    <label><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" onChange={this.changeHandler} value={this.state.password} required/>
                    <a href="./" className="forgot">Forgot Password ?</a>
                    <br/><br/>
                    <button onClick={this.Submit} className="btn"><h4>Login</h4></button>
                    <Link to = "/registration"><button className="btn" ><h4>Sign Up</h4></button></Link>
                </div>
            </div>            
        )   
        else{
            return(
            <Redirect to = {{pathname:"/feed"}}/>
            )
        }
    }
}
export default Login