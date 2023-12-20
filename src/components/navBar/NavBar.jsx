import "./navBar.css"
import logo from "../../assets/img/logo.png"
const NavBar = () => {
    return (
        <div className="NavBar">
                <div className="logo">
                    <img src={logo} alt="logo Diego Henao" />
                        <h2>DIEGO <span>HENAO</span> </h2>
                </div>

                <ul className="items">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                </ul>
        </div>
    )
}

export default NavBar