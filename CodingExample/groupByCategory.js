const items=[
    {name:'Mobile',category:'Electronic'},
    {name:'table',category:'Furniture'},
    {name:'laptop',category:'Electronic'},
    {name:'keyboard',category:'Electronic'},
    {name:'Chair',category:'Furniture'},
];

const grouped=items.reduce((acc,item)=>{
    acc[item.category]=acc[item.category]||[];
    acc[item.category].push(item);
    return acc;

},{})

console.log("Grouped: ",grouped);

/**
 * OUTPUT
 * PS E:\Kanchan\Angular\Assignment\CodingExample> node .\groupByCategory.js
Grouped:  {
  Electronic: [
    { name: 'Mobile', category: 'Electronic' },
    { name: 'laptop', category: 'Electronic' },
    { name: 'keyboard', category: 'Electronic' }
  ],
  Furniture: [
    { name: 'table', category: 'Furniture' },
    { name: 'Chair', category: 'Furniture' }
  ]
}
 */