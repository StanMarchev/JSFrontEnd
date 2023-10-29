function sameNumber(number) {
    number = number.toString();
    let firstNumber = number[0];
    let sum = Number(firstNumber);
    let condition = true;
  
    for (let i = 1; i <= number.length - 1; i++) {
      if (firstNumber === number[i]) {
      } else {
        condition = false;
      }
      sum += Number(number[i]);
    }
    console.log(condition);
    console.log(sum);
  }
  
  sameNumber(2222222);
  sameNumber(1234);