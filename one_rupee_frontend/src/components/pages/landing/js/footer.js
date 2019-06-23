import React from "react"
import "../css/footer.css"

class Footer extends React.Component
{
    constructor()
    {
        super()
    }
    render()
    {
        return(
            <footer id="footer">
           
            <ul class="icons">
                <li><a href="" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
                <li><a href="" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
                <li><a href="" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
                <li><a href="" class="icon fa-youtube"><span class="label">YouTube</span></a></li>
            </ul>
                <div class="copyright">					
                    &copy;[App Name]
                </div>
            </footer>
        )   
    }
}
export default Footer