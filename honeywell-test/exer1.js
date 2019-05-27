

function pairs(hours, target) {
    var count = 0;
    for (let i=0; i<hours.length; i++) {
        for(let j=0; j<hours.length; j++) {
            if (hours[j] + hours[i] === target && i!==j) {
                count += 1
            }
        }
    }
    return count/2;
}

console.log(pairs( [1,2,3,5,7,11,13,17], 20))


// var hours = [1,2,3,5,7,11,13,17];
var hours = [1,4,45,6,10,8];
// var target = 20;
var target = 16;
var count = 0;


for (let i=0; i<hours.length; i++) {
    // var ith = hours.splice(i, 1);
    // console.log(ith);
    for(let j=0; j<hours.length; j++) {
        if (hours[j] + hours[i] === target && i!==j) {
            count += 1
        }
    }
}

console.log(count);
