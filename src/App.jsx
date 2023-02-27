import React from "react";
import Counter from "./component/Counter";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router= createBrowserRouter([
    {
      path: "/",
      element: <Counter />
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
