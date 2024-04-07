import { useState } from "react";

import { Navbar, Footer, SideBar, Body } from "./Components";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <SideBar />
      <Body />
      <Footer />
    </>
  );
}

export default App;
