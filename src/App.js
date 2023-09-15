import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Courses from "./components/Courses/course";
import Newsdetail from "./components/NewsDetails/NewsDetails";
import News from "./components/New/News";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes> {/* Wrap your Routes in a Routes component */}
          <Route path="/schoolwebapp" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="News" element={<News />} />
          <Route path="Newsdetail" element={<Newsdetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
