import Nav from "./components/Nav";
import qr from "./assets/images/QR.png";

function App() {
  return (
    <>
      <Nav />
      <img height={200} src={qr} alt={"QR code for dicord"} />
    </>
  );
}

export default App;
