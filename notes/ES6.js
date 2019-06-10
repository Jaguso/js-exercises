
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

------------------------------------------------
// Para una función con un numero variable de argumentos, tenemos

function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.

--------------------------------------------
// Podemos usar la notación 'spread' para calcular max y min de
// un array.

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89

// otra forma de hacerlo es la siguiente
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89

// con ésto podemos usar un spread operator para copiar un array
let arr1 = [1,2,3,4,2,1];
let arr2 = [...arr1];
console.log(arr2); // prints [1,2,3,4,2,1]

-------------------------------------------
// Destructuring (to asign variables from objects)
// Ésto 
var voxel = {x: 2, y: 34, z: 46};
const { x,y,z } = voxel;

// Es lo mismo que 
var voxel = {x: 3.6, y: 7.4, z: 6.54 };
var x = voxel.x; 
var y = voxel.y; 
var z = voxel.z; 


// If instead you want to store the values of voxel.x into a, 
// voxel.y into b, and voxel.z into c, you have that freedom as well.
const { x : a, y : b, z : c } = voxel // a = 3.6, b = 7.4, c = 6.54

// You may read it as "get the field x and copy the value into a," 
// and so on.


------------------------------------
// Destructuring an array
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5

----------------------------------
// The result is similar to Array.prototype.slice(), as shown below:

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]

// OBS: The rest element only works correctly as the last 
// variable in the list. As in, you cannot use the rest operator 
// to catch a subarray that leaves out last element of the original 
// array.

// EXAMPLE 
// La siguiente función es como un slice que quita los primeros dos
// elementos del array de entrada
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  const [a,b, ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];


---------------------------------
// esto 
const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
    // do something with these variables
}

// es lo mismo que esto
const profileUpdate = ({ name, age, nationality, location }) => {
    /* do something with these fields */
}

--------------------------------------
// getMousePosition is a simple function that returns an object 
// containing two fields.

const getMousePosition = (x, y) => ({
    x: x,
    y: y
});

// Here is the same function from above rewritten to use this new 
// syntax:

const getMousePosition = (x, y) => ({ x, y });

-----------------------------------
// Definir una función dentro de un objeto en ES5:
const person = {
    name: "Taylor",
    sayHello: function() {
      return `Hello! My name is ${this.name}.`;
    }
};

// Definir una función dentro de un objeto en ES6:
const person = {
    name: "Taylor",
    sayHello() {
      return `Hello! My name is ${this.name}.`;
    }
};

-------------------------------------------
// Notación usual (funcional) para un constructor
var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');


// Notación con 'class'
class SpaceShuttle {
    constructor(targetPlanet){
      this.targetPlanet = targetPlanet;
    }
}
const zeus = new SpaceShuttle('Jupiter');

-----------------------------------------
// Getters and setters
// EXAMPLE
class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer(){
      return this._author;
    }
    // setter
    set writer(updatedAuthor){
      this._author = updatedAuthor;
    }
}
const lol = new Book('anonymous');
console.log(lol.writer);  // anonymous
lol.writer = 'wut';
console.log(lol.writer);  // wut


// EXAMPLE 2
function makeClass() {
    "use strict";
    /* Alter code below this line */
    class Thermostat {
      constructor(temp) {
        this._temp = temp;
      }
  
      get temperature() {
        return (this._temp-32) * 5/9;
      }
  
      set temperature(temp) {
        this._temp = temp;
  
      }
    }
    /* Alter code above this line */
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C

----------------------------
// Notación para importar una sola funcion o variable
import { function } from "file_path_goes_here"
// We can also import variables the same way!

----------------------------
// Para que una funcion o variable se pueda importar, tenemos que
// exportarla de su origen

// esta es una forma de hacerlo
const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
export { capitalizeString } //How to export functions.
export const foo = "bar"; //How to export variables.


// otra forma de hacerlo
const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
const foo = "bar";
export { capitalizeString, foo }

----------------------------
// Usamos * para importar todo de un archivo

// EXAMPLE
import * as myMathModule from "math_functions";
myMathModule.add(2,3);
myMathModule.subtract(5,3);

// en general: 
import * as object_with_name_of_your_choice from "file_path_goes_here"
object_with_name_of_your_choice.imported_function


---------------------------
// Usamos 'export default' si queremos exportar solo un valor del
// file
export default function add(x,y) {
    return x + y;
}

// OBS: Since export default is used to declare a fallback value 
// for a module or file, you can only have one value be a default 
// export in each module or file. Additionally, you cannot use 
// export default with var, let, or const

--------------------------
// Para importar algo exportado con export default no necesitamos
// paréntesis

// EXAMPLE
import add from "math_functions";
add(5,4); //Will return 9