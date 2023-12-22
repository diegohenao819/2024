import "./navBar.css";
import logo from "../../assets/img/logo.png";
import { useState } from "react";



const NavBar = () => {
  const [open, setOpen] = useState(false);



  const handleNavigation = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
     
    }
  };



  function openToggle() {
    setOpen(!open);
  }

  return (
    <>
      <div className="burger">
        <span onClick={openToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="14"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </span>

        <div className={`empanada ${open ? "open" : "close"}`}>
          <div onClick={openToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="12"
              viewBox="0 0 384 512"
            >
              <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
            </svg>
          </div>
          <ul>
            <a href="#home"  onClick={(e) => handleNavigation(e, '#home')}>
              <li onClick={openToggle}
             
              >Home</li>
            </a>
            <a href="#project" onClick={(e) => handleNavigation(e, '#project')}>
              <li onClick={openToggle}>Projects</li>
            </a>
            <a href="#contact" onClick={(e) => handleNavigation(e, '#contact')}>
              <li onClick={openToggle}>Contact</li>
            </a>
          </ul>
        </div>
      </div>

      {/* **********************************************+ */}
      <div className="NavBar">
        <div className="logo">
          <img src={logo} alt="logo Diego Henao" />
          <h2>
            DIEGO <span>HENAO</span>
          </h2>
        </div>

        <ul className="items">

    
          <a href="#home" className="link-home">Home</a>

          <a href="#project" className="link-home">Projects</a>

          <a href="#contact" className="link-home">Contact</a>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
