import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./profileStyle.css"
import Image from "../pages/assets/background.jpg";



function Profile() {
  return (
    <div>
      <Hero className="image" backgroundImage={Image}>
        <h1>Alex Taggart</h1>
        <br/>
        <h2>Passionate Full Stack Web Developer</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To My Portfolio!</h1>
            {/* <h4>Click on Projects to see my work!</h4> */}
            <h6><a className="links" href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">LinkedIn</a>  |  <a href="https://docs.google.com/document/d/1HSC-ZWWhYmK09Sp2Q9dplR12UchosU7bdGmLnQmPB40/edit?usp=sharing" className="links"> Resume</a>  </h6>
            <h6><a className="links" href="https://github.com/AlexTagg392">GitHub</a></h6>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <hr />
            <h2>Who I Am..</h2>
          </Col>
          <Col size="md-12">
            <p>Now a Full Stack Developer, 
               where I have learned to take my past knowledge to benefit not only my work as a 
               developer.
            </p>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <hr />
            <h2>Where I'm From..</h2>
          </Col>
          <Col size="md-12">
            <p> Once a Math Student I developed a passion for taking 
              problems and equations apart to fully understand them 
              - Then became a Math Teacher, where I learned to listen to my students
               to decipher their needs and gaps in information. 
            </p>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <hr />
            <h2>Where I'm Going..</h2>
          </Col>
          <Col size="md-12">
            <p> I will forever be a diligent and comprehensive learner for 
               myself and my work.
            </p>
            <hr />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
