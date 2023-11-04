function printNthElement(arr, nthStep) {
    let output = []
    let arrayLength = arr.length;

    for (let index = 0; index < arrayLength; index+= nthStep) {
        let currentNumber = arr[index];
        output.push(currentNumber);
        
    }
    return(output)
}


printNthElement(['5', '20', '31', '4', '20'], 2)