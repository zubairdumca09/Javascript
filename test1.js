var obj = { name: "zubair" }
var obj1 = { name: "zubair" }
function A(name) {
  this.name = name
}
function B(name) {
  this.name = name
}
var a = new A("a");
var b = new B("a");
console.log(obj === obj1)