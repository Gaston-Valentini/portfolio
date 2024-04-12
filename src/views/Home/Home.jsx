import Navbar from "../../sections/Navbar/Navbar";
import Header from "../../sections/Header/Header";
import About from "../../sections/About/About";
import Projects from "../../sections/Projects/Projects";
import Technologies from "../../sections/Technologies/Technologies";
import Contact from "../../sections/Contact/Contact";

export default function Home() {
    return (
        <section>
            <Navbar />
            <Header />
            <About />
            <Projects />
            <Technologies />
            <Contact />
        </section>
    );
}
