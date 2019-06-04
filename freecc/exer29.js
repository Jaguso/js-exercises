// Given a positive integer num, return the sum of all odd 
// Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. 
// Every additional number in the sequence is the sum of the two 
// previous numbers. The first six numbers of the Fibonacci 
// sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd 
// Fibonacci numbers less than or equal to 10 are 1, 1, 3, 
// and 5.


function sumFibs(num) {
    let fibonacci = [1,1];
    while (fibonacci[fibonacci.length - 1] <= num) {
        fibonacci.push(
            fibonacci[fibonacci.length-1] + 
            fibonacci[fibonacci.length-2]
        );
        
    }
    let total = 0;
    for (let i=0; i<fibonacci.length; i++) {
        if (fibonacci[i]%2 === 1 && fibonacci[i] <= num) {
            total += fibonacci[i]
        }
    }

    return total;
}

console.log(sumFibs(1000));


var arr = [1,2,34,4];
console.log(arr.pop());