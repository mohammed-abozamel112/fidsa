"use client";
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";

export const ParticlesBackground = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadLinksPreset(engine);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          preset: "links",
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          background: {
            color: { value: "#feaf00" },
          },
          particles: {
            color: { value: "#db000d" },
            links: {
              color: "#db000d",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
            },
            number: {
              value: 80,
              density: {
                enable: true,
                area: 800,
              },
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 1,
                },
              },
              push: {
                quantity: 4,
              },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
