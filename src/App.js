import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import CardContainer from "./components/CardContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<CardContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
