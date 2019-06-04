// myReplace("Let us go to the store", "store", "mall") 
// should return "Let us go to the mall"

// Note
// Preserve the case of the first character in the original word 
// when you are replacing it. For example if you mean to replace 
// the word "Book" with the word "dog", it should be replaced as 
// "Dog"

function myReplace(str, before, after) {

    let arr = str.split(' ');
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === before) {
            before[0].toUpperCase === before[0] ? 
            arr.splice(i, 1, after[0].toUpperCase() + after.slice(1,)) :
            arr.splice(i, 1, after[0].toLowerCase() + after.slice(1,))
        }
    }

    return arr.join(' ');
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");