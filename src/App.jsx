import style from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";

function App() {
    return (
        <div className={style.app}>
            <Navbar />
            <Header />
            <About />
        </div>
    );
}

export default App;
