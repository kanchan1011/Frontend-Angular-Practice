let arrayOfObj = [
  { id: 1, name: "riya" },
  { id: 1, name: "diya" },
  { id: 2, name: "marry" },
];

const unquiObj = Array.from(
  new Map(arrayOfObj.map((obj) => [obj.id, obj])).values()
);
console.log(unquiObj);

/*
OUTPUT

PS E:\Kanchan\Angular\Assignment\CodingExample> node .\removeDuplicateObj.ts
[ { id: 1, name: 'diya' }, { id: 2, name: 'marry' } ]
*/
