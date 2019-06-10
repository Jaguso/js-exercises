// Fill in the object constructor with the following methods below:

// getFirstName() getLastName() getFullName() setFirstName(first) 
// setLastName(last) setFullName(firstAndLast)

var Person = function(firstAndLast) {
    
    this.firstAndLast = firstAndLast;
    
    this.getFullName = function() {
        return this.firstAndLast
    };


    this.getFirstName = function() {
        return this.firstAndLast.split(' ')[0];
    };
    this.getLastName = function() {
        return this.firstAndLast.split(' ')[1];
    };
    this.setFirstName = function(first) {
        let arr = this.firstAndLast.split(' ');
        arr.splice(0,1,first);
        this.firstAndLast = arr.join(' ');
    };
    this.setLastName = function(last) {
        let arr = this.firstAndLast.split(' ');
        arr.splice(1,1,last);
        this.firstAndLast = arr.join(' ');

    };
    this.setFullName = function(firstAndLast) {
        this.firstAndLast = firstAndLast;
    }
    
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName()); // Bob Ross
console.log(bob.getFirstName()); // Bob
console.log(bob.getLastName()); // Ross

bob.setFirstName('Luis');
bob.setLastName('Galvan');
console.log(bob.getFullName()); // Luis Galvan
bob.setFullName('Rafa Marquez'); 
console.log(bob.getFullName()); // Rafa Marquez



// Esto funciona para setFirstName
var str = 'Luis Martinez';
let newStr = str.split(' ');
newStr.splice(0,1, 'Martin');
// newStr.join(' ');
console.log(newStr.join(' '));
