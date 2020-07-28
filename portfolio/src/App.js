import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Container from "./components/Container";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Wrapper>
          <Route exact path="/Portfolio_" component={Profile} />
          <Route exact path="/projects" component={Projects} />
        <Container>

        </Container>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
