function Button() {
  var darkModeOn = false;
  var darkMode = "Dark Mode";
  var lightMode = "Light Mode";
  const clickHandler = () => {
    darkModeOn = !darkModeOn;
    darkModeOn ? console.log("Dark Mode") : console.log("Light Mode");
  };

  return (
    <>
      <div>{darkModeOn ? darkMode : lightMode}</div>
      <button type="button" className="btn btn-primary" onClick={clickHandler}>
        Change Color
      </button>
    </>
  );
}

// export default Button;

// function Button() {
//   const clickHandler = () => console.log("Mouse over button");
//   return (
//     <button
//       type="button"
//       className="btn btn-primary"
//       onMouseOver={clickHandler}
//     >
//       Primary
//     </button>
//   );
// }

export default Button;
