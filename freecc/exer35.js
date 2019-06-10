// Create a function that takes two or more arrays and returns 
// an array of the symmetric difference (△ or ⊕) of the provided 
// arrays.

// Given two sets (for example set A = {1, 2, 3} and set 
// B = {2, 3, 4}), the mathematical term "symmetric 
// difference" of two sets is the set of elements which 
// are in either of the two sets, but not in both 
// (A △ B = C = {1, 4})


// EXAMPLES
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]
// sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].
// sym([1, 2, 3], [5, 2, 1, 4, 5]) should return [3, 4, 5].


// Esta funcion tiene de entrada un array y de salida el array sin 
// valores repetidos
function uniqueElements(arr) {
    let final = [];
    for (let i=0; i<arr.length; i++) {
        if (!final.includes(arr[i])) {
            final.push(arr[i])
        }
    }
    return final;
}

// console.log(uniqueElements([1,1,1,1,2]))

// Esta función cuenta las veces que aparece elem en el array arr
function countElem(arr, elem) {
    let count = 0;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === elem) {
            count = count + 1;
        }
    }
    return count;
}

// console.log(countElem([1,1,1,3,4,2], 2))

function sym(...args) {
    let middle = [];
    for (let i=0; i<args.length; i++) {
        for (let j=0; j<uniqueElements(args[i]).length; j++) {
            middle.push(uniqueElements(args[i])[j])
        }
    }
    let final = [];
    for (let i=0; i<middle.length; i++) {
        if (countElem(middle, middle[i]) === 1) {
            final.push(middle[i]);
        }
    }

    return final;
}

console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));


console.log('asdio'.includes('o'))

var arr = [1,4,34,2,0,9]
arr.sort((a,b) => a-b)
console.log(arr);

