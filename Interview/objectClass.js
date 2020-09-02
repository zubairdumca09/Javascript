function A(){
    this.a = 10,
    this.b = 11
}

A.prototype.c  = 12;


var obj = Object.create(A);

console.log(obj.a)