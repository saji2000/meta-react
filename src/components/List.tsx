const List = () => {
  const persons = [
    {
      id: 1,
      name: "Sajad",
      country: "Iran",
    },
    {
      id: 2,
      name: "Sobhan",
      country: "Iran",
    },
  ];

  const listItems = persons.map((person) => {
    return (
      <li>
        {person.name} - {person.country}
      </li>
    );
  });

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};

export default List;
