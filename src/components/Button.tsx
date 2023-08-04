// function Button() {
//   const clickHandler = () => console.log("Button clicked");
//   return (
//     <button type="button" className="btn btn-primary" onClick={clickHandler}>
//       Primary
//     </button>
//   );
// }

// export default Button;

function Button() {
  const clickHandler = () => console.log("Mouse over button");
  return (
    <button
      type="button"
      className="btn btn-primary"
      onMouseOver={clickHandler}
    >
      Primary
    </button>
  );
}

export default Button;
