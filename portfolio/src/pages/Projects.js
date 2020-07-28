import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./projectsStyle.css"
import Image from "../pages/assets/background.jpg";
import SimplySomm from "../pages/assets/SimplySomm.png";
import CineSearch from "../pages/assets/cinesearch.png";
import DayPlanner from "../pages/assets/dayplan.png";
import Password from "../pages/assets/Password.png";
import Office from "../pages/assets/Office.jpg";
import Taker from "../pages/assets/Taker.png";



function Projects() {
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
            <h1>Welcome To My Projects!</h1>
            {/* <h4>Click on Projects to see my work!</h4> */}
            <h6><a className="links" href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">LinkedIn</a>  |  <a href="https://docs.google.com/document/d/1HSC-ZWWhYmK09Sp2Q9dplR12UchosU7bdGmLnQmPB40/edit?usp=sharing" className="links"> Resume</a>  </h6>
            <h6><a className="links" href="https://github.com/AlexTagg392">GitHub</a></h6>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <hr />
            <h2>Projects</h2>
          </Col>
          <Col size="sm-12">
            <div class="col-sm-6">
              <div class="card">
                <img class="card-img-top" src={SimplySomm} alt="Simply Somm"/>
                <div class="card-body">
                  <h4 class="card-title">Simply Somm (Project 2)</h4>
                  <a href="https://metric-drake-50737.herokuapp.com/" class="btn btn-primary">Simply Somm! 
                  </a>
                  <a href="https://github.com/KingKitty89/project2" class="btn btn-primary">Click Here for the Repo </a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <img class="card-img-top" src={CineSearch} alt="CineSearch"/>
                <div class="card-body">
                  <h4 class="card-title">CineSearch (Project 1)</h4>
                  <a href="https://alextagg392.github.io/CineSearch/" class="btn btn-primary">CineSearch! 
                  </a>
                  <a href="https://github.com/AlexTagg392/CineSearch" class="btn btn-primary">Repo </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <hr />
            <h2>Exemplar Examples</h2>
          </Col>
          <Col size="md-12">
              <div class="col-md-4">
                <div class="card">
                  <img class="card-img-top" src={DayPlanner} alt="Day Planner"/>
                  <div class="card-body">
                    <h4 class="card-title">Day Planner </h4>
                    <a href="https://alextagg392.github.io/Homework_Day-Planner/" class="btn btn-primary"> Day Planner </a>
                    <a href="https://github.com/AlexTagg392/Day-Planner" class="btn btn-primary"> Repo </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card">
                  <img class="card-img-top" src={Password} alt="Password Generator"/>
                  <div class="card-body">
                    <h4 class="card-title">Password Generator </h4>
                    <a href="https://alextagg392.github.io/Homework_Day-Planner/" class="btn btn-primary"> Password Generator </a>
                    <a href="https://github.com/AlexTagg392/Homework_Password-Generator" class="btn btn-primary"> Repo </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
              <div class="card">
                <img class="card-img-top" src={Office} alt="Office"/>
                <div class="card-body">
                  <h4 class="card-title">"The Office" Management System </h4>
                  <a href="https://github.com/AlexTagg392/DunderMifflinEmployees" class="btn btn-primary"> Office Management System </a>
                  <a href="https://github.com/AlexTagg392/DunderMifflinEmployees" class="btn btn-primary"> Repo </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img class="card-img-top" src={Taker} alt="GoT"/>
                <div class="card-body">
                  <h4 class="card-title">The Taker of Notes</h4>
                  <a href="https://github.com/AlexTagg392/Taker-of-Notes" class="btn btn-primary"> Taker of Notes </a>
                  <a href="https://github.com/AlexTagg392/Taker-of-Notes" class="btn btn-primary"> Repo </a>
                </div>
              </div>
            </div>
            <hr />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
