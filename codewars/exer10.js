// Given a vector of numbers, determine whether the sum of all of the numbers is odd or even.

// Give your answer as a String matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Example:
// odd_or_even([0]) returns "even"
// odd_or_even([0, 1, 4]) returns "odd"
// odd_or_even([0, -1, -5]) returns "even"


function oddOrEven(array) {
  let total = 0;
  array.forEach(item => {
    total = total + item
  });
  return total % 2 === 0 ? 'even' : 'odd';
}

oddOrEven([0, 1, 4])