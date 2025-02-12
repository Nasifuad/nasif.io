import About from "./component/About";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <div className="font-sans min-h-screen mx-auto bg-[#0C182E]">
      <Navbar />
      <About />
    </div>
  );
};

export default App;
