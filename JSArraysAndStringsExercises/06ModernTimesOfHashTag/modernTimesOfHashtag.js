function modernTimes(textToProcess){

    let regex = /#[A-Za-z]+/gm;

    let matches = textToProcess.match(regex)

    

    for (let word of matches) {
        word = word.replace('#','');
        console.log(word);
    }
}


modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')