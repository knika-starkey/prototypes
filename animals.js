function Animal(name) {
  this.name = name;
  this.speed = 0;
}

Animal.prototype.run = function () {
  alert(this.name + " біжить!");
};
// let animal = new Animal("Unknown");
// animal.run();
function Rabbit(name) {
  Animal.apply(this, arguments);
}

Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

Rabbit.prototype.run = function () {
  Animal.prototype.run.apply(this);
  alert(this.name + " підпригує!");
};
//rabbit.run();

function Dog(name) {
  Animal.apply(this, arguments);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.run = function () {
  Animal.prototype.run.apply(this);
  alert(this.name + " виляє хвостом!");
};

function Snake(name) {
  Animal.apply(this, arguments);
}

Snake.prototype = Object.create(Animal.prototype);
Snake.prototype.constructor = Snake;

Snake.prototype.run = function () {
  // Animal.prototype.run.apply(this);
  alert(this.name + " повзе!");
};
function Cock(name) {
  Animal.apply(this, arguments);
}

Cock.prototype = Object.create(Animal.prototype);
Cock.prototype.constructor = Cock;

Cock.prototype.run = function () {
  Animal.prototype.run.apply(this);
  alert(this.name + " летить!");
};
function Elephant(name) {
  Animal.apply(this, arguments);
}

Elephant.prototype = Object.create(Animal.prototype);
Elephant.prototype.constructor = Elephant;

Elephant.prototype.run = function () {
  Animal.prototype.run.apply(this);
  alert(this.name + " тупає!");
};
function Cat(name) {
  Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.run = function () {
  Animal.prototype.run.apply(this);
  alert(this.name + " крадеться!");
};

let rabbit = new Rabbit("Кролик");
let dog = new Dog("Пес");
let cat = new Cat("Kіт");
let cock = new Cock("Півень");
let snake = new Snake("Змія");
let elephant = new Elephant("Cлон");
//dog.run();
let animals = [rabbit, dog, cat, cock, snake, elephant];
for (let i = 0; i < animals.length; i++) {
  animals[i].run();
}
