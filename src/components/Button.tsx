function Button() {
  const clickHandler = () => console.log("Button clicked");
  return (
    <button type="button" className="btn btn-primary" onClick={clickHandler}>
      Primary
    </button>
  );
}

export default Button;
