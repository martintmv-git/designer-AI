import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";  
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Room Interior",
      description: "Apartament",
      imgUrl: projImg1,
    },
    {
      title: "Room Interior",
      description: "Apartament",
      imgUrl: projImg2,
    },
    {
      title: "Room Interior",
      description: "Apartament",
      imgUrl: projImg3,
    },
    {
      title: "Room Interior",
      description: "Apartament",
      imgUrl: projImg1,
    },
    {
      title: "Room Interior",
      description: "Apartament",
      imgUrl: projImg2,
    },
    {
      title: "Room Interior",
      description: "Apartament",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Showcase</h2>
                <p>Example results from selected projects designed by our AI tool. </p> <p>The following images have all been imported through the platform using a text prompt. Through this prompt, users have provided descriptions for the AI to use in adding elements such as interior style, furniture, and colors to the images.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "" : ""}>
                    <Tab.Pane eventKey="first">
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
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
