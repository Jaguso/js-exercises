// Define a function that counts the number of online users

let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
};
  
//OBS: obj.user son strings no objetos
function countOnline(obj) {
    let count = 0;
    for (let user in obj) {
        if (obj[user].online === true) { //OBS: tenemos que usar esta notacion
            count = count + 1
        }
    }
    return count;
}

console.log(countOnline(users));
