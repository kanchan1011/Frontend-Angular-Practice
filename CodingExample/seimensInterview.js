// const obj={};
// const a={key:'a'};
// const b={key:'b'};

// obj[a]=123;
// obj[b]=456;
// console.log(obj[a])

// console.log("Next Ques:================")

// console.log("Strat")

// setTimeout(()=>{
//     console.log("Timeout 1");
// },0)
// Promise.resolve().then(()=>console.log("Promise 1"))
// setTimeout(()=>{
//     console.log("Timeout 2");
// },0)

// Promise.resolve().then(()=>console.log("Promise 2"))
// console.log("end");



// console.log("Next Ques:================")


// console.log("strat")
// async function foo(){
//     console.log("inside foo");
//     await Promise.resolve().then(()=>console.log("Promise 1"));
//     console.log("data");
// }
// foo();
// console.log("END");


// async function test() {
//   return 42;
// }
// console.log(test());



const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
