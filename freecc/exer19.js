// Write a function that splits an array (first argument) 
// into groups the length of size (second argument) and 
// returns them as a two-dimensional array.

// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return 
// [[0, 1, 2, 3], [4, 5]].


function chunkArrayInGroups(arr, size) {
    var final = [];
    // arr = arr.slice(0,size);
    // final.push(arr);

    // while (arr.length > 0) {
    //     if (arr.length > size) {
    //         final.push(arr.slice(0,size))
    //         arr = arr.slice(size, );

    //     } else {
    //         final.push(arr);
    //         arr = arr.slice(size, );

    //     }
    // }

    while (arr.length >= size) {
        final.push(arr.slice(0,size))
        arr = arr.slice(size, );
    }
    
    
    return final, arr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));






var arr = [2,3,1,4,2,3,23,3];
var size = 3;
var final = [];
final.push(arr.slice(0,size));
arr = arr.slice(size, );
console.log(arr, final);


while (size < arr.length) {
    arr = arr.slice(0,size);
    final.push(arr);
}

console.log(final);
