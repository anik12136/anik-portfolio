// import './App.css';

import About from "./About/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Navbar from "./Navber/Navbar";
import Project from "./Project/Project";
import Skills from "./Skills/Skills";

function App() {
  return (
    <div className="bg-gray-950 text-white">
      {/* <Header></Header> */}
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Project></Project>
      <Contact></Contact>
      <Navbar></Navbar>
    </div>
  );
}

export default App;
