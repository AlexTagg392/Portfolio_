import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./projectsStyle.css"
import Image from "../pages/assets/background2.jpg";
import SimplySomm from "../pages/assets/SimplySomm.png";
import CineSearch from "../pages/assets/cinesearch.png";
import ToolNextDoor from "../pages/assets/ToolNextDoor.png"

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
            <h4><a className="links" href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">LinkedIn</a>  |  <a href="https://docs.google.com/document/d/1HSC-ZWWhYmK09Sp2Q9dplR12UchosU7bdGmLnQmPB40/edit?usp=sharing" className="links"> Resume</a>  </h4>
            <h4><a className="links" href="https://github.com/AlexTagg392">GitHub</a></h4>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <hr />
            <h1>Projects</h1>
          </Col>
          <Col size="sm-12">
          <div class="card">
                <img class="card-img" src={ToolNextDoor} alt="Tool Next Door"/>
                <div class="card-body">
                  <h4 class="card-title">Tool Next Door</h4>
                  <div>
                    <p class="text-title">Description</p>
                    <p class=" text">
                      Tool Next Door is a Community Application of do-it-yourselfers that benefit from each other needs. 
                      
                    </p>
                    <p class="text-title">Concepts and Technologies</p>
                    <p class=" text">
                      HTML, CSS, JavaScript, MongoDB, REACT, Express, Node.js, Mongoose, Heroku, Material UI and Stripe.
                      
                    </p>
                  </div>
                  <div class="button">
                  <a href="https://shielded-temple-94953.herokuapp.com/" class="btn btn-primary">Tool Next Door! 
                  </a>
                  <a href="https://github.com/AlexTagg392/ToolNextDoor" class="btn btn-primary">Click Here for the Repo </a>
                  </div>
                </div>
              </div>
            {/* <div class="col-sm-6"> */}
              <div class="card">
                <img class="card-img-top" src={SimplySomm} alt="Simply Somm"/>
                <div class="card-body">
                  <h4 class="card-title">Simply Somm </h4>
                  <div>
                    <p class="text-title">Description</p>
                    <p class=" text">
                    Simply Somm is an Application that creates a list of whiskey or wine based on a user's picks in Aroma and Taste.
                      
                    </p>
                    <p class="text-title">Concepts and Technologies</p>
                    <p class=" text">
                    HTML, CSS, Node.js, Sequelize, jQuery, JavaScript, Express.js, Express-Handlebars, Path, and Bootstrap. 
                      
                    </p>
                  </div>
                  <div class="button">
                  <a href="https://metric-drake-50737.herokuapp.com/" class="btn btn-primary">Simply Somm! 
                  </a>
                  <a href="https://github.com/AlexTagg392/SimplySomm" class="btn btn-primary">Click Here for the Repo </a>
                </div>
                </div>
              </div>
            {/* </div> */}
            {/* <div class="col-sm-6"> */}
              <div class="card">
                <img class="card-img-top" src={CineSearch} alt="CineSearch"/>
                <div class="card-body">
                  <h4 class="card-title">CineSearch </h4>
                  <div>
                    <p class="text-title">Description</p>
                    <p class=" text">
                    CineSearch is an Application that allows you to find a list of movies that fits your search criteria
                      
                    </p>
                    <p class="text-title">Concepts and Technologies</p>
                    <p class=" text">
                    HTML, CSS, JavaScript, jQuery, Foundation Framework and Multiple Movie APIs(OMDB, TMDB and UTelly)
                      
                    </p>
                  </div>
                  <div class="button">
                  <a href="https://alextagg392.github.io/CineSearch/" class="btn btn-primary">CineSearch! 
                  </a>
                  <a href="https://github.com/AlexTagg392/CineSearch" class="btn btn-primary">Click Here for the Repo </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <hr />
            <h2>Contact</h2>
          </Col>
          <Col size="md-12">
                <p>
                  If you need to you can contact me at my email address:
                </p>
                <p>
                  christag392@gmail.com
                </p>  
                <hr />    
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
        
