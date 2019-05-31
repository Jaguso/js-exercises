// Write simple .camelCase method (camel_case function in PHP, 
// CamelCase in C# or camelCase in Java) for strings. All words 
// must have their first letter capitalized without spaces.


function camelCase(str) {
    var arr = str.toLowerCase().split(' ');
    var final = []
    for(let i = 0; i < arr.length; i++) {
        final.push(arr[i][0].toUpperCase() + arr[i].slice(1,));
    }
    return final.join('');
}

camelCase('Milka corre LEJoss');


//Lo siguient ordena un string (sort() es un method para arrays)
var a = "method";
var b = a.split('').sort().join('')
console.log(b);

//String to uppercase
var str = "Hello World!";
var res = str.toUpperCase();
console.log(res);

//String to lowercase
var str = "Hello World!";
var res = str.toLowerCase();
console.log(res);