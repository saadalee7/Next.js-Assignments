import React from "react";
import Profile from "./profile";
import About from "./about/page";
import Contact from "./contact/page";

const Main = () => {
  return (
    <div className="flex flex-col items-center group">
      <Profile />
      <About />
      <Contact />
    </div>
  );
};

export default Main;
