import { useState } from "react";
import Nav from "./components/Nav";
import Promo from "./components/Promo";

function App() {
  return (
    <>
      <Nav />
      <Promo>Here is our deal</Promo>
    </>
  );
}

export default App;
