function convertToJSON(name, lastName, hairColor) {
    let object = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    }
    let json = JSON.stringify(object);
    console.log(json);
}


convertToJSON('George', 'Jones', 'Brown');