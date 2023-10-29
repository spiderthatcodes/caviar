import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Inventory from './pages/Inventory/Inventory';
import Sales from './pages/Sales/Sales';
import Service from './pages/Service/Service';
import SalesForms from './pages/SalesForms/SalesForms';

function App() {
    return (
        <BrowserRouter>
    <Nav />
        <Routes>
          <Route path="/" element={<Inventory />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/service" element={<Service />} />
          <Route path="/sales-form" element={<SalesForms />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
