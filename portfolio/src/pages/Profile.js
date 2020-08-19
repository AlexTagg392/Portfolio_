import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./profileStyle.css"
import Image from "../pages/assets/background.jpg";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const StyledTableCell = withStyles((theme) => ({
  head: {
    fontSize: 35,
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 25,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 650,

  },
});

function createData(name, proficiences) {
  return { name, proficiences };
}

const rows = [
  createData('HTML', 100),
  createData('CSS', 100),
  createData('JavaScript', 90),
  createData('React', 90),
  createData('MySQL', 95),
  createData('Sequelize', 95),
  createData('MongoDB', 100),
  createData('Git Bash', 100),
  createData('Visual Studio Code', 100),
  createData('MERN Stack', 95),
  createData('.Net', 45),
  createData('Python', 50),
];


function Profile() {
  const classes = useStyles();
  return (
    // 
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
            <h4><a className="links" href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">LinkedIn</a>  |  <a href="https://docs.google.com/document/d/1HSC-ZWWhYmK09Sp2Q9dplR12UchosU7bdGmLnQmPB40/edit?usp=sharing" className="links"> Resume</a>  </h4>
            <h4><a className="links" href="https://github.com/AlexTagg392">GitHub</a></h4>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <hr />
            <h2>Who I Am..</h2>
          </Col>
          <Col size="md-12">
            <p>Full Stack Web Developer leveraging a background in mathematics to build a more comprehensive user experience on the web. 
              Recently earned a certificate in Full Stack Development from Vanderbilt University.
             
            </p>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <hr />
            <h2>Who I Was</h2>
          </Col>
          <Col size="md-12">
            <p>
              Once a Math Student I developed a passion for taking 
              problems and equations apart to fully understand them.
            </p>
            <p>
              - Then a Math Teacher, where I learned to listen to my students
               to decipher their needs and gaps in information. I will forever be a diligent and 
               comprehensive learner for myself and my work.
            </p>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <hr />
            <h2>Tech Skills</h2>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">Skills/Technologies</StyledTableCell>
                    <StyledTableCell align="center">Proficient&nbsp;(%)</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <StyledTableCell align="center" component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="center">{row.proficiences}</StyledTableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

          </Col>
          <Col size="md-12">
                      
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

export default Profile;
