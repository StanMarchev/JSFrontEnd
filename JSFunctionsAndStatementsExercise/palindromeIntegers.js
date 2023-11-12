function palindromeIntegers(array) {
    
    function isPalindrome(num){
        let numAsString = num.toString();
        let reversedNum = numAsString.split('').reverse().join('')

        return numAsString === reversedNum;
    }

    for (const currentNumber of array){
        console.log(isPalindrome(currentNumber));
    }
}

palindromeIntegers([123, 323, 421, 121])