// One of the simplest and most widely known ciphers is a 
// Caesar cipher, also known as a shift cipher. In a shift 
// cipher the meanings of the letters are shifted by some 
// set amount.

// A common modern use is the ROT13 cipher, where the values 
// of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' 
// and so on.

// Write a function which takes a ROT13 encoded string as 
// input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic 
// character (i.e. spaces, punctuation), but do pass them on.


function rot13(str) { // LBH QVQ VG!
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var final = "";
    for (let i=0; i<str.length; i++) {
        if (alphabet.includes(str[i])) {
            let index = (alphabet.indexOf(str[i]) + 13) % 26;
            final += (alphabet[index]);
        } else {
            final += str[i];
        }
    }
    return final;
}

console.log(rot13("SERR PBQR PNZC"));






var str = "PSODKF";
var str2 = ""
for (let i=0; i<str.length; i++) {
    str2 += str[i] + 'q'
}
console.log(str2);

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var final = "fdg"
var str = "LOVE BITCH";
var index = (alphabet.indexOf(str[2]) + 13) % 26;
console.log(final + alphabet[index]);
console.log(alphabet.includes(str[4]));


