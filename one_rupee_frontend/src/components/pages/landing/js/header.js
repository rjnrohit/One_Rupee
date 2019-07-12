import React from "react"
import "../css/header.css"
import logo from "../images/logo.png"
class Header extends React.Component
{
    render()
    {
        return(
            
                <header id= "header">
                    <img src={logo} style={{height:"17.5%",width:"20%"}} alt ="logo"/>
                    <p>A small contribution from your side may enlighten the lives of many ....</p>
                    <p>Contribute to need based projects with &#8377;1 everyday.</p>
                </header>
            
        )   
    }
}
export default Header