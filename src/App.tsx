import { useState } from "react";
import Nav from "./components/Nav";
// import Promo from "./components/Promo";
// import Card from "./components/Card";
// import Button from "./components/Button";
// import Form from "./components/Form";
import Fruits from "./components/Fruits/Fruits";
import FruitsCounter from "./components/Fruits/FruitsCounter";

function App() {
  const [fruits] = useState([
    { fruitName: "apple", id: 1 },
    { fruitName: "apple", id: 2 },
    { fruitName: "plum", id: 3 },
  ]);
  return (
    <>
      <Nav />
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
    </>
  );
}

export default App;
