import "./App.css";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Project from "./views/Project/Project";
import NotFound from "./views/NotFound/NotFound";

export default function App() {
    return (
        <>
            <Analytics />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project/:id" element={<Project />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </>
    );
}
