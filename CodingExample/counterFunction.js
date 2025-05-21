function createCounter(){
    let count=0;
    return function(){
        count+=1;
        return count;
    }

}
const counter=createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

/*
OUTPUT
PS E:\Kanchan\Angular\Assignment\CodingExample> node .\counterFunction.js
1
2
3
*/