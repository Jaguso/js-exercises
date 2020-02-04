// Given an array, find the integer that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  let noRepeat = []
  for (let i=0; i<A.length; i++) {
    if (!noRepeat.includes(A[i])) {
      noRepeat.push(A[i]);
    }
  }
  for (let j=0; j<noRepeat.length; j++) {
    count = 0;
    for (let i=0; i<A.length; i++) {
      if (noRepeat[j] === A[i]) {
        count++
      }
    }
    if (count % 2 === 1) {
      return noRepeat[j]
    }
  }
}

findOdd([1,1,3,3,3,3,2])