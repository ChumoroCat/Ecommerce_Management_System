import { Routes, Route } from "react-router-dom";
import CreateSKU from "./pages/CreateSKU";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";

import MainNavigation from "./UI/MainNavigation";
import BodyLayout from "./UI/BodyLayout";

function App() {
  return (
    <div>
      <MainNavigation />
      <BodyLayout>
        <Routes>
          <Route path="/" element={<CreateSKU />}></Route>
          <Route path="/createsku" element={<CreateSKU />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
      </BodyLayout>
    </div>
  );
}

export default App;
