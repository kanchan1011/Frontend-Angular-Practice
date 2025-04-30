function findMaximumNo(arr) {
  if (arr.length === 0) return null;

  let maxNo = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNo) {
      maxNo = arr[i];
    }
  }
  return maxNo;
}

const arr = [20, 46, 67, 29, 95, 15, 49];
console.log("Maximum no from given Array: ", findMaximumNo(arr));


/*
OUTPUT 

PS E:\Kanchan\Angular\Assignment\CodingExample> node findMaxNo
Maximum no from given Array:  95

*/
