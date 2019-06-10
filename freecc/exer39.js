// Check if the predicate (second argument) is truthy on all elements 
// of a collection (first argument).

// In other words, you are given an array collection of objects. 
// The predicate pre will be an object property and you need to 
// return true if its value is truthy. Otherwise, return false.

// Debe regresar verdadero si la segunda entrada aparece como key
// en todos los objetos del array

function truthCheck(collection, pre) {
    let aux = [];
    for (let i=0; i<collection.length; i++) {
        for (let key in collection[i]) {
            if (key == pre && ![0, null, '', undefined, NaN].includes(collection[i][key])) {
                aux.push(1)
            }
        }      
    }

    return aux.length === collection.length ? true : false;
}
  
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");



var me = {
    "sex": "tape",
    age: 12
}
for (key in me) {
    console.log(key) // prints the keys
}



