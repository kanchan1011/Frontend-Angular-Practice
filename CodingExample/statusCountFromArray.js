let transactions = [
  {
    id: 1,

    description: "Transaction 1",

    status: "pending",

    date: "21-04-2025",
  },

  {
    id: 2,

    description: "Transaction 2",

    status: "completed",

    date: "21-04-2025",
  },

  {
    id: 3,

    description: "Transaction 3",

    status: "rejected",

    date: "21-04-2025",
  },

  {
    id: 4,

    description: "Transaction 4",

    status: "pending",

    date: "21-04-2025",
  },

  {
    id: 5,

    description: "Transaction 5",

    status: null,

    date: "21-04-2025",
  },

  {
    id: 6,

    description: "Transaction 6",

    status: "completed",

    date: "21-03-2025",
  },
];

//Using Reduce Method
const statusCnt = transactions.reduce((acc, transaction) => {
  acc[transaction.status] = (acc[transaction.status] || 0) + 1;
  return acc;
}, {});
console.log("Using reduce() method", statusCnt);

//Using forEach
const statusCount = {};

transactions.forEach((item) => {
  if (statusCount[item.status]) {
    statusCount[item.status]++;
  } else {
    statusCount[item.status] = 1;
  }
});

console.log("Using forEach() method: ", statusCount);

//============ Using map() ====================
const statusMap = new Map();

for (const item of transactions) {
  const count = statusMap.get(item.status) || 0;
  statusMap.set(item.status, count + 1);
}
console.log("Using map() method: ", Object.fromEntries(statusMap));

//====================================================

/**
 * PS E:\Kanchan\Angular\Assignment\CodingExample> node .\statusCountFromArray.js
Using reduce() method { pending: 2, completed: 2, rejected: 1, null: 1 }
Using forEach() method:  { pending: 2, completed: 2, rejected: 1, null: 1 }
Using map() method:  { pending: 2, completed: 2, rejected: 1, null: 1 }
 
*/
