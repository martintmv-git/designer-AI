import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, className }) => {
  return (
    <Col size={12} md={4}>  
      <div className={`proj-imgbx ${className}`}>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}