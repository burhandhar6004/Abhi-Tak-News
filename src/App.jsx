import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { NewsProvider } from "./context/NewsContext";

const App = () => {
  return (
    <NewsProvider>
      <Navbar />
      <Home />
    </NewsProvider>
  );
};

export default App;
