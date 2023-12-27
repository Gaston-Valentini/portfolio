import style from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

function App() {
    return (
        <div className={style.app}>
            <Navbar />
            <Header />
        </div>
    );
}

export default App;
