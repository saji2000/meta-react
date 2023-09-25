import { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(e.target.value);
  // };

  const validForm = () => {};

  const handleSubmit = (e: React.FormEventHandler<HTMLFormElement>) => {};

  return (
    <>
      <div className="container-xxl pt-3 border rounded border-dark-subtle">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">
              First Name: <span className="required">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="form-control limited-width"
            ></input>
          </div>

          <div className="mb-3">
            <label className="form-label">Last Name:</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="form-control limited-width"
            ></input>
          </div>

          <div className="mb-3">
            <label>
              Email: <span className="required">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control limited-width"
            ></input>
          </div>

          <div className="mb-3">
            <label>
              Password: <span className="required">*</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control limited-width"
            ></input>
          </div>

          <div className="mb-3">
            <label>Role: </label>
            <select
              className="form-control limited-width"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
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
