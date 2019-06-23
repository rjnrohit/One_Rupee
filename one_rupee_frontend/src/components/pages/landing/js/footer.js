import React from "react"
import "../css/footer.css"

class Footer extends React.Component
{
    render()
    {
        return(
            <footer id="footer">
            <ul className="icons">
                <li><a href="./" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="./" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="./" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="./" className="icon fa-youtube"><span className="label">YouTube</span></a></li>
            </ul>
                <div className="copyright">					
                    &copy;[App Name]
                </div>
            </footer>
        )   
    }
}
export default Footer