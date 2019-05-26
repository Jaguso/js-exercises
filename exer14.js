// You are given two arrays and an index.
// Use the array methods slice and splice to copy each element 
// of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.


function frankenSplice(arr1, arr2, n) {    
    for (let i=0; i<arr1.length; i++){
        arr3.splice(n,0,arr1[i])
        n +=1
    }
    return arr2;
}

console.log(frankenSplice([1, 2], ["a", "b"], 1));