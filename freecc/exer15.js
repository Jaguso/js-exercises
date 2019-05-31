// Return the provided string with the first letter of each word 
// capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
    var arr = str.toLowerCase().split(' ');
    var arrNew = []
    for (let i=0; i<arr.length; i++) {
        arrNew.push(arr[i][0].toUpperCase() + arr[i].slice(1, ));
    }
    return arrNew.join(' ');
}

console.log(titleCase("I'm a little tea pot"));


var str = "in my little house";
var arr = str.split(' ');
var l = [];
for (let i=0; i<arr.length; i++) {
    l.push(arr[i][0].toUpperCase() + arr[i].slice(1, ));
}


console.log(l.join(' '));