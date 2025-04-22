import React, { Fragment, Suspense, lazy, RefObject } from "react";
import { Helmet } from "react-helmet-async";
import { ParticlesBackground } from "../components/ConstellationBackground";
import HeroScrollDemo from "../components/container-scroll-animation-demo";
import { Navbar } from "../components/navbar-menu-demo";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const ServicesComponent = lazy(() => import("../components/Services"));
const TimelineDemo = lazy(() => import("../components/timeline-demo"));

const LazyLoadWrapper = ({ children }: { children: React.ReactNode }) => {
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>({
    rootMargin: "0px",
    threshold: 0.1,
  });

  return (
    <>
      <style>
        {`
          .fade-slide-up {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }
          .fade-slide-up.visible {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>
      <div
        ref={ref as RefObject<HTMLDivElement>}
        style={{ minHeight: "100px" }}
        className={isIntersecting ? "fade-slide-up visible" : "fade-slide-up"}
      >
        {isIntersecting ? children : null}
      </div>
    </>
  );
};

const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title>شركة فيد للتسويق والبرمجيات</title>
        <meta
          name="description"
          content="Welcome to Fid Marketing Company, your trusted partner for innovative marketing solutions."
        />
        <meta property="og:title" content="شركة فيد للتسويق والبرمجيات" />
        <meta
          property="og:description"
          content="Welcome to Fid Marketing Company, your trusted partner for innovative marketing solutions."
        />
        <meta property="og:image" content="/src/assets/images/Logo.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="شركة فيد للتسويق والبرمجيات" />
        <meta
          name="twitter:description"
          content="Welcome to Fid Marketing Company, your trusted partner for innovative marketing solutions."
        />
        <meta name="twitter:image" content="/src/assets/images/Logo.png" />
      </Helmet>
      <ParticlesBackground>
        <Navbar />
        <HeroScrollDemo />
        <Suspense fallback={<div>Loading timeline...</div>}>
          <LazyLoadWrapper>
            <TimelineDemo />
          </LazyLoadWrapper>
        </Suspense>
        <Suspense fallback={<div>Loading services...</div>}>
          <LazyLoadWrapper>
            <ServicesComponent />
          </LazyLoadWrapper>
        </Suspense>
      </ParticlesBackground>
    </Fragment>
  );
};

export default Home;
