function Button() {
  var darkModeOn = false;
  var darkMode = "Dark Mode";
  var lightMode = "Light Mode";
  const clickHandler = () => {
    darkModeOn = !darkModeOn;
    darkModeOn ? console.log("Dark Mode") : console.log("Light Mode");
  };

  const guessNumber = () => {
    let num = Math.floor(Math.random() * 3) + 1;
    let inputNum = prompt("Enter a number: ");

    if (num == Number(inputNum)) {
      console.log("You won");
    } else {
      console.log("You lose");
    }
    console.log("The number: " + num + " || Your guess: " + inputNum);
  };

  return (
    <>
      <div>{darkModeOn ? darkMode : lightMode}</div>
      <button type="button" className="btn btn-primary" onClick={guessNumber}>
        Guess
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
