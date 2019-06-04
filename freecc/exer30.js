// Sum all the prime numbers up to and including the provided 
// number.
// EXAMPLE:
// sumPrimes(10) should return 17.

// this function detects prime numbers (returns true if they
// are prime and false if the are not)

function isPrime(num) {
    let count = [];
    for (let i=1; i<=num; i++) {
        if(num%i !== 0) {
            count.push(i);
        }
    }
    return count.length === num-2 ? true : false;
}


function sumPrimes(num) {
    let total = 0;
    for (let i=2; i<=num; i++) {
        if (isPrime(i)) {
            total = total + i
        }
    }
    return total;
}

console.log(sumPrimes(977));



// solution with only one function
function sumPrimes(num) {
    let total = 0
    for (let i=2; i<=num; i++) {
        let count = [];
        for (let j=1; j<=i; j++) {
            if(i%j !== 0) {
                count.push(j);
            }
        }
        count.length === i-2 ? 
        total = total + i : total = total + 0
    }
    return total;
}

console.log(sumPrimes(977));



