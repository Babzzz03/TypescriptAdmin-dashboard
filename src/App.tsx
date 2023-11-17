import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import Products from "./Pages/Products";
import Orders from "./Pages/Orders";
import Transaction from "./Pages/Transaction";
import Promotions from "./Pages/Promotions";
import Settings from "./Pages/Settings";
import Support from "./Pages/Support";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="w-72 fixed dark:bg-secondary-dark-bg bg-white ">
          <Sidebar />
        </div>
        <div className="fixed  md:static bg-white dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>


        <div>
          <Routes>
            {/* dashboard  */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/transactions" element={<Transaction />} />
            <Route path="/promotion" element={<Promotions />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
