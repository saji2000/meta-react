import { Link, Routes, Route } from "react-router-dom";
import Promo from "./Promo";
import Form from "./Form";

function Nav() {
  return (
    <nav>
      <ul className="nav nav-underline">
        <Link to="/" className="nav-item">
          Homepage
        </Link>
        <Link to="/Form" className="nav-item">
          Form
        </Link>
        <Routes>
          <Route
            path="/"
            element={<Promo price={10.0}>Placeholder text</Promo>}
          />
          <Route path="/Form" element={<Form />} />
        </Routes>
      </ul>
    </nav>
  );
}

export default Nav;
