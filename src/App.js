import "./output.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginCompenent from "./routes/login";

function App() {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div className="">home</div>} />
          <Route path="/login" element={<LoginCompenent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
