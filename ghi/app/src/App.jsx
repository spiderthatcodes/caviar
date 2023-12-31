import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Inventory from "./pages/Inventory/Inventory";
import Sales from "./pages/Sales/Sales";
import Service from "./pages/Service/Service";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Inventory />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
