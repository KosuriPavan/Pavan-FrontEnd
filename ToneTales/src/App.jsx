import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/homepage/HomePage.jsx";
import AdminLogin from "./components/AdminLogin/LoginPage.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<AdminLogin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
