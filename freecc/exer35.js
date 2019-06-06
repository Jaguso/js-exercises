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

function sym(...args) {
    let final = [];
    for (let i=0; i<args.length; i++) {
        
    }

    return args;
}

sym([1, 2, 3], [5, 2, 1, 4]);