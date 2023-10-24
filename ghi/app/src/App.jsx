import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inventory from './pages/Inventory';
import Sales from './pages/Sales';
import Service from './pages/Service';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inventory />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/service" element={<Service />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
