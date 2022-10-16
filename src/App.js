import Header from "./components/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Scouting from "./pages/Scouting";
import Chat from "./pages/Chat";

//components
import GetData from "./components/data";
import InputData from "./components/InputData";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/scouting" element={<Scouting />} />
        <Route path="/chat" element={<Chat/>} />
      </Routes>
    </div>
  );
}

export default App;
