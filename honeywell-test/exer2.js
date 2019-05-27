//Hallar el numero menor a n y mas cercano a n, que tenga
//todos sus digitos en order ascendente.

function closestArrangedTemperature(n) {
    var finalArr = []
    var i = 0;
    numArr = n.toString().split('').map(elem => parseInt(elem));
    while (numArr[i] <= numArr[i+1]) {
        finalArr.push(numArr[i]);
        i += 1;
    }

    finalArr.push(numArr[finalArr.length] - 1);
    for (let i=0; i<numArr.length-finalArr.length; i++) {
        finalArr.push(9);
    }

    return finalArr.join('');
    
}

console.log(closestArrangedTemperature(578902343590));

var n = 2344923
nArr = n.toString().split('')
numArr = nArr.map(elem => parseInt(elem));
numArr.slice(0,3)
console.log(Math.max(...numArr.slice(0,3)))


nArr = n.toString().split('')
nArrSort = n.toString().split('').sort();
console.log(nArr);
console.log(nArrSort);
var l = []


var n = 23345344;
nArrSort = n.toString().split('').sort();
console.log(nArrSort)

nArr = n.toString().split('');
console.log(parseInt("2")*2)
console.log(nArr);

while (parseInt(nArr[i]) <= parseInt(aArr[i+1])) {
    final.push(nArr[i])
}