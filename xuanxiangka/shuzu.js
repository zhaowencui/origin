var array = [1, 6, 5, 8, 4, 7, 1, 5, 5, 4],
    obj = {};

for (var i = 0; i < array.length; i++) {
    var cur = array[i];

    if (typeof obj[cur] !== 'undefined') {
        array.splice(i, 1, array[array.length - 1]);
        array.length--;
        i--;
        continue;
    }
obj[cur] = cur;
}
console.log(array)