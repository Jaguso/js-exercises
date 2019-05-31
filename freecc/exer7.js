// Check if a string (first argument, str) ends with the given 
// target string (second argument, target).

function confirmEnding(str, target) {
    var strEnd = str.slice(-target.length,);
    return strEnd === target ? true : false        
}

console.log(confirmEnding("Bastian", "n"));


