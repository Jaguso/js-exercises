// Make a function that looks through an array of objects 
// (first argument) and returns an array of all objects 
// that have matching name and value pairs (second argument).
// Each name and value pair of the source object has to be 
// present in the object from the collection if it is to be 
// included in the returned array.

//EXAMPLE

whatIsInAName([
    { first: "Romeo", last: "Montague" }, 
    { first: "Mercutio", last: null }, 
    { first: "Tybalt", last: "Capulet" }
    ], 
    { last: "Capulet" }) should return 
    [{ first: "Tybalt", last: "Capulet" }].   



function whatIsInAName(collection, source) {
    let final = [];
    for (let i=0; i<collection.length; i++) {
        for (let key in collection[i]) {
            if (collection[i][key] === source[key]) {
                final.push(collection[i])
            }
        }

        // for (collection[i][param] in obj) {

        // }
    }  
    return final;
    // collection.filter(elem[0])
    // var arr = [];
    // return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


const arr = [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]
const {x: first} = arr[0]
console.log(x);