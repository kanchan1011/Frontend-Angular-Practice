const arr=[5,3,7,1,9];
//const asc=arr.sort();
const asc=[...arr].sort((a,b)=>a-b);

const desc=[...arr].sort((a,b)=>b-a);

console.log("Sorted ASC: ",asc);

console.log("Sorted DESC: ",desc);

/*
OUTPUT
PS E:\Kanchan\Angular\Assignment\CodingExample> node .\sortArr.js
Sorted ASC:  [ 1, 3, 5, 7, 9 ]
Sorted DESC:  [ 9, 7, 5, 3, 1 ]
*/