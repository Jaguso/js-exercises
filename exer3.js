//Reverse the input string

function reverseString(str) {
    let arr = str.split('').reverse().join('');
    return arr;
}

reverseString("hello");