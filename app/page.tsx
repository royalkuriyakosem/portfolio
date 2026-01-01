'use client'

import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin, Physics2DPlugin, ScrambleTextPlugin, ScrollSmoother } from "gsap/all";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import gsap from "gsap";
import HeroSection from "./sections/HeroSection";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import IntroSection from "./sections/IntroSection";
import ProjectsSection from "./sections/ProjectsSection";
import BingeableShowcase from "./components/BingeableShowcase";
import TimelineSection from "./sections/TimelineSection";
import TechStack from "./components/TechStack";
import TestimonialsIntro from "./components/TestimonialsIntro";
import Testimonials from "./sections/Testimonials";
import TimelineIntro from "./components/TimelineIntro";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP, MorphSVGPlugin, ScrambleTextPlugin, DrawSVGPlugin, MotionPathPlugin, Physics2DPlugin);


export default function Home() {

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });



  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <HeroSection />
        <IntroSection />
        <ProjectsSection />
        {/* <BingeableShowcase /> */}
        <div className="w-full h-dvh flex justify-center items-center">
          <h1
            className="font-heading font-black text-6xl md:text-9xl uppercase text-center"
            style={{
              color: 'transparent',
              WebkitTextStroke: '2px #c4b9a5'
            }}
          >
            Coming Soon
          </h1>
        </div>
        <TimelineIntro />
        <TimelineSection />
        <TestimonialsIntro />
        <Testimonials />
        <TechStack />
      </div>
    </div>
  );
}
