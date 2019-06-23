import React from "react"
import "../css/header.css"
class Header extends React.Component
{
    render()
    {
        return(
            
                <header id= "header">
                    <h1>[App Name]</h1>
                    <p>A small contribution from your side may enlighten the lives of many ....</p>
                    <p>Contribute to need based projects with &#8377;1 everyday.</p>
                </header>
            
        )   
    }
}
export default Header