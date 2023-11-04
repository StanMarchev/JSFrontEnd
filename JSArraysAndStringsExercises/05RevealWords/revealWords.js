function revealWords(words, text){

    let wordsArr = words.split(', ');
    let textArr = text.split(' ');

        for (let index = 0; index < wordsArr.length; index++) {
          for(let j = 0; j < textArr.length; j++){
            if(textArr[j].includes('*') && textArr[j].length === wordsArr[index].length){
                textArr[j] = wordsArr[index]
            }
          }
            
        }

    console.log(textArr.join(' '))
}

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
)