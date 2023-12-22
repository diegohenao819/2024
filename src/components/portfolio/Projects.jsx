import "./Projects.css";
import Card from "./Card";

const Projects = () => {
  const projects = [
    {
      img: "https://th.bing.com/th/id/OIP.9I9YPxcjyKF9ZgfupSz_egHaHa?rs=1&pid=ImgDetMain",
      title: "Click-Prof",
      description:
        "English language exam including a series of questions and a score based on the CEFR.",
      link: "https://master.d1ie4jvzhxyf59.amplifyapp.com/",
    },
    {
      img: "https://brightstardaycare.org/wp-content/gf-uploads/2021/08/preview-m/3144-ORIGINAL-0.jpg?t=1628080154",
      title: "Instituto Emmi Pikler",
      description: "Website for a daycare center in Pereira, Colombia.",
      link: "https://emmi-pikler.netlify.app/",
    },
    {
      img: "https://th.bing.com/th/id/OIP.od5neF1COpwS6Nizg-DuYwHaFF?rs=1&pid=ImgDetMain",
      title: "Tic Tac Toe Game",
      description:
        "Do you want to play a game? How about a game of Tic Tac Toe.",
      link: "https://diegohenao819.github.io/triqui/",
    },
  ];

  return (
    <div className="projects" id="project">
      <div className="titulo">
        <h1>My Projects</h1>
        <div className="divider"></div>
      </div>

      <div className="container">
        {projects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
