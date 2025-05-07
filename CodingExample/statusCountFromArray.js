let transactions = [

    {
  
      id: 1,
  
      description: 'Transaction 1',
  
      status: 'pending',
  
      date:'21-04-2025'
  
    },
  
    {
  
      id: 2,
  
      description: 'Transaction 2',
  
      status: 'completed',
  
      date:'21-04-2025'
  
    },
  
    {
  
      id: 3,
  
      description: 'Transaction 3',
  
      status: 'rejected',
  
      date:'21-04-2025'
   
    },
  
    {
  
      id: 4,
  
      description: 'Transaction 4',
  
      status: 'pending',
  
      date:'21-04-2025'
  
    },
  
    {
  
      id: 5,
  
      description: 'Transaction 5',
  
      status: null,
  
      date:'21-04-2025'
  
    },
  
    {
  
      id: 6,
  
      description: 'Transaction 6',
  
      status: 'completed',
  
      date:'21-03-2025'
  
    }
  
  ];

  const statusCount=transactions.reduce((acc,transaction)=>{
acc[transaction.status]=(acc[transaction.status]||0)+1;
return acc;
  },{});
  console.log(statusCount);


  /**
   * OUTPUT
   * { pending: 2, completed: 2, rejected: 1, null: 1 }
   */