import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";

import Project1 from "./sections/project1";
import Overview1 from "./sections/overview1";

import Project2 from "./sections/project2";
import Overview2 from "./sections/overview2";

import Project3 from "./sections/project3";
import Overview3 from "./sections/overview3";

import Project4 from "./sections/project4";
import Overview4 from "./sections/overview4";

import End from "./sections/End";


export default function App() {
  return (
    <>

      {/* NAVBAR */}
      <Navbar />


      {/* HERO */}
      <Hero />


      {/* ABOUT */}
      <About />


      {/* SKILLS */}
      <Skills />


      {/* PROJECT 1 */}
      <Project1 />
      <Overview1 />


      {/* PROJECT 2 */}
      <Project2 />
      <Overview2 />


      {/* PROJECT 3 */}
      <Project3 />
      <Overview3 />


      {/* PROJECT 4 */}
      <Project4 />
      <Overview4 />


      {/* CONTACT / END */}
      <End />

    </>
  );
}