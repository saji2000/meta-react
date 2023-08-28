import Nav from "./components/Nav";
import qr from "./assets/images/QR.png";
import Video from "./components/Video";

function App() {
  return (
    <>
      <Nav />
      <img height={200} src={qr} alt={"QR code for dicord"} />
      <Video />
    </>
  );
}

export default App;
