let a = [[1, 2, 3], [4, 5], [9, [8]]]

let [b, c, [d, e]] = a;

let x = [...b, ...c, d, ...e];

console.log(x)