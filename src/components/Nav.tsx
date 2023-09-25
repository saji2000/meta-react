import { Link, Routes, Route } from "react-router-dom";
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
          <Route path="/Form" element={<Form />} />
        </Routes>
      </ul>
    </nav>
  );
}

export default Nav;
