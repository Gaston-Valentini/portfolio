import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "../src/components/Header/Header";
import About from "../src/components/About/About";

export default function App() {
    return (
        <section>
            <Navbar />
            <Header />
            <About />
        </section>
    );
}
