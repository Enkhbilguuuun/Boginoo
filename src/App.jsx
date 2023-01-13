import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Links from "./pages/Link"

export const instance = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});


function App() {

  return (
    <div className="App">
         <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:Shortlink" element={<Links />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
