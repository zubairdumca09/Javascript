let arr = [1, 2, 3, [1, 2, [3, 4, [5]]], [[[1]]]]

function onLevelArray(arr, output) {
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      onLevelArray(arr[i], output)
    } else {
      output.push(arr[i])
    }
  }
}

var output = [];
onLevelArray(arr, output)
console.log(output)