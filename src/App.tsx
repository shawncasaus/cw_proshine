import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import "./styles/index.css";
import "./styles/tailwind.css";

function App() {
  return (
    <div className="bg-black min-h-screen flex justify-center h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
