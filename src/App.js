import Navbar from "./components/NavBar/navbar";
import Intro from "./components/intro/intro";
// import Skills from "./components/Skill/skills"
import Works from "./components/Works/works"
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
// import Home2 from "./components/home/Home2";
import About from "./components/About/about"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About/>
      {/* <Home2/> */}
      {/* <Skills/> */}
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
