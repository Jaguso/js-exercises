// Bob is a lazy man.

// He needs you to create a method that can determine how many letters and digits are in a given string.

// Example:

"hel2!lo" --> 6
"wicked .. !" --> 6
"!?..A" --> 1


function countLettersAndDigits(input) {
  let arr = input.split('')
  const lettersAndNums = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  return arr.filter(item => lettersAndNums.includes(item)).length
}

countLettersAndDigits('sdoifj234?23"!.. dfg')
