import Image from "next/image";
import Topnav from "./components/Topnav";
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import VideoSection from "./components/VideoSection";
import Services from "./components/Services";

import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
// import Slider from "./components/Slider";


export default function Home() {
  return (
    <main className="container-fluid">
        <Topnav />
        <Menu />
        <Hero />
        <About />
        <WhyChooseUs />
        <VideoSection />
        <Services />
        <Testimonials />
        <NewsLetter />
        <Footer />

    </main>
  );
}
