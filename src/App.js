import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import SectionTitle from "./Components/Section/SectionTitle.jsx";
import GridLayout from "./Components/Grid/GridLayout.jsx";
import Subcribe from "./Components/Subscribe/NewsletterSubscription.jsx";
const App = () => {
  return (
    <Router>
      <div>
        {/* Include the Navbar */}
        <Navbar />
        <GridLayout />
        <SectionTitle />
        <Subcribe />
      </div>
    </Router>
  );
};

export default App;
