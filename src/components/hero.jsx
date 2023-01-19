import React from "react";
import '../styles/hero.css';
import { FullpageSection } from "@ap.cx/react-fullpage";

const Hero = () => {

  return (
    <FullpageSection className="heroSection">
      <div>Hello, I'm <span>Malova</span></div>
      <div>Software Developer.</div>
    </FullpageSection>
  )
}

export default Hero;