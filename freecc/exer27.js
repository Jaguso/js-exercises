// Dar una funcion que tenga de entrada varios arrays y que
// devuelva un solo array en el que cada numero preserve
// su orden original y que no repita numeros

// Ejemplos:


// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
// uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
// uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].



function uniteUnique(...args) {
    var final = [];
    for (let i=0; i<args.length; i++) {
        for (let j=0; j<args[i].length; j++) {
            if (!final.includes(args[i][j])) {
                final.push(args[i][j])
            }
        }
    }

    return final;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));