// Flatten a nested array. You must account for varying 
// levels of nesting.

// EXAMPLES
// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4]


function steamrollArray(arr) {
    return arr
        .map(elem => 
        typeof(elem) === 'object' ? elem.toString() : elem)
        .join('-')
        .split('')
        .filter(elem => !'-,'.includes(elem))
        .map(elem => 
            'abcdefghijklmnopqrstuvwxyz{}'.includes(elem) ?
            elem :
            parseInt(elem));
    
}

console.log(steamrollArray([1, {}, [3, [[4]]]]));

var arr = [1, {}, [3, [[4]]]]
console.log(arr.join('-'))

var some = {};

console.log(typeof({}))