import { useRef, useState } from "react";

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
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={value}
          onChange={handleChange}
        ></input>
        <p>{value}</p>
      </form>
      <input ref={inputElement} type="text"></input>
      <button onClick={focus}>Click to focus</button>
    </>
  );
};

export default Form;
