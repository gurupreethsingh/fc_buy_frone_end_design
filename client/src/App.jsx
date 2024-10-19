import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/common_pages/Homepage";
import TopBanner from "./components/Banners/TopBanner";

function App() {
  return (
    <>
      <Router>
        <TopBanner />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
