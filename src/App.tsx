import Nav from "./components/Nav";
import qr from "./assets/images/QR.png";
import List from "./components/List";

function App() {
  return (
    <>
      <Nav />
      <img height={200} src={qr} alt={"QR code for dicord"} />
      <List />
    </>
  );
}

export default App;
