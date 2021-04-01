// exports.info = (message) => {
//    console.log(`Info: ${message}`);
// };

// exports.verbose = (message) => {
//    console.log(`Verbose: ${message}`);
// };

// Using module.exports

module.exports = (message) => {
   console.log(`Info: ${message}`);
};

module.exports.verbose = (message) => {
   console.log(`Verbose: ${message}`);
};
