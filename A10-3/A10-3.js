function fizzbuzz (beginningNumber, endingNumber) {
    for (let i = beginningNumber; i <= endingNumber; i++) {
        if (i % 4 == 0 && i % 5 == 0) {
            document.write("FizzBuzz <br>");
        }
        else if (i % 4 == 0) {
            document.write("Fizz <br>");
        }
        else if (i % 5 == 0) {
            document.write("Buzz <br>");
        }
        else {
            document.write(i + "<br>");
        } 
    }
}
let startNum = window.prompt("Enter starting number:", "");
let endNum = window.prompt("Enter end number:", "");
fizzbuzz(startNum, endNum);