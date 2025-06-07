const input = {
  department: "IT",
  employees: [
    { name: "Aditi", skills: ["Angular", "Node"] },
    { name: "Riya", skills: ["Bootstrap"] },
  ],
};

const result = input.employees.flatMap((emp) => {
  emp.skills.map((skill) => ({ name: emp.name, skill }));
});

console.log("Flat Array: ",result,input)
