console.log("5" - 2);
console.log("5" + 2);
console.log(undefined);
array = [0, 2, 3, 4];
array[10] = 10;
console.log(array.length);

//==========================================

//Variable hoisting
console.log("a: ", a); //var declarations are hoisted, but not the initialization.
var a = 10;

//function Vs Block Scope

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("i: " + i), 100); //var is function-scoped. By the time setTimeout runs, i is 3. To fix: use let i instead.
}

//Closure in Loops
function createFunctions() {
  let funcs = [];
  for (var i = 0; i < 3; i++) {
    //All closures share the same i because var has function scope.
    funcs.push(() => console.log("Closure in Loop: ", i));
  }
  return funcs;
}
createFunctions().forEach((fn) => fn());

//typeof null and undefined
console.log("Typeof NULL: ", typeof null);
console.log("Typeof Undefined: ", typeof undefined);
console.log(null);

//Equality and Corecion
//![] → false and [] == false → true (because [] is coerced to '')
console.log("Equality and Corecion: ",[] == ![]); 

//setTimeout with 0 delay
console.log("setTimeout with 0 delay: ")
console.log('start');
setTimeout(() => console.log('timeout'), 0); //setTimeout is asynchronous and goes to the event queue.
console.log('end');

//this in Regular vs Arrow Function
const obj = {
    name: 'JavaScript',
    regular() {
      return this.name;
    },
    arrow: () => {
      return this.name;
    }
  };
  
  console.log("Regular: ",obj.regular());  //regular() uses the object context. arrow() uses this from where it was defined (likely global).
  console.log("Arrow: ",obj.arrow());


  //Precedence and Short-Circuiting
  console.log("Precedence and Short-Circuiting: ")
  console.log(1 < 2 < 3);   // true
console.log(3 > 2 > 1);   // false
/*
Explanation:
1 < 2 < 3 → true < 3 → 1 < 3 → true
3 > 2 > 1 → true > 1 → 1 > 1 → false
 */

//Object Keys Coercion
const ob = {};
ob[true] = 'yes';
ob[1] = 'no';
console.log("Object Keys Corecion: ",ob[true]);

/*
Explanation:
Object keys are converted to strings:
true → "true"
1 → "1"

But in this case:
obj[true] == obj["true"]
obj[1] == obj["1"]

*/


//NaN Comparison
console.log("NaN Comparison: ",NaN === NaN);
/**
 * NaN is the only value in JavaScript not equal to itself.
Use:
Number.isNaN(NaN); // true
 */


  

/*
OUTPUT


PS E:\Kanchan\Angular\Assignment\CodingExample> node .\outputBasedQues.js     
3
52
undefined
11
a:  undefined      
Closure in Loop:  3
Closure in Loop:  3
Closure in Loop:  3
Typeof NULL:  object
Typeof Undefined:  undefined
null
Equality and Corecion:  true
setTimeout with 0 delay:
start
end
Regular:  JavaScript
Arrow:  undefined
Precedence and Short-Circuiting:
true
false
Object Keys Corecion:  yes
NaN Comparison:  false
timeout
i: 3
i: 3
i: 3
PS E:\Kanchan\Angular\Assignment\CodingExample> 

*/
