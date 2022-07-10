import { Routes, Route, Navigate } from "react-router-dom";
import React, { Suspense } from "react";

import MainNavigation from "./UI/MainNavigation";
import BodyLayout from "./UI/BodyLayout";
import LoadSpinner from "./UI/LoadSpinner";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const CreateSKU = React.lazy(() => import("./pages/CreateSKU"));
const Products = React.lazy(() => import("./pages/Products"));

function App() {
  return (
    <div>
      <MainNavigation />
      <BodyLayout>
        <Routes>
          <Route
            path="/ems/"
            element={
              <Suspense fallback={<LoadSpinner />}>
                <Navigate replace to="/ems/createsku" />
              </Suspense>
            }
          ></Route>
          <Route
            path="/ems/createsku"
            element={
              <Suspense fallback={<LoadSpinner />}>
                <CreateSKU />
              </Suspense>
            }
          ></Route>
          <Route
            path="/ems/dashboard"
            element={
              <Suspense fallback={<LoadSpinner />}>
                <Dashboard />
              </Suspense>
            }
          ></Route>
          <Route
            path="/ems/products"
            element={
              <Suspense fallback={<LoadSpinner />}>
                <Products />
              </Suspense>
            }
          ></Route>
        </Routes>
      </BodyLayout>
    </div>
  );
}

export default App;
