import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    firstName: "John",
    lastName: "Smith",
    email: "johnsmith1234@gmail.com",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <>
      <form>
        <label>First Name: </label>
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
        ></input>
        <label> Last Name: </label>
        <input
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
        ></input>
        <label> Email: </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        ></input>
        <p>
          {form.firstName}, {form.lastName}, {form.email}
        </p>
      </form>
    </>
  );
};

export default Form;
