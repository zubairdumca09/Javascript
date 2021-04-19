function A() {
    this.a = 10;
    this.b = 11;
}

A.prototype.c = 12;

var ob = new A();

var obj = Object.create(ob);

console.log(obj.a, obj.b, obj.c)