import { useState } from "react";

function Button() {
  const [inputText, setText] = useState<string>("");

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <input value={inputText} onChange={handleChanges}></input>
      <p>This is your text: {inputText}</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setText("Null")}
      >
        Reset
      </button>
    </>
  );
}

export default Button;
