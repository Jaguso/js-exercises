//Define a function that returns the length of the longest word of 
//a given string

function findLongestWordLength(str) {
    var arr = str.split(' ');
    var arrLengths = []
    for (let i=0; i<arr.length; i++) {
        arrLengths.push(arr[i].length);
    }

    return Math.max(...arrLengths);
  }

  console.log(findLongestWordLength('this is my papper bag'));

  Math.max(...arr) //devuelve el maximo en un array