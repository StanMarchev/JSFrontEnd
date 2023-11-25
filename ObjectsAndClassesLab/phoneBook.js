function phoneBook(input) {
    let person = {}

    while (input.length > 0){
        let [name, phone] = input.shift().split(' ');
        person[name] = phone;
    }

    for (let [key, value] of Object.entries(person)){
            console.log(`${key} -> ${value}`);
    }
}

phoneBook (['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)