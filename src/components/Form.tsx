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
      <form>
        <div className="mb-3">
          <label>First Name: </label>
          <input type="text" name="firstName"></input>
        </div>

        <div className="mb-3">
          <label>Last Name: </label>
          <input type="text" name="lastName"></input>
        </div>

        <div className="mb-3">
          <label>Email: </label>
          <input type="email" name="email"></input>
        </div>

        <div className="mb-3">
          <label>Password: </label>
          <input type="password" name="password"></input>
        </div>

        <div className="mb-3">
          <label>Role: </label>
          <select>
            <option value="jobSeeker">Job Seeker</option>
            <option value="employer">Employer</option>
          </select>
        </div>

        <div className="mb-3">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
};

export default Form;
