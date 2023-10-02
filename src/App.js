import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/home";
import Details from "./components/details";

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/champion/:name" element={<Details />} />
    </Routes>
  </Router>
  );
}

export default App;
