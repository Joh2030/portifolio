import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import HeroSection from "../src/components/HeroSection";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />

      <BrowserRouter>
        <Routes>{/* <Route path="/" element={<HeroSection />} /> */}</Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
