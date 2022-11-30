import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Price from "./pages/Price";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App bg-gray-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>} >
            <Route index element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/price" element={<Price/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
