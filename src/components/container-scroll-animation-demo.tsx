"use client";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import heroImg from "../assets/images/1.png";
import SparklesPreview from "./sparkles-demo";
export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <SparklesPreview />
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white dark:text-white pb-15 pt-5">
              <span className="text-3xl md:text-[4rem] font-bold mt-1 leading-none">
                سوق لمنتجك
              </span>
              <br />
              <span className="text-3xl md:text-[4rem] font-bold mt-0 leading-none tracking-wide">
                بإبداع
              </span>
            </h1>
          </>
        }
      >
        <img loading="lazy"
          src={heroImg}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
