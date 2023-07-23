interface Input {
  children: string;
}

function Promo({ children }: Input) {
  return (
    <div className="promo-section">
      <div>
        <h1>Don't miss this deal!</h1>
      </div>
      <div>
        <h2>{children}</h2>
      </div>
    </div>
  );
}

export default Promo;
