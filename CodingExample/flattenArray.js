const nestedArray = [1, [2, [3, 4]], 5];
const flat = nestedArray.flat(Infinity);  // infinity is depth of array upto where we want to flaten array
console.log("Flatten Array: ", flat);

/**
 * OUTPUT
 * PS E:\Kanchan\Angular\Assignment\CodingExample> node .\flattenArray.js
Flatten Array:  [ 1, 2, 3, 4, 5 ]
 */
