function charactersInRange(firstChar, secondChar) {
    let result = ''
    let start = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let end = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());

    for(let currentCode = start + 1; currentCode < end; currentCode++){

         const currentChar = String.fromCharCode(currentCode);

         result += `${currentChar} `;
    }
    console.log(result.trimEnd());
}

charactersInRange('a', 'k')