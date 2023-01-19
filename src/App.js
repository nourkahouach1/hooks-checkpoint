import "./App.scss";
import Home from "./home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./Components/Details/Details";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
