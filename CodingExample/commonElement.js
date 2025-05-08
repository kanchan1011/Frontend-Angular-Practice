const array1=[1,2,3];
const array2=[3,4,5];

console.log("Common Element:",array1.filter(no=>array2.includes(no)));
  
console.log("All unique: ",Array.from(new Set(array1.concat(array2))))

/**
 * OUTPUT
 * PS E:\Kanchan\Angular\Assignment\CodingExample> node .\commonElement.js
Common Element: [ 3 ]
All unique:  [ 1, 2, 3, 4, 5 ]
 */