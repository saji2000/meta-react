import { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Form = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const inputElement = useRef<HTMLInputElement>(null);
  const focus = () => {
    inputElement.current!.focus();
  };

  return (
    <>
      <div className="container-xxl pt-3 border rounded border-dark-subtle">
        <form>
          <div className="mb-3">
            <label className="form-label">First Name: </label>
            <input
              type="text"
              name="firstName"
              className="form-control limited-width"
            ></input>
          </div>

          <div className="mb-3">
            <label className="form-label">Last Name: </label>
            <input
              type="text"
              name="lastName"
              className="form-control limited-width"
            ></input>
          </div>

          <div className="mb-3">
            <label>Email: </label>
            <input
              type="email"
              name="email"
              className="form-control limited-width"
            ></input>
          </div>

          <div className="mb-3">
            <label>Password: </label>
            <input
              type="password"
              name="password"
              className="form-control limited-width"
            ></input>
          </div>

          <div className="mb-3">
            <label>Role: </label>
            <select className="form-control limited-width">
              <option value="jobSeeker">Job Seeker</option>
              <option value="employer">Employer</option>
            </select>
          </div>

          <div className="mb-3">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
