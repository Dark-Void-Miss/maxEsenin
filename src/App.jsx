import { Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Chatacters } from "./components/Chatacters/Chatacters";

function App() {
  return (
    <>
      <div className="container">
        <Header></Header>
        <Routes>
          <Route path="/Home" element={<Main />} />
          <Route path="/Characters" element={<Chatacters />} />
        </Routes>
        
      </div>
    </>
  );
}

export default App;
