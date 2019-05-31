// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", 
// undefined, and NaN.
// ie remove all those values from the input array

function bouncer(arr) {

    return arr.filter(elem => ![false, null, 0 , "", undefined, NaN].includes(elem));
    
}

console.log(bouncer([7, "ate", "", false, 9]));
