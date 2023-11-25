function addressBook(input) {
    input = input.sort((a, b) => a - b);
  let addressBook = {};
  for (const line of input) {
    let token = line.split(":");
    let name = token[0];
    let address = token[1];
    addressBook[name] = address;
    }
    
    Object.entries(addressBook)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([key, value]) => {
    console.log(`${key} -> ${value}`);
  });
}


addressBook([
    "Tim:Doe Crossing",
    "Bill:Nelson Place",
    "Peter:Carlyle Ave",
    "Bill:Ornery Rd",
  ]);