function matrix(num) {
    
    function printRow(num) {
        
        let singleRow = (num.toString() + ' ').repeat(num)
        return singleRow;

    }

    for (let currentRow = 1; currentRow <= num;currentRow++ ){
        console.log(printRow(num));
    }
}


matrix(3);