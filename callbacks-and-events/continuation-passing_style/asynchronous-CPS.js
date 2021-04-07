function additionAsync(a, b, callback) {
   setTimeout(() => callback(a + b), 100);
}

console.log('before');
additionAsync(4, 4, (result) => console.log(result));
console.log('after');
