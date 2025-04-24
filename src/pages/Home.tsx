import React, { Fragment, Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import { ParticlesBackground } from "../components/ConstellationBackground";
import HeroScrollDemo from "../components/container-scroll-animation-demo";

import { Navbar } from "../components/navbar-menu-demo";
import FloatingDockDemo from "@/components/floating-dock-demo";

const ServicesComponent = lazy(() => import("../components/Services"));
const TimelineDemo = lazy(() => import("../components/timeline-demo"));

const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title>شركة فيد للتسويق والبرمجيات</title>
        {/* icon of website */}
        <link rel="icon" href="./src/assets/images/Logo.png" type="icon" />
        <meta
          name="description"
          content="Welcome to Fid Marketing Company, your trusted partner for innovative marketing solutions."
        />
        <meta property="og:title" content="شركة فيد للتسويق والبرمجيات" />
        <meta
          property="og:description"
          content="Welcome to Fid Marketing Company, your trusted partner for innovative marketing solutions."
        />
        <meta property="og:image" content="./src/assets/images/Logo.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="شركة فيد للتسويق والبرمجيات" />
        <meta
          name="twitter:description"
          content="Welcome to Fid Marketing Company, your trusted partner for innovative marketing solutions."
        />
        <meta name="twitter:image" content="./src/assets/images/Logo.png" />
      </Helmet>
      <ParticlesBackground>
        <Navbar />

        <HeroScrollDemo />

        <Suspense>
          <TimelineDemo />
        </Suspense>
        <Suspense>
          <ServicesComponent />
        </Suspense>
        <Suspense>
          <FloatingDockDemo />
        </Suspense>
      </ParticlesBackground>
    </Fragment>
  );
};

export default Home;
