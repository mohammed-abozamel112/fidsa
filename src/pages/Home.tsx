import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import { ParticlesBackground } from "../components/ConstellationBackground";
import HeroScrollDemo from "../components/container-scroll-animation-demo";
import { Navbar } from "../components/navbar-menu-demo";
import ServicesComponent from "@/components/Services";
import TimelineDemo from "@/components/timeline-demo";

const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Fid Marketing Company - Home</title>
        <meta
          name="description"
          content="Welcome to Fid Marketing Company, your trusted partner for innovative marketing solutions."
        />
        <meta property="og:title" content="Fid Marketing Company - Home" />
        <meta
          property="og:description"
          content="Welcome to Fid Marketing Company, your trusted partner for innovative marketing solutions."
        />
        <meta property="og:image" content="/src/assets/images/Logo.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fid Marketing Company - Home" />
        <meta
          name="twitter:description"
          content="Welcome to Fid Marketing Company, your trusted partner for innovative marketing solutions."
        />
        <meta name="twitter:image" content="/src/assets/images/Logo.png" />
      </Helmet>
      <ParticlesBackground>
        <Navbar />
        <HeroScrollDemo />
        <TimelineDemo />
        <ServicesComponent />
      </ParticlesBackground>
    </Fragment>
  );
};

export default Home;
