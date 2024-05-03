import React from "react";
import { RouterProvider } from "react-router-dom";

import { AuthProvide } from "./helpers/authProvide";
import { MainApp } from "./pages/main";
import "./App.css";
import router from "./pages/router";
import { Header } from "./components/header";

function App() {
  return (
    <div className="App">
      <AuthProvide>
        <Header />
        <RouterProvider router={router} />
      </AuthProvide>
    </div>
  );
}

export default App;
