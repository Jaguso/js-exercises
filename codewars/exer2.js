// An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series 
// of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from 
// the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the 
// original AP. Find the missing term.

// You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the 
// first or last one.

// Example
findMissing([1, 3, 5, 9, 11]) == 7

function findMissing(list) {  
  let sum = ((list[0] + list[list.length - 1]) / 2) * (list.length + 1);
  let elemsSum = 0;
  for (let i=0; i<list.length; i++) {
    elemsSum = elemsSum + list[i];
  }
  return sum - elemsSum;
}

findMissing([-3, -5, -9])