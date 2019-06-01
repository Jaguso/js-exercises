
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

----------------------

