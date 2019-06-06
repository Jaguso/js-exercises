var Person = function(firstAndLast) {
    this.getFirstName = function() {
        return firstAndLast.split(' ')[0];
    }
    this.getLastName() = function() {
        return firstAndLast.split(' ')[1];
    }
    this.getFullName = function() {
        return firstAndLast
    };
    this.setFirstName(first) = function(first) {
        firstAndLast.split(' ').splice(0,1, first);
    }
    this.setLastName(last) = function(last) {
        firstAndLast.split(' ').splice(1,1,last);
    }
    // this.setFullName(firstAndLast) = function(firstAndLast)
    //     firstAndLast.split().splice(0,1, firstAndLast);
};

var bob = new Person('Bob Ross');
bob.getFullName();