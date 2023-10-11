// Import the `useState` hook from the "react" library.
import { useState } from "react";

// Implementation of a button component.
function Button() {
  // Define a piece of state called `inputText` and a function `setText` to update it.
  // Initialize `inputText` with an empty string.
  const [inputText, setText] = useState<string>("");

  // Define a function `handleChanges` that updates `inputText` when the input field value changes.
  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // Render the component with an input field, a paragraph to display the input text, and a reset button.
  return (
    <>
      {/* Input field that displays and allows editing of `inputText`. */}
      <input value={inputText} onChange={handleChanges}></input>

      {/* Paragraph that displays the current value of `inputText`. */}
      <p>This is your text: {inputText}</p>

      {/* Reset button that sets `inputText` to "Null" when clicked. */}
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

// Export the `Button` component to make it available for use in other parts of the application.
export default Button;
