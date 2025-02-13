import About from "./component/About";
import Contact from "./component/Contract";
import Experience from "./component/Experience";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";
import Services from "./component/Services";
import Skill from "./component/Skill";

const App = () => {
  return (
    <div className="font-sans min-h-screen mx-auto bg-[#0C182E]">
      <Navbar />
      <About />
      <Skill />
      <Projects />
      <Services />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
