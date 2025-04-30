// Create a function that calculates the sum of all elements in an array.

function sumOfArray(arr) {
  if (arr.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;

  //return arr.reduce((sum, current) => sum + current, 0);
}

const arr = [20, 30, 40, 10, 30, 25];
console.log("Sum of Given Array: ", sumOfArray(arr));

/*
OUPUT
PS E:\Kanchan\Angular\Assignment\CodingExample> node sumOfArray
Sum of Given Array:  155



NOTE :  How It Works:
1. reduce() loops through the array.
2. It accumulates the sum by adding each current value to sum.
3. 0 is the initial value of sum.
*/