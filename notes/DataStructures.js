
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

-----------------------------------------
.slice() examples

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']

-----------------------------------------
// spread operator: Cuando ponemos (...arr), ie un array que no tiene 
// un numero determinado de elementos. 
// OBS: lo usamos para copiar un array

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// thatArray equals [true, true, undefined, false, null]
// thisArray remains unchanged, and is identical to thatArray

-----------------------------------------
// Podemos 'pegar' arrays dentro de otros arrays: 

// Another huge advantage of the spread operator, is the ability 
// to combine arrays, or to insert all the elements of one array 
// into another, at any index. With more traditional syntaxes, 
// we can concatenate arrays, but this only allows us to combine 
// arrays at the end of one, and at the start of another. Spread 
// syntax makes the following operation extremely simple:

let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']