function solve(firstNumber, secondNumber){
    function fact(x) {
        if(x==0) {
        return 1;
        }
        return x * fact(x-1);
        }
    result = fact(firstNumber) / fact(secondNumber)
    console.log(result.toFixed(2))
}


solve(5, 2)
solve(6, 2)