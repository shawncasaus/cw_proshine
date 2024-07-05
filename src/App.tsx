import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Footer from "./components/Footer";
import "./styles/index.css";
import "./styles/tailwind.css";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  return (
    <div className="bg-black min-h-screen flex justify-center flex-col font-sans">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Footer companyName="CW-Proshine" year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
