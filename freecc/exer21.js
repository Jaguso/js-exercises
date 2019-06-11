Solved// Make a function that looks through an array of objects 
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
    
    return collection.filter(obj => {
        let final = 0;
        for (let key in source) {
            if (key in obj && obj[key] === source[key]) {
                final = final + 1
            }

        }
        return final === Object.keys(source).length ? true : false;
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


var animals = {
    cat: "milk",
    dog: "juskua"
}

for (key in animals){
    console.log(key in animals)
}

console.log(Object.keys(animals).length);
console.log('cat' in animals)

