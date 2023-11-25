function solve(namesArr) {
  
  let employees = {};
  for (const name of namesArr) {
    employees[name] = name.length;
  }

  Object.keys(employees).forEach((name) => {
    console.log(`Name: ${name} -- Personal Number: ${employees[name]}`);
  });
}

solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);