import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/common_pages/Homepage";
import TopBanner from "./components/Banners/TopBanner";
import Header from "./components/Banners/Header";
import TopImageSection from "./components/Banners/TopImageSection";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <>
      <Router>
        <TopBanner />
        <Header />

        <Routes>
          <Route path="/" element={<Homepage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
