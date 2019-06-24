import React from "react"
import "../css/login.css"

class Login extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            userType:"user"
        }
    }
     loginHandler = (type) =>
    {
        this.setState({userType:type})
    }
    render()
    {
        return(
            <div className="bg-img">
                <form action="" className="container">
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
                    <br/> 
                    {/* <h4 className="loginText">Signing in as {this.state.userType}</h4>                    */}
                    <label><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required/>
                    <label><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>
                    <a href="./" className="forgot">Forgot Password ?</a>
                    <br/><br/>
                    <button type="submit" className="btn"><h4>Login</h4></button>
                    <button className="btn"><h4>Sign Up</h4></button>
                </form>
            </div>            
        )   
    }
}
export default Login