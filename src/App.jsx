import style from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import Contact from "./components/Contact/Contact";

function App() {
    return (
        <div className={style.app}>
            <Navbar />
            <Header />
            <About />
            <Projects />
            <Technologies />
            <Contact />
        </div>
    );
}

export default App;
