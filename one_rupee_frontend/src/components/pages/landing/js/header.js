import React from "react"
import "../css/header.css"
class Header extends React.Component
{
    constructor()
    {
        super()
    }
    render()
    {
        return(
            
                <header id= "header">
                    <h1>[App Name]</h1>
                    <p>A small contribution from your side may enlighten the lives of many ....</p>
                    <p>Contribute to need based projects with Re. 1 everyday.</p>
                </header>
            
        )   
    }
}
export default Header