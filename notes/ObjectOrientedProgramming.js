*// Esto es un ejemplo de un constructor 

function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
    // "this" inside the constructor always refers to the object being created
}

let blueBird = new Bird();

-----------------------------------
*// Creamos un constructor en el que podemos variar sus propiedades
// al llamarlo

function Bird(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}

let cardinal = new Bird("Bruce", "red");

cardinal.name // => Bruce
cardinal.color // => red
cardinal.numLegs // => 2

------------------------------------
// instanceof devuelve 'true' si el objeto fue creado por un 
// constructor y 'false' si no.

let Bird = function(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");
crow instanceof Bird; // => true


let canary = {
    name: "Mildred",
    color: "Yellow",
    numLegs: 2
};

canary instanceof Bird; // => false

-----------------------------------
// Lo siguiente es para sacar las own properties de un objeto
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");

let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps); // prints [ "name", "numLegs" ]

---------------------------------
*// Con lo siguiente se añade la propiedad a todos los instances 
// del constructor Bird
Bird.prototype.numLegs = 2;

----------------------------------
// La propiedad constructor
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); //prints true
console.log(beagle.constructor === Dog); //prints true

----------------------------------
// Podemos añadir todas las propiedades prototype en un objeto:

// en vez de ésto:
Bird.prototype.numLegs = 2;

Bird.prototype.eat = function() {
    console.log("nom nom nom");
}

Bird.prototype.describe = function() {
    console.log("My name is " + this.name);
}

// ésto: 
Bird.prototype = {
    numLegs: 2, 
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
};

--------------------------------------
// Al añadir propiedades tipo prototype como objeto, tenemos que 
// decir el constructor del que vienen
// ejem:

Bird.prototype = {
    constructor: Bird, // define the constructor property
    numLegs: 2,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name); 
    }
};

-----------------------------------------
*// Otra forma de crear un instance
let animal = Object.create(Animal.prototype);
// es lo mismo que
let animal = new Animal();

----------------------------------------
*// Así usamos 'inheritance' para que Bird herede las propiedades 
// de Animal (ejemplo eat)
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird("Donald");
duck.eat(); // prints "nom nom nom"

// OBS: Antes tenemos que crear el constructor Bird y Animal
// EJEMPLO (completo)

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype)

let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom"

----------------------------------
// Podemos cambiar el constructor del que proviene un instance
When an object inherits its prototype from another object, 
it also inherits the supertype's constructor property.

Here's an example:

function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor // function Animal(){...}
But duck and all instances of Bird should show that they were constructed by Bird and not Animal. To do so, you can manually set Bird's constructor property to the Bird object:

Bird.prototype.constructor = Bird;
duck.constructor // function Bird(){...}

-----------------------------------
// Podemos agregar methods unicos a un constructor heredado de otro
A constructor function that inherits its prototype object from 
a supertype constructor function can still have its own methods 
in addition to inherited methods.

For example, Bird is a constructor that inherits its prototype 
from Animal:

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
In addition to what is inherited from Animal, you want to add behavior that is unique to Bird objects. Here, Bird will get a fly() function. Functions are added to Bird's prototype the same way as any constructor function:

Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
Now instances of Bird will have both eat() and fly() methods:

let duck = new Bird();
duck.eat(); // prints "nom nom nom"
duck.fly(); // prints "I'm flying!"

---------------------------------------
*// EXERCISE (solved)
// Add all necessary code so the Dog object inherits from Animal 
// and the Dog's prototype constructor is set to Dog. Then add a 
// bark() method to the Dog object so that beagle can both eat() 
// and bark(). The bark() method should print "Woof!" to the console.


function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
    console.log("Woof!");
}


// Add your code above this line

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"


// Syntax of an IIFE 
// estas funciones son anonimas y se ejecutan inmediatamente
(function() {
    console.log("A cozy nest is ready");
})();