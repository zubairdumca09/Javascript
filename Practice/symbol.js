//Creating private variable
var Pet1 = (function () {
  function Pet(type, breed) {
    this.getType = function () {
      return type;
    }
    this.getBreed = function () {
      return breed;
    }
  }
  Pet.prototype.getType = function () {
    return { type: this[typeSymbol], breed: this[breedSymbol] };
  }
  return Pet;
}())

//Creating private variable(Symbol way)
var Pet = (function () {
  var typeSymbol = Symbol('type');
  var breedSymbol = Symbol('breed');
  function Pet(type, breed) {
    this[typeSymbol] = type;
    this[breedSymbol] = type;
  }
  Pet.prototype.getType = function () {
    return { type: this[typeSymbol], breed: this[breedSymbol] };
  }
  return Pet;
}())

var pet = new Pet('dog', 'germen');
console.log(pet);

