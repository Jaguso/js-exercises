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
*// Así usamos inheritance para que Bird herede las propiedades 
// de Animal (ejemplo eat)
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird("Donald");
duck.eat(); // prints "nom nom nom"

