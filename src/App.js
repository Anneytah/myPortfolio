import "./App.css";
// import NavBars from "./Components/NavBar";
// import About from "./Components/About";
import Body from "./Components/Body";
import {Routes, Route} from "react-router-dom";
import ContactMe from "./Components/ContactMe";
import Project from "./Components/Project";
// import About from "./Components/About";

function App() {
  return (
    <div>
      {/* <header>
        <NavBars/>
      </header> */}

 
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/" element={<Project />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>

    </div>
  );
}

export default App;
