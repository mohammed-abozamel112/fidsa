import { ParticlesBackground } from "@/components/ConstellationBackground";
import HeroScrollDemo from "@/components/container-scroll-animation-demo";
import { Navbar } from "@/components/navbar-menu-demo";
import React, { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <ParticlesBackground>
        <Navbar />
        <HeroScrollDemo />
        
      </ParticlesBackground>
    </Fragment>
  );
};

export default Home;
