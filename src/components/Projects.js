import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";  
import TrackVisibility from 'react-on-screen';
export const Projects = () => {

  const projects1 = [
    {
      title: "Guest Room",
      description: "...classic old-fashioned interior, wall patterns, calm colours, blue painting above corner couch, new floor and carpet...",
      imgUrl: projImg1,
    },
    {
      title: "Bedroom",
      description: "...modern interior, cozy colours, big floor carpet, ground bed, buffet lamp, paintings on the wall, keep the original curtains...",
      imgUrl: projImg2,
    },
    {
      title: "Living Room ",
      description: "...minimalist-modern style, green accents, modern furniture, mirror and a painting, polished wooden floor...",
      imgUrl: projImg3,
    },];
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
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                              key={index}
                              className={`box${index + 1}`}
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
