import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";  
import TrackVisibility from 'react-on-screen';
//new images
export const Projects = () => {

  const projects = [
    {
      title: "Living Room",
      description: "...classic old-fashioned interior, blue painting above blue corner couch, new floor and carpet.",
      imgUrl: projImg1,
    },
    {
      title: "Bedroom",
      description: "...modern interior, cozy colours, big floor carpet, big low bed, buffet lamp, paintings on the wall.",
      imgUrl: projImg2,
    },
    {
      title: "Living Room ",
      description: "...minimalist-modern style, green accents, calm colours, modern couch, coffee table, mirror and painting, polished wooden floor. ",
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
                <p>The following spaces have been designed using AI. Using text prompt and an image for the AI to work on, it generates a varitation of results that try to fit in our user's vision.</p> <p> More examples at /library.</p>
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
