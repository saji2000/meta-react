interface Fruit {
  fruitName: string;
  id: number;
}

interface FruitsProps {
  fruits: Fruit[];
}

const Fruits = ({ fruits }: FruitsProps) => {
  return (
    <div>
      {fruits.map((f) => (
        <p key={f.id}>{f.fruitName}</p>
      ))}
    </div>
  );
};

export default Fruits;
