import { FC } from "react";

import "./App.css";
import "./css/body.css";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Tools from "./components/Tools/Tools";
import Projects from "./components/Projects/Projects.tsx";
import Photos from "./components/Photos/Photos";

const App: FC = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </>
  );
};

export default App;
