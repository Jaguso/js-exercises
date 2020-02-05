// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:
// Input:
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
// Output:
// 'alpha beta gamma delta'

function removeDuplicateWords(s) {
  let arr = s.split(' ');
  let final = [];
  for (let i=0; i<arr.length; i++) {
    if (!final.includes(arr[i])) {
      final.push(arr[i])
    }
  }
  return final.join(' ');
}

removeDuplicateWords('a a bowe b b')

function removeDuplicateWords(s) {
  let final = []
  s.split(' ').forEach(elem => {
    if (!final.includes(elem)) {
      final.push(elem)
    }
  })
  return final.join(' ')
}

removeDuplicateWords('a a bowe b b')