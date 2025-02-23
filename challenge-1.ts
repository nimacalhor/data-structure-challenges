interface ListType {
  id: number;
  name: string;
  score: number;
}

const people: ListType[] = [
  {
    id: 1,
    name: "Ali",
    score: 1,
  },

  {
    id: 3,
    name: "John",
    score: 3,
  },

  {
    id: 4,
    name: "Fred",
    score: 4,
  },

  {
    id: 2,
    name: "Mohammad",
    score: 2,
  },
];

function scoreNamesWithA(list: ListType[]): ListType[] {
  const newList = list.map((person) => {
    if (person.name.toLowerCase().includes("a")) {
      return { ...person, score: 20 };
    } else return { ...person };
  });

  return newList;
}

const updatedPeople = scoreNamesWithA(people);

console.log(JSON.stringify(people));
console.log(JSON.stringify(updatedPeople));
console.log(
  "updating updatedPeople ________________________________________________________________________________"
);
updatedPeople[0].name = "new new new new name";
console.log(people[0].name);
console.log(updatedPeople[0].name);
