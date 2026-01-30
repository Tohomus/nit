import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LogoMarquee from "../components/LogoMarquee";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import BackgroundAnimation from "../components/BackgroundAnimation";


export default function Home() {
return (
<div className="bg-white text-black font-sans relative z-10">
<BackgroundAnimation />
<Navbar />
<Hero />
<LogoMarquee />
<About />
<Services />
<Contact />
<div className="h-[1500px]"></div>
</div>

);
}