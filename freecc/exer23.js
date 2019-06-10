// Convert a string to spinal case. Spinal case is 
// all-lowercase-words-joined-by-dashes.

// ejem
// spinalCase("The_Andy_Griffith_Show") should return 
// "the-andy-griffith-show".


function spinalCase(str) {
    let final = [];
    for (let i=0; i<str.length; i++) {
        if ()
    }

    if (str.includes(' ') || str.includes('-') || str.includes('_')) {
        
    }
    for (let i=0; i<str.length; i++) {
        if (' -_'.includes(str[i]))
    }
    
}



var str = 'sodfj';
str.split(' ')


var final = []
str.split('');
for (let i =1; i<str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
        return ' -_'.includes(str[i-1]) ? 
        
    }
}



var filterStr = str.split('').filter(elem => !' -_'.includes(elem))

if(str.split('') === filterStr) {
    return 'like'
} else {
    let newStr =  str.toLowerCase().split('').map(char => {
        return 'abcdefghijklmnopqrstuvwxyx'.includes(char) ? char : '-';
    }).join('');
    return newStr;
}

console.log(spinalCase('TheAndy-Griffith_Show'));


var str = 'sdpfok'.split('')
console.log(str)

var str = 'SiempreEresTu';
var arr = str.split('');
for (let i=0; i<arr.length; i++) {
    if (arr[i].toUpperCase() === arr[i] && i !== 0) {
        arr.splice(i, 0, ' ')
    }
}
console.log(arr);


let newStr =  str.toLowerCase().split('').map(char => {
    return 'abcdefghijklmnopqrstuvwxyx'.includes(char) ? char : '-';
}).join('');
return newStr;



console.log('siodjf'.split('').splice(3,0,' '))
console.log('siodjf'.split(''))




var arr = [2,4,345,2]
arr.splice(3,0, 'sd')
console.log(arr)


var str = 'LosTerroristas'
var strr = str.split('')
strr.splice(3, 0, ' ').join('')
console.log(strr)


