function calculate(x, y, operator) {
    const multiply = (x, y) => x * y;
    const divide = (x, y) => x / y;
    const add = (x, y) => x + y;
    const subtract = (x, y) => x - y;

    switch (operator) {
        case 'multiply':
            console.log(multiply(x, y));
            break;
        case 'divide':
            console.log(divide(x, y));
            break;
        case 'add':
            console.log(add(x, y));
            break;
        case 'subtract':
            console.log(subtract(x, y));
            break;
    }
}

calculate(5, 5, "multiply")
calculate(40, 8, "divide")
calculate(12, 19, "add")
calculate(50, 13, "subtract")