import React from "react";
import { Routes, Route } from "react-router-dom";

const ComponentOne = React.lazy(() => import("./ComponentOne"));
const ComponentTwo = React.lazy(() => import("./ComponentTwo"));

const Optimization = () => {
  return (
    <div>
      <React.Suspense
        fallback={
          <p className="text-lg font-bold text-[red]">
            This page is loading...
          </p>
        }
      >
        <Routes>
          <Route path="/one" element={<ComponentOne />} />
          <Route path="/two" element={<ComponentTwo />} />
        </Routes>
      </React.Suspense>
    </div>
  );
};

export default Optimization;
