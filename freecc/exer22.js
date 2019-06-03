// Pig Latin takes the first consonant (or consonant cluster)
// of an English word, moves it to the end of the word and 
// suffixes an "ay".

// If a word begins with a vowel you just add "way" to the 
// end.

// Input strings are guaranteed to be English words in all 
// lowercase.

// EXAMPLES
// translatePigLatin("glove") should return "oveglay".
// translatePigLatin("california") should return "aliforniacay".
// translatePigLatin("algorithm") should return "algorithmway".


function translatePigLatin(str) {

    str.split('').map(elem => {
        if ('aeiou'.includes(elem)) {
            str.indexOf(elem)
        }
    })

    if ('aeiou'.includes(str[0])) {
        str = str + 'way'
    } else {
        str = str.slice(1, ) + str[0] + 'ay'
    }

    return str;
}

console.log(translatePigLatin("consonant"));


var str = 'sodijf';
console.log(str.split('').map(elem => {
    if ('aeiou'.includes(elem)) {
        str.indexOf(elem)
    }
}))

console.log(index);

console.log(str.split('').map(elem => str.indexOf(elem)))
console.log(str.indexOf('o'));


