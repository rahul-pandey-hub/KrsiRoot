'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  

  return (
    <section  className="hero relative h-screen overflow-hidden">
      <video autoPlay muted loop className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 z-10">
        <source src="https://videos.pexels.com/video-files/10041394/10041394-hd_1920_1080_24fps.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 to-black/60 flex justify-center items-center flex-col z-20">
        <h1 className="text-4xl md:text-6xl text-center font-bold text-white uppercase mb-2 animate-[fadeIn_2s_ease-in-out]">
          Nature's Goodness, Delivered Fresh
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 animate-[fadeIn_2.5s_ease-in-out]">
          Organic | Local | Global
        </p>
        <div className="scroll-indicator"></div>
      </div>
    </section>
  );
}