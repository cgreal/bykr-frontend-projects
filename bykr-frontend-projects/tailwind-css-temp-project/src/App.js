import React from "react";
import NavBar from "./components/Navbar";
import HeroImage from "./components/HeroImage";
import "./assets/styles/global.scss";
import AboutUsComponent from "./components/AboutUsContent";
import SolutionDetail from "./components/SolutionDetail";
import Service from "./components/Service";
import TabContent from "./components/TabContent";
import Blog from "./components/Blog";
import Categories from "./components/Categories";
import FeedBackSlider from "./components/FeedBackSlider";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <HeroImage />
      <AboutUsComponent />
      <SolutionDetail />
      <Service />
      <TabContent />
      <FeedBackSlider />
      <Blog />
      <Categories />
      <Footer />
    </>
  );
};
export default App;
