interface Input {
  h2: string;
  h3: string;
}

const Card = ({ h2, h3 }: Input) => {
  return (
    <>
      <div className="badge text-bg-light">
        <h2>{h2}</h2>
        <h3>{h3}</h3>
      </div>
    </>
  );
};

export default Card;
