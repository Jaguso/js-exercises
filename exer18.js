// Return true if the string in the first element of the array 
// contains all of the letters of the string in the second element 
// of the array.

function mutation(arr) {
    var result = 1;
    var arrLower = arr.map(elem => elem.toLowerCase());
    for (let i=0; i<arrLower[1].length; i++) {
        if (arrLower[0].includes(arrLower[1][i])) {
            result *= 1
        } else {
            result *= 0
        }
    }
    return result === 1 ? true : false;
}

console.log(mutation(["hello", "hey"]));


