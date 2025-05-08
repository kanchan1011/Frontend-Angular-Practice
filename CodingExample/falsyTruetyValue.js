const inputArray = [1, 0, false, null, "", "hello", undefined, NaN, 2];

const turtyValue = inputArray.filter(Boolean);

console.log("Using Boolean Type: ", turtyValue);

//Other Approach

const output = inputArray.filter((item) => {
  const isString = typeof item === "string" && item !== "";
  const isNumber = typeof item === "number" && !isNaN(item) && item !== 0;
  return isString || isNumber;
});

console.log("Using Filter: ", output);
// Output: [1, "hello", 2]

/**
 * OUTPUT
 *PS E:\Kanchan\Angular\Assignment\CodingExample> node .\falsyTruetyValue.js
Using Boolean Type:  [ 1, 'hello', 2 ]
Using Filter:  [ 1, 'hello', 2 ]
 */
