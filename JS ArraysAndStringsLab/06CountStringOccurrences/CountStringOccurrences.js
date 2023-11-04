function solve(text, word) {
    const words = text.split(" ");
    let counter = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i] === word) {
            counter++;
        }
        
    }
     console.log(counter);

}

solve('softuni is great place for learning new programming languages','softuni');