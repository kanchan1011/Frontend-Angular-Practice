const tasks=[
    {id:1,status:"Done"},
    {id:2,status:"Pending"}
];

const pending=tasks.filter(task=>task.status==="Pending");

console.log(pending);

/*

OUTPUT
PS E:\Kanchan\Angular\Assignment\CodingExample> node .\filterItemMatch.js
[ { id: 2, status: 'Pending' } ]
*/