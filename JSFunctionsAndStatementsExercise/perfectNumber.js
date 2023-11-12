function perfectNum(number) {

    let sum = 0;

    for (let current = 1; current < number; current++) {

        if (number % current === 0) {
            sum += current;
        }
    }


    if (sum === number) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }

}
perfectNum(123);