function addCPS(a, b, callback) {
   callback(a + b);
}

console.log('before');
addCPS(20, 4, (result) => console.log(`Result => ${result}`));
console.log('after');
