
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

-----------------------------------------
let FCC_User = {
    username: 'awesome_coder',
    followers: 572,
    points: 1741,
    completedProjects: 15
};

// dot notation
let userData = FCC_User.followers;
// userData equals 572

// bracket notation
// OBS: tenemos que usar quotes
let userData = FCC_User['followers']
// userData equals 572

//también podemos usar ambas notaciones para agregar elementos
// a un objeto
//EXAMPLE
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};

foods.bananas = 13;
foods.grapes = 35;
foods['strawberries'] = 27;

console.log(foods);

-----------------------------------
// misma notación para modificar elementos de un objeto

let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
};

//los siguientes dos son notaciones que hacen lo mismo
userActivity['data']['online'] = 45;
userActivity.data.online = 45;

console.log(userActivity);

---------------------------------
// OBS: con la bracket notation podemos acceder a keys que 
// dependan de una variable (en este caso scannedItem)
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
// do not change code above this line

function checkInventory(scannedItem) {
// change code below this line
return foods[scannedItem]
}

// change code below this line to test different cases:
console.log(checkInventory("apples"));
//logs 25

----------------------------
// Podemos borrar un key: value con la siguiente notación 
delete foods.apples;

-----------------------------
let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
};

// damos dos formas de checar si 'Alan' es un key del objeto users
users.hasOwnProperty('Alan');
'Alan' in users;
// both return true

// también se puede usar la segunda notacion de la siguiente 
// manera

function isEveryoneHere(obj) {
    // change code below this line
    if ('Alan', 'Jeff', 'Sarah', 'Ryan' in users) {
      return true;
    } else {
      return false;
    }
    // change code above this line
}

-----------------------------
// For loop in an object

for (let user in users) {
    console.log(user);
};

// logs:
Alan
Jeff
Sarah
Ryan

-----------------------------
*// Un ejemplo mas complicado
// IMPORTANTE
let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
};
  
//OBS: obj.user son strings no objetos
function countOnline(obj) {
    let count = 0;
    for (let user in obj) {
        if (obj[user].online === true) { //OBS: tenemos que usar esta notacion
            count = count + 1
        }
    }
    return count;
}

console.log(countOnline(users));

---------------------------------------
Object.keys(obj)
// devuelve los keys del objeto obj 
// ejem:

function getArrayOfUsers(obj) {
    return Object.keys(obj);
}

console.log(getArrayOfUsers(users));