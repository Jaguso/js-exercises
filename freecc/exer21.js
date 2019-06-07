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
    ], { last: "Capulet" }) 
    should return 
    [{ first: "Tybalt", last: "Capulet" }].   



function whatIsInAName(collection, source) {

    collection.filter(obj => {
        let final = 1
        for (let key in source) {
            if (key in obj && source[key] === obj[key]) {
                final = final * 1
            } else {
                final = final * 0
            }
        }
        return final === 1 ? true : false;
    })

    
}

console.log(whatIsInAName([
    { first: "Romeo", last: "Montague" }, 
    { first: "Mercutio", last: null }, 
    { first: "Tybalt", last: "Capulet" }
    ], 
    { last: "Capulet" }
));

console.log(whatIsInAName([
    { "apple": 1, "bat": 2 }, 
    { "bat": 2 }, 
    { "apple": 1, "bat": 2, "cookie": 2 }
    ], 
    { "apple": 1, "bat": 2 }
));


 // let final = [];
    // for (let i=0; i<collection.length; i++) {
    //     for (let key in source) {
    //         key in collection[i] 
    //     }

    

    //     // for (let key in collection[i]) {
    //     //     if (collection[i][key] === source[key]) {
    //     //         final.push(collection[i])
    //     //     }
    //     // }

    // }  


const arr = [
    { first: "Romeo", last: "Montague" }, 
    { first: "Mercutio", last: null }, 
    { first: "Tybalt", last: "Capulet" }
]
const {x: first} = arr[0]
console.log(x);