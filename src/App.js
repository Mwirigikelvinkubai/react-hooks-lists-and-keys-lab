import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import projects from "./data/user.js";


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
