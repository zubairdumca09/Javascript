function Animal(ears, legs) {
    this.ears = ears;
    this.legs = legs;
}

Animal.prototype.print = function () {
    console.log(this.ears, this.legs)
}


function Dog(ears, legs, tail) {
    Animal.call(this, ears, legs);
    this.tail = tail;
}
Dog.prototype = Animal.prototype;
Dog.constructor = Dog;
Dog.prototype.print = function () {
    console.log(this.ears, this.legs, this.tail)
}


var dog = new Dog(2, 4, 5);

dog.print();
console.log(dog)
console.log(dog instanceof Dog, Dog.constructor.name)