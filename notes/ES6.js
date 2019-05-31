
// ABOUT CONST
// It is important to understand that objects (including arrays 
// and functions) assigned to a variable using const are still 
// mutable. Using the const declaration only prevents reassignment 
// of the variable identifier.

"use strict";
const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45]

-----------------------------------------------

// Con Object.freeze hacemos que ya no se pueda cambiar nada de 
// la variable
const MATH_CONSTANTS = {
    PI: 3.14
};
// change code below this line
Object.freeze(MATH_CONSTANTS);


----------------------------------------------

// Tres formas de escribir la misma función
const myFunc = function() {
    const myVar = "value";
    return myVar;
}

const myFunc = () => {
    const myVar = "value";
    return myVar;
}

const myFunc = () => "value";

--------------------------------------------
// El method filter sin arrow function y con arrow function

FBPosts.filter(function(post) {
    return post.thumbnail !== null && post.shares > 100 && post.likes > 500;
});

FBPosts.filter((post) => post.thumbnail !== null && post.shares > 100 && post.likes > 500);

-------------------------------------------------
// La siguiente funcion devuelve el cuadrado de los enteros 
// positivos de un array de entrada

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter(number => number > 0 && Number.isInteger(number)).map(number => number ** 2);
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);