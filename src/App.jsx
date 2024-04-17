import { useState } from "react";
import "./App.css";
import { ThemeContext } from "./ThemeContext";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home, Experience, Skills, Education, Projects} from "./pages/Index";
import LeftSidebar from "./pages/global/LeftSidebar";
import RightSidebar from "./pages/global/RightSidebar";

function App() {
  const [DarkTheme, setDarkTheme] = useState(false);

  function changeTheme() {
    setDarkTheme(!DarkTheme);
  }
  return (
    <ThemeContext.Provider value={{ DarkTheme, setDarkTheme }}>
       <Router>
      <div className={`app ${
        DarkTheme && "dark bg-custom-gray text-white"
      } flex h-screen`} >
        <LeftSidebar />
        <div className="flex-grow">
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          </Routes>
          </div>
          <RightSidebar/>
      </div>
    
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
