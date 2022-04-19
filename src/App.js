import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
function App() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route exact="true" path="/" element={<Home />} />
                <Route exact="true" path="about" element={<About />} />
                <Route exact="true" path="login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;