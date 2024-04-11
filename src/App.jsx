import { useState } from "react";

import { Navbar, Footer, SideBar, Body } from "./Components";
import "./App.scss";
import obj from "./constants/data";

function App() {
  const [data, setData] = useState(obj);

  return (
    <>
      <Navbar />
      <SideBar />
      <Body data={data} setData={setData} />
      <Footer setData={setData} />
    </>
  );
}

export default App;
