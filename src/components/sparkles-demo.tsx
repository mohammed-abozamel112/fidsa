"use client"
import { SparklesCore } from "@/components/ui/sparkles"

export default function SparklesPreview() {
  return (
    <div className="h-full w-full relative bg-transparent flex flex-col items-center justify-center rounded-md top-96">{/* position-cust */}
      <h1 className="md:text-4xl text-3xl lg:text-5xl font-bold text-center text-white relative z-20 pb-3 tracking-wide">
        شركة فيد للتسويق والبرمجيات
      </h1>
      <div className="w-[50rem] h-50 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#fef3d3] to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#fef3d3] to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#fef3d3] to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#fef3d3] to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
