import "./Hero.css";
import avatar from "../../assets/img/avatar.png";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="hero_left">
        <h1>
          I am <span>Diego</span> Henao
        </h1>
        <h2>Web Developer</h2>
        <p>
          Passionate software engineer with over 10 years of experience in
          language education. Fluent in Spanish and English, skilled in
          React.js, MongoDB, Node.js.
          <br />
          <br />I am driven by a love for web development and continuous
          learning.
        </p>

        <div className="buttons">
          <a
            href="https://drive.google.com/file/d/1wF8kCnt06IRy_AtMFHmrKtLS8QTnEBG9/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button className="button1">Download CV</button>
          </a>

          <a href="#contact">
            <button>Contact me</button>
          </a>
        </div>
      </div>

      <div className="hero_right">
        <img src={avatar} alt="Diego Henao Avatar" />
      </div>
    </div>
  );
};

export default Hero;
