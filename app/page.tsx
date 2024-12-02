import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/ui/hero";
import { Section1 } from "@/components/ui/section1";
import { Section2 } from "@/components/ui/section2";
import { Section3 } from "@/components/ui/section3";
import { Section4 } from "@/components/ui/section4";
import { Section5 } from "@/components/ui/section5";
import { Section6 } from "@/components/ui/section6";
import { Footer } from "@/components/ui/footer";

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Footer/>
    </>
  );
}

export default Home;