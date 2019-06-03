
//About push() and unshift()
Both methods take one or more elements as parameters 
and add those elements to the array the method is being 
called on; the push() method adds elements to the end 
of an array, and unshift() adds elements to the beginning.

//ejemplo
function mixedNumbers(arr) {
    arr.unshift('I', 2, 'three')
    arr.push(7, 'VIII', 9)
    return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));

-----------------------------------------
.pop() quita el ultimo elemento 
.shift() quita el primer elemento


function popShift(arr) {
    let popped = arr.pop(); // devuelve el elemento que quitamos
    let shifted = arr.shift(); // devuelve el elemento que quitamos
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
//logs: challenge complete