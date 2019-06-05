// Validate if an array is a telephone number


function telephoneCheck(str) {
    let aux = []
    for (let i=0; i<str.length; i++) {
        !'0123456789-() '.includes(str[i]) ? 
            aux.push(false) : aux.push(true);
        
    }
    let numbers = str.split('').filter(num => {
        '0123456789'.includes(num);
    }).length
    numbers.length === 10 || numbers.length === 11 ? aux.push(true) : aux.push(false);

    return aux;
}

console.log(telephoneCheck("555-555-5555"));