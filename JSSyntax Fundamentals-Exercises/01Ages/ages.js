function solve(number) {
    let output;
    if (number >= 0 && number <= 2) {
      output = "baby";
    } else if (number >= 3 && number <= 13) {
      output = "child";
    } else if (number >= 14 && number <= 19) {
      output = "teenager";
    } else if (number >= 20 && number <= 65) {
      output = "adult";
    } else if (number >= 66) {
      output = "elder";
    } else {
      output = "out of bounds";
    }
    console.log(output);
  }

solve(20);
solve(1);
solve(100);
solve(-1);