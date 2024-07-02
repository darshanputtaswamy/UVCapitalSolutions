"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Aboutus from "@/components/About";
import Whyus from "@/components/Whyus";
import Services from "@/components/Services";
import Careers from "@/components/Careers";


const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Approach />
        <Aboutus />
        <Services />
        <Whyus />
        <Careers />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
