Solved// Write a function that splits an array (first argument) into 
// groups the length of size (second argument) and returns them 
// as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    let final = [];
    for (let i=0; i<arr.length; i=i+size) {
        final.push(arr.slice(i, size+i));
    }
    return final;
}


console.log(chunkArrayInGroups(["a", "b", "c", "d",3,4,2,4], 3));


