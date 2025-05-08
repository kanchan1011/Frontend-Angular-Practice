const arr = ["a", "b", "a", "c", "a"];
console.log("Most Frequent Element: ", mostFreqElement(arr));

function mostFreqElement(arr) {
  const freqMap = {};
  let maxCount = 0;
  let mostFreqElement;

  for (const item of arr) {
    freqMap[item] = (freqMap[item] || 0) + 1;
    if (freqMap[item] > maxCount) {
      maxCount = freqMap[item];
      mostFreqElement = item;
    }

  }
  return mostFreqElement;
}



/**
 * OUTPUT
 * PS E:\Kanchan\Angular\Assignment\CodingExample> node .\occurenceOfElement.js
Most Frequent Element:  a
 */