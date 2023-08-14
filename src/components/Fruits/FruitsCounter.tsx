interface Fruits {
  fruitName: string;
  id: number;
}

interface FruitsProps {
  fruits: Fruits[];
}

const FruitsCounter = ({ fruits }: FruitsProps) => {
  return (
    <div>
      <p>{fruits.length}</p>
    </div>
  );
};

export default FruitsCounter;
