function addandSubtract(numOne, numTwo, numThree) {
    let sum = (numOne, numTwo)=> {
        return numOne + numTwo;
    };

    let result = sum(numOne, numTwo) - numThree;

    console.log(result);
}

addandSubtract(23, 6, 10)