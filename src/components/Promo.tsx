interface Input {
  children: string;
  price: number;
}

function Promo({ children, price }: Input) {
  const styles = {
    backgroundColor: "tomato",
  };

  return (
    <div className="promo-section" style={styles}>
      <div>
        <h1>Guess a number between 1 and 3</h1>
      </div>
      <div>
        <h2>{children}</h2>
      </div>
    </div>
  );
}

export default Promo;
