// Answer #1
var user = new function () {
  this.name = "Zubair"
  //other code
}

//Answer #3
var obj = {}
function A() { return obj } function B() { return obj }
let a = new A; let b = new B;
alert(a == b);

//Answer #8
function random(min, max) {
  return min + Math.random() * (max - min);
}

//Answer #9
let str = `Hello`;
alert(str[1000]); // undefined
alert(str.charAt(1000)); // '' (an empty string)    