// Return the lowest index at which a value (second 
// argument) should be inserted into an array (first 
// argument) once it has been sorted. The returned value 
// should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should 
// return 1 because it is greater than 1 (index 0), but 
// less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 
// 2 because once the array has been sorted it will look 
// like [3,5,20] and 19 is less than 20 (index 2) and
// greater than 5 (index 1).


function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort((a,b) => a-b);
    return arr.indexOf(num);
}
  
console.log(getIndexToIns([40, 60], 50));




var num = 23;
var arr = [23,34,2,43,3, 3.5, 3.8];
arr.push(num)
arr.sort((a,b) => a-b); //esto ordena una lista de numeros
console.log(arr);

console.log(arr.sort((a,b) => a-b));