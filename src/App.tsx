import "./styles/main.css";
import Form from "./components/Form";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <form onSubmit={() => alert("Submitting")}>
        <input type="button" value="Submit" />
      </form>
      {/* <Form /> */}
    </>
  );
}

export default App;
