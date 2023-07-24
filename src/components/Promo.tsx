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
        <h1>Don't miss this deal only for {price}!</h1>
      </div>
      <div>
        <h2>{children}</h2>
      </div>
    </div>
  );
}

export default Promo;
