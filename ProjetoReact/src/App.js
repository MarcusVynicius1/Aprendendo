import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Container from "./components/layout/Container";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import NewProject from "./components/pages/NewProject";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <Router>
      <NavBar />
      <Container>
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/projects" Component={Projects}></Route>
          <Route exact path="/company" Component={Company}></Route>
          <Route exact path="/contact" Component={Contact}></Route>
          <Route exact path="/newproject" Component={NewProject}></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
