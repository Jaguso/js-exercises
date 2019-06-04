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
    var arr = str.split('');
    let aux = [];
    for (let i=0; i<str.length; i++) {
        if ('aeiou'.includes(str[i])) {
            aux.push(i)
        }
    }
    let firstVowel = Math.min(...aux);
    if (firstVowel === 0) {
        return arr.join('') + 'way';
    } else {
        return arr.slice(firstVowel, ).join('') + arr.slice(0,firstVowel).join('') + 'ay'
    }
}

console.log(translatePigLatin("eight"));


