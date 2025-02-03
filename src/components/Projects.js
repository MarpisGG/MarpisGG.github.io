import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/nusafood.png";
import projImg2 from "../assets/img/danson.png";
import projImg3 from "../assets/img/cookit.png";
import projImg4 from "../assets/img/todolis.png";
import projImg5 from "../assets/img/food.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export const Projects = () => {

  const projects = [
    {
      linkweb: "https://nusafoodwebsite.vercel.app/",
      title: "Nusafood",
      description: "Indonesian Food Virtual Exhibition",
      imgUrl: projImg1,
    },
    {
      linkweb: "https://www.figma.com/file/vQc0R7HY9B3CNTWXGykFFF?node-id=0:1&locale=en&type=design",
      title: "Dansons",
      description: "UI/UX Design for dance learning app",
      imgUrl: projImg2,
    },
    {
      linkweb: "https://github.com/MarpisGG/Kelompok4_CookIT",
      title: "CookIT",
      description: "Android App for cooking recipes",
      imgUrl: projImg3,
    },
    {
      linkweb: "https://github.com/MarpisGG/todolist",
      title: "To Do List App",
      description: "A simple to do list app",
      imgUrl: projImg4,
    },
    {
      linkweb: "https://github.com/MarpisGG/IF330Resto",
      title: "Food Ordering Web",
      description: "A simple food ordering web using PHP", 
      imgUrl: projImg5,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These are some of my best projects</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

