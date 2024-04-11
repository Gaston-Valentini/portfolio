import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

export default function App() {
    return (
        <section>
            <Navbar />
            <Header />
            <About />
            <Projects />
        </section>
    );
}
