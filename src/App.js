import "./App.css";
import NavBars from "./Components/NavBar";
// import About from "./Components/About";
import Body from "./Components/Body";


function App() {
  return (
    <div className="">
      <header>
        <NavBars/>
      </header>

       <main>
        <Body />
      </main> 
    </div>
  );
}

export default App;
