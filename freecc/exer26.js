// Find the missing letter in the passed letter range and 
// return it.
// If all letters are present in the range, return undefined.
// fearNotLetter("abcdefghjklmno") should return "i".
// fearNotLetter("stvwx") should return "u".


function fearNotLetter(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var final = [];
    for (let i=0; i<str.length-1; i++) {
        if (alphabet.indexOf(str[i+1]) !== alphabet.indexOf(str[i])+1) {
            final.push(alphabet[alphabet.indexOf(str[i])+1]);
        } 
    }

    return final.length > 0 ? final.join('') : undefined;

}

console.log(fearNotLetter("abce"));
