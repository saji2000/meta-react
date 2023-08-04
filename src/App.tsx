import { useState } from "react";
import Nav from "./components/Nav";
import Promo from "./components/Promo";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Nav />
      <Promo price={100}>Here is our deal</Promo>
      <h1>Task: Add three Card elements</h1>
      <Card h2="First card's h2" h3="First card's h3" />
      <Card h2="Second card's h2" h3="Second card's h3" />
      <Card h2="Third card's h2" h3="Third card's h3" />
      <Button />
    </>
  );
}

export default App;
