// Complete the function scramble(str1, str2) that returns 
// true if a portion of str1 characters can be rearranged 
// to match str2, otherwise returns false.

// example: 
Test.assertEquals(scramble('rkqodlw','world'),true);


function scramble(str1, str2) {
    let arr1 = str1.split('');
    let arr2 = str2.split('');
    var l = []
    while (arr1.includes(arr2[0]) ) {
        arr1.splice(arr1.indexOf(arr2[0]),1)
        arr2.slice(1, );
        l.push(arr2);
    }
    return l;

    // return arr2.length;
}

console.log(scramble('rkqodlw','world'));


var str1 = 'rkqodlw';
var str2 = 'world';
var arr1 = str1.split('');
var arr2 = str2.split('');
arr1.splice(arr1.indexOf(arr2[0]), 1)

console.log(arr1.includes(arr2[0]));
console.log(arr2.slice(1,));
console.log(arr1);








var str = "something";
var arr = str.split('')
arr.splice(1,1);
console.log(arr);


var arr = [1,2,45,2,34]
var arr1 = arr.filter(x => (x<3))
console.log(arr1);

var arr = ['c', 'g', 'a'];
console.log(arr.pop('c'));

var months = ['jan', 'march', 'april', 'may'];

var arr = ['a', 'b', 'd', 'e'];
arr.splice(1,1)
console.log(arr);

var arr = ['a', 'c', 'd'];
arr.splice(1,0,'b');
console.log(arr)

var animals = ['vaca', 'perro', 'gato'];
animals.splice(1,0, 'borrego', 'viudo');


var nums = [1,2,3,4,5,6];
nums.splice(0,1);
console.log(nums);