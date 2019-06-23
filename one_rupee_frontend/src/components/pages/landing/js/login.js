import React from "react"
import "../css/login.css"

class Login extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            userType:"User"
        }
    }
     loginHandler = (event) =>
    {
        const type = event.target.value;
        this.setState({usertype:type})
    }
    render()
    {
        return(
            <div class="bg-img">
                <form action="" class="container">
                  <div>  <button class="btn" onClick={this.loginHandler}  value="User"><h3>Login as User</h3></button> 
                    <button class="btn"  value="NGO"><h3>Login as NGO</h3></button>
                    </div>
                    <br/> 
                    <h4>Signing in as {this.state.userType}</h4>                   
                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required/>
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>
                    <a href="" classNmae="forgot">Forgot your Password ?</a>
                    <br/><br/>
                    <button type="submit" class="btn"><h4>Login</h4></button>
                    <button class="btn"><h4>Sign Up</h4></button>
                </form>
            </div>            
        )   
    }
}
export default Login