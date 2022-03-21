import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Products from "./pages/Products";

function App() {
  return (
    <>
    <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
    <Footer />
    </>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//      <Navbar />
//      <Home />
//      <Footer />
//     </div>
//   );
// }
