// The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result 
// should be { 'a': 2, 'b': 1 }

// What if the string is empty ? Then the result should be empty object literal { }

function count(string) {  
  let object = {};
  let arr = string.split('');
  let arr2 = [];
  for (let i=0; i<arr.length; i++) {
    if (!arr2.includes(arr[i])) {
      arr2.push(arr[i]);
    }
  }
  for (let j=0; j<arr2.length; j++) {
    let count = 0;
    for (let i=0; i<arr.length; i++) {
      if (arr2[j] === arr[i]) {
        count++;
      }
    }
    object[arr2[j]] = count;
  }
  
  return object;
}

// count('aabb')
count('aaabwefwfffbb')
